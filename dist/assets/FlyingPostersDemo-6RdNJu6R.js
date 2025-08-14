import{g as E,r as l,j as a,R as S,C as z,e as T,P as L,M as R,B as b,T as M}from"./index-j7DW7U0N.js";import{T as P,P as W,a as H,C as A,b as D,c as C,d as F}from"./PropTable-Baf4PZpP.js";import{C as O}from"./Customize-Dq9g9yhm.js";import{P as w}from"./PreviewSlider-D0sSZbsU.js";import{R as j}from"./RefreshButton-BMj2HM2t.js";import{D as G}from"./Dependencies-BSh7s3YA.js";import{u as I}from"./useForceRerender-LUtjsLCb.js";import{P as k,T as U}from"./Plane-D9iT4y8l.js";const Z=`import { useRef, useEffect } from "react";
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Program,
  Mesh,
  Texture,
} from "ogl";

import './FlyingPosters.css';

const vertexShader = \`
precision highp float;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float uPosition;
uniform float uTime;
uniform float uSpeed;
uniform vec3 distortionAxis;
uniform vec3 rotationAxis;
uniform float uDistortion;

varying vec2 vUv;
varying vec3 vNormal;

float PI = 3.141592653589793238;
mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(
      oc * axis.x * axis.x + c,         oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                              0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float qinticInOut(float t) {
  return t < 0.5
    ? 16.0 * pow(t, 5.0)
    : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
}

void main() {
  vUv = uv;
  
  float norm = 0.5;
  vec3 newpos = position;
  float offset = (dot(distortionAxis, position) + norm / 2.) / norm;
  float localprogress = clamp(
    (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion),
    0.,
    2.
  );
  localprogress = qinticInOut(localprogress) * PI;
  newpos = rotate(newpos, rotationAxis, localprogress);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
\`;

const fragmentShader = \`
precision highp float;

uniform vec2 uImageSize;
uniform vec2 uPlaneSize;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec2 imageSize = uImageSize;
  vec2 planeSize = uPlaneSize;

  float imageAspect = imageSize.x / imageSize.y;
  float planeAspect = planeSize.x / planeSize.y;
  vec2 scale = vec2(1.0, 1.0);

  if (planeAspect > imageAspect) {
      scale.x = imageAspect / planeAspect;
  } else {
      scale.y = planeAspect / imageAspect;
  }

  vec2 uv = vUv * scale + (1.0 - scale) * 0.5;

  gl_FragColor = texture2D(tMap, uv);
}
\`;

function AutoBind(self, { include, exclude } = {}) {
  const getAllProperties = (object) => {
    const properties = new Set();
    do {
      for (const key of Reflect.ownKeys(object)) {
        properties.add([object, key]);
      }
    } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
    return properties;
  };

  const filter = (key) => {
    const match = (pattern) =>
      typeof pattern === "string" ? key === pattern : pattern.test(key);

    if (include) return include.some(match);
    if (exclude) return !exclude.some(match);
    return true;
  };

  for (const [object, key] of getAllProperties(self.constructor.prototype)) {
    if (key === "constructor" || !filter(key)) continue;
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === "function") {
      self[key] = self[key].bind(self);
    }
  }
  return self;
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function map(num, min1, max1, min2, max2, round = false) {
  const num1 = (num - min1) / (max1 - min1);
  const num2 = num1 * (max2 - min2) + min2;
  return round ? Math.round(num2) : num2;
}

class Media {
  constructor({
    gl,
    geometry,
    scene,
    screen,
    viewport,
    image,
    length,
    index,
    planeWidth,
    planeHeight,
    distortion,
  }) {
    this.extra = 0;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;
    this.image = image;
    this.length = length;
    this.index = index;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;

    this.createShader();
    this.createMesh();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, {
      generateMipmaps: false,
    });

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        tMap: { value: texture },
        uPosition: { value: 0 },
        uPlaneSize: { value: [0, 0] },
        uImageSize: { value: [0, 0] },
        uSpeed: { value: 0 },
        rotationAxis: { value: [0, 1, 0] },
        distortionAxis: { value: [1, 1, 0] },
        uDistortion: { value: this.distortion },
        uViewportSize: { value: [this.viewport.width, this.viewport.height] },
        uTime: { value: 0 },
      },
      cullFace: false,
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSize.value = [
        img.naturalWidth,
        img.naturalHeight,
      ];
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }

  setScale() {
    this.plane.scale.x =
      (this.viewport.width * this.planeWidth) / this.screen.width;
    this.plane.scale.y =
      (this.viewport.height * this.planeHeight) / this.screen.height;

    this.plane.position.x = 0;
    this.plane.program.uniforms.uPlaneSize.value = [
      this.plane.scale.x,
      this.plane.scale.y,
    ];
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      this.plane.program.uniforms.uViewportSize.value = [
        this.viewport.width,
        this.viewport.height,
      ];
    }
    this.setScale();

    this.padding = 5;
    this.height = this.plane.scale.y + this.padding;
    this.heightTotal = this.height * this.length;

    this.y = -this.heightTotal / 2 + (this.index + 0.5) * this.height;
  }

  update(scroll) {
    this.plane.position.y = this.y - scroll.current - this.extra;

    const position = map(
      this.plane.position.y,
      -this.viewport.height,
      this.viewport.height,
      5,
      15
    );

    this.program.uniforms.uPosition.value = position;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = scroll.current;

    const planeHeight = this.plane.scale.y;
    const viewportHeight = this.viewport.height;

    const topEdge = this.plane.position.y + planeHeight / 2;
    const bottomEdge = this.plane.position.y - planeHeight / 2;

    if (topEdge < -viewportHeight / 2) {
      this.extra -= this.heightTotal;
    } else if (bottomEdge > viewportHeight / 2) {
      this.extra += this.heightTotal;
    }
  }
}

class Canvas {
  constructor({
    container,
    canvas,
    items,
    planeWidth,
    planeHeight,
    distortion,
    scrollEase,
    cameraFov,
    cameraZ,
  }) {
    this.container = container;
    this.canvas = canvas;
    this.items = items;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;
    this.scroll = {
      ease: scrollEase,
      current: 0,
      target: 0,
      last: 0,
    };
    this.cameraFov = cameraFov;
    this.cameraZ = cameraZ;

    AutoBind(this);

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();

    this.createGeometry();
    this.createMedias();
    this.update();
    this.addEventListeners();
    this.createPreloader();
  }

  createRenderer() {
    this.renderer = new Renderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    this.gl = this.renderer.gl;
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = this.cameraFov;
    this.camera.position.z = this.cameraZ;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 1,
      widthSegments: 100,
    });
  }

  createMedias() {
    this.medias = this.items.map((image, index) => {
      return new Media({
        gl: this.gl,
        geometry: this.planeGeometry,
        scene: this.scene,
        screen: this.screen,
        viewport: this.viewport,
        image,
        length: this.items.length,
        index,
        planeWidth: this.planeWidth,
        planeHeight: this.planeHeight,
        distortion: this.distortion,
      });
    });
  }

  createPreloader() {
    this.loaded = 0;
    if (!this.items.length) return;

    this.items.forEach((src) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = src;
      image.onload = () => {
        this.loaded += 1;
        if (this.loaded === this.items.length) {
          document.documentElement.classList.remove("loading");
          document.documentElement.classList.add("loaded");
        }
      };
    });
  }

  onResize() {
    const rect = this.container.getBoundingClientRect();
    this.screen = {
      width: rect.width,
      height: rect.height,
    };

    this.renderer.setSize(this.screen.width, this.screen.height);

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height,
    });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.viewport = { height, width };

    if (this.medias) {
      this.medias.forEach((media) =>
        media.onResize({ screen: this.screen, viewport: this.viewport })
      );
    }
  }

  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientY : e.clientY;
  }

  onTouchMove(e) {
    if (!this.isDown) return;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const distance = (this.start - y) * 0.1;
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.isDown = false;
  }

  onWheel(e) {
    const speed = e.deltaY;
    this.scroll.target += speed * 0.005;
  }

  update() {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    );

    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    requestAnimationFrame(this.update);
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("wheel", this.onWheel);
    window.addEventListener("mousewheel", this.onWheel);

    window.addEventListener("mousedown", this.onTouchDown);
    window.addEventListener("mousemove", this.onTouchMove);
    window.addEventListener("mouseup", this.onTouchUp);

    window.addEventListener("touchstart", this.onTouchDown);
    window.addEventListener("touchmove", this.onTouchMove);
    window.addEventListener("touchend", this.onTouchUp);
  }

  destroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("mousewheel", this.onWheel);

    window.removeEventListener("mousedown", this.onTouchDown);
    window.removeEventListener("mousemove", this.onTouchMove);
    window.removeEventListener("mouseup", this.onTouchUp);

    window.removeEventListener("touchstart", this.onTouchDown);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchUp);
  }
}

export default function FlyingPosters({
  items = [],
  planeWidth = 320,
  planeHeight = 320,
  distortion = 3,
  scrollEase = 0.01,
  cameraFov = 45,
  cameraZ = 20,
  className,
  ...props
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    instanceRef.current = new Canvas({
      container: containerRef.current,
      canvas: canvasRef.current,
      items,
      planeWidth,
      planeHeight,
      distortion,
      scrollEase,
      cameraFov,
      cameraZ,
    });

    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, [items, planeWidth, planeHeight, distortion, scrollEase, cameraFov, cameraZ]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasEl = canvasRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      if (instanceRef.current) {
        instanceRef.current.onWheel(e);
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    canvasEl.addEventListener("wheel", handleWheel, { passive: false });
    canvasEl.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      canvasEl.removeEventListener("wheel", handleWheel);
      canvasEl.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={\`posters-container \${className}\`}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="posters-canvas"
      />
    </div>
  );
}
`,V=`.posters-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.posters-canvas {
  display: block;
  width: 100%;
  height: 100%;
}`,Y=`import { useRef, useEffect } from "react";
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Program,
  Mesh,
  Texture,
} from "ogl";

const vertexShader = \`
precision highp float;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float uPosition;
uniform float uTime;
uniform float uSpeed;
uniform vec3 distortionAxis;
uniform vec3 rotationAxis;
uniform float uDistortion;

varying vec2 vUv;
varying vec3 vNormal;

float PI = 3.141592653589793238;
mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(
      oc * axis.x * axis.x + c,         oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                              0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float qinticInOut(float t) {
  return t < 0.5
    ? 16.0 * pow(t, 5.0)
    : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
}

void main() {
  vUv = uv;
  
  float norm = 0.5;
  vec3 newpos = position;
  float offset = (dot(distortionAxis, position) + norm / 2.) / norm;
  float localprogress = clamp(
    (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion),
    0.,
    2.
  );
  localprogress = qinticInOut(localprogress) * PI;
  newpos = rotate(newpos, rotationAxis, localprogress);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
\`;

const fragmentShader = \`
precision highp float;

uniform vec2 uImageSize;
uniform vec2 uPlaneSize;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec2 imageSize = uImageSize;
  vec2 planeSize = uPlaneSize;

  float imageAspect = imageSize.x / imageSize.y;
  float planeAspect = planeSize.x / planeSize.y;
  vec2 scale = vec2(1.0, 1.0);

  if (planeAspect > imageAspect) {
      scale.x = imageAspect / planeAspect;
  } else {
      scale.y = planeAspect / imageAspect;
  }

  vec2 uv = vUv * scale + (1.0 - scale) * 0.5;

  gl_FragColor = texture2D(tMap, uv);
}
\`;

function AutoBind(self, { include, exclude } = {}) {
  const getAllProperties = (object) => {
    const properties = new Set();
    do {
      for (const key of Reflect.ownKeys(object)) {
        properties.add([object, key]);
      }
    } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
    return properties;
  };

  const filter = (key) => {
    const match = (pattern) =>
      typeof pattern === "string" ? key === pattern : pattern.test(key);

    if (include) return include.some(match);
    if (exclude) return !exclude.some(match);
    return true;
  };

  for (const [object, key] of getAllProperties(self.constructor.prototype)) {
    if (key === "constructor" || !filter(key)) continue;
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === "function") {
      self[key] = self[key].bind(self);
    }
  }
  return self;
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function map(num, min1, max1, min2, max2, round = false) {
  const num1 = (num - min1) / (max1 - min1);
  const num2 = num1 * (max2 - min2) + min2;
  return round ? Math.round(num2) : num2;
}

class Media {
  constructor({
    gl,
    geometry,
    scene,
    screen,
    viewport,
    image,
    length,
    index,
    planeWidth,
    planeHeight,
    distortion,
  }) {
    this.extra = 0;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;
    this.image = image;
    this.length = length;
    this.index = index;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;

    this.createShader();
    this.createMesh();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, {
      generateMipmaps: false,
    });

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        tMap: { value: texture },
        uPosition: { value: 0 },
        uPlaneSize: { value: [0, 0] },
        uImageSize: { value: [0, 0] },
        uSpeed: { value: 0 },
        rotationAxis: { value: [0, 1, 0] },
        distortionAxis: { value: [1, 1, 0] },
        uDistortion: { value: this.distortion },
        uViewportSize: { value: [this.viewport.width, this.viewport.height] },
        uTime: { value: 0 },
      },
      cullFace: false,
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSize.value = [
        img.naturalWidth,
        img.naturalHeight,
      ];
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }

  setScale() {
    this.plane.scale.x =
      (this.viewport.width * this.planeWidth) / this.screen.width;
    this.plane.scale.y =
      (this.viewport.height * this.planeHeight) / this.screen.height;

    this.plane.position.x = 0;
    this.plane.program.uniforms.uPlaneSize.value = [
      this.plane.scale.x,
      this.plane.scale.y,
    ];
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      this.plane.program.uniforms.uViewportSize.value = [
        this.viewport.width,
        this.viewport.height,
      ];
    }
    this.setScale();

    this.padding = 5;
    this.height = this.plane.scale.y + this.padding;
    this.heightTotal = this.height * this.length;

    this.y = -this.heightTotal / 2 + (this.index + 0.5) * this.height;
  }

  update(scroll) {
    this.plane.position.y = this.y - scroll.current - this.extra;

    const position = map(
      this.plane.position.y,
      -this.viewport.height,
      this.viewport.height,
      5,
      15
    );

    this.program.uniforms.uPosition.value = position;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = scroll.current;

    const planeHeight = this.plane.scale.y;
    const viewportHeight = this.viewport.height;

    const topEdge = this.plane.position.y + planeHeight / 2;
    const bottomEdge = this.plane.position.y - planeHeight / 2;

    if (topEdge < -viewportHeight / 2) {
      this.extra -= this.heightTotal;
    } else if (bottomEdge > viewportHeight / 2) {
      this.extra += this.heightTotal;
    }
  }
}

class Canvas {
  constructor({
    container,
    canvas,
    items,
    planeWidth,
    planeHeight,
    distortion,
    scrollEase,
    cameraFov,
    cameraZ,
  }) {
    this.container = container;
    this.canvas = canvas;
    this.items = items;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;
    this.scroll = {
      ease: scrollEase,
      current: 0,
      target: 0,
      last: 0,
    };
    this.cameraFov = cameraFov;
    this.cameraZ = cameraZ;

    AutoBind(this);

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();

    this.createGeometry();
    this.createMedias();
    this.update();
    this.addEventListeners();
    this.createPreloader();
  }

  createRenderer() {
    this.renderer = new Renderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    this.gl = this.renderer.gl;
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = this.cameraFov;
    this.camera.position.z = this.cameraZ;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 1,
      widthSegments: 100,
    });
  }

  createMedias() {
    this.medias = this.items.map((image, index) => {
      return new Media({
        gl: this.gl,
        geometry: this.planeGeometry,
        scene: this.scene,
        screen: this.screen,
        viewport: this.viewport,
        image,
        length: this.items.length,
        index,
        planeWidth: this.planeWidth,
        planeHeight: this.planeHeight,
        distortion: this.distortion,
      });
    });
  }

  createPreloader() {
    this.loaded = 0;
    if (!this.items.length) return;

    this.items.forEach((src) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = src;
      image.onload = () => {
        this.loaded += 1;
        if (this.loaded === this.items.length) {
          document.documentElement.classList.remove("loading");
          document.documentElement.classList.add("loaded");
        }
      };
    });
  }

  onResize() {
    const rect = this.container.getBoundingClientRect();
    this.screen = {
      width: rect.width,
      height: rect.height,
    };

    this.renderer.setSize(this.screen.width, this.screen.height);

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height,
    });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.viewport = { height, width };

    if (this.medias) {
      this.medias.forEach((media) =>
        media.onResize({ screen: this.screen, viewport: this.viewport })
      );
    }
  }

  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientY : e.clientY;
  }

  onTouchMove(e) {
    if (!this.isDown) return;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const distance = (this.start - y) * 0.1;
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.isDown = false;
  }

  onWheel(e) {
    const speed = e.deltaY;
    this.scroll.target += speed * 0.005;
  }

  update() {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    );

    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    requestAnimationFrame(this.update);
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("wheel", this.onWheel);
    window.addEventListener("mousewheel", this.onWheel);

    window.addEventListener("mousedown", this.onTouchDown);
    window.addEventListener("mousemove", this.onTouchMove);
    window.addEventListener("mouseup", this.onTouchUp);

    window.addEventListener("touchstart", this.onTouchDown);
    window.addEventListener("touchmove", this.onTouchMove);
    window.addEventListener("touchend", this.onTouchUp);
  }

  destroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("mousewheel", this.onWheel);

    window.removeEventListener("mousedown", this.onTouchDown);
    window.removeEventListener("mousemove", this.onTouchMove);
    window.removeEventListener("mouseup", this.onTouchUp);

    window.removeEventListener("touchstart", this.onTouchDown);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchUp);
  }
}

export default function FlyingPosters({
  items = [],
  planeWidth = 320,
  planeHeight = 320,
  distortion = 3,
  scrollEase = 0.1,
  cameraFov = 45,
  cameraZ = 20,
  className,
  ...props
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    instanceRef.current = new Canvas({
      container: containerRef.current,
      canvas: canvasRef.current,
      items,
      planeWidth,
      planeHeight,
      distortion,
      scrollEase,
      cameraFov,
      cameraZ,
    });

    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, [items, planeWidth, planeHeight, distortion, scrollEase, cameraFov, cameraZ]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasEl = canvasRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      if (instanceRef.current) {
        instanceRef.current.onWheel(e);
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    canvasEl.addEventListener("wheel", handleWheel, { passive: false });
    canvasEl.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      canvasEl.removeEventListener("wheel", handleWheel);
      canvasEl.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={\`w-full h-full overflow-hidden relative z-2 \${className}\`}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
}
`,N=`import { useRef, useEffect } from "react";
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Program,
  Mesh,
  Texture,
  type OGLRenderingContext,
} from "ogl";

import "./FlyingPosters.css";

type GL = OGLRenderingContext;
type OGLProgram = Program;
type OGLMesh = Mesh;
type OGLTransform = Transform;
type OGLPlane = Plane;

interface ScreenSize {
  width: number;
  height: number;
}

interface ViewportSize {
  width: number;
  height: number;
}

interface ScrollState {
  position?: number;
  ease: number;
  current: number;
  target: number;
  last: number;
}

interface AutoBindOptions {
  include?: Array<string | RegExp>;
  exclude?: Array<string | RegExp>;
}

interface MediaParams {
  gl: GL;
  geometry: OGLPlane;
  scene: OGLTransform;
  screen: ScreenSize;
  viewport: ViewportSize;
  image: string;
  length: number;
  index: number;
  planeWidth: number;
  planeHeight: number;
  distortion: number;
}

interface CanvasParams {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  items: string[];
  planeWidth: number;
  planeHeight: number;
  distortion: number;
  scrollEase: number;
  cameraFov: number;
  cameraZ: number;
}

const vertexShader = \`
precision highp float;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float uPosition;
uniform float uTime;
uniform float uSpeed;
uniform vec3 distortionAxis;
uniform vec3 rotationAxis;
uniform float uDistortion;

varying vec2 vUv;
varying vec3 vNormal;

float PI = 3.141592653589793238;
mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(
      oc * axis.x * axis.x + c,         oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                              0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float qinticInOut(float t) {
  return t < 0.5
    ? 16.0 * pow(t, 5.0)
    : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
}

void main() {
  vUv = uv;
  
  float norm = 0.5;
  vec3 newpos = position;
  float offset = (dot(distortionAxis, position) + norm / 2.) / norm;
  float localprogress = clamp(
    (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion),
    0.,
    2.
  );
  localprogress = qinticInOut(localprogress) * PI;
  newpos = rotate(newpos, rotationAxis, localprogress);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
\`;

const fragmentShader = \`
precision highp float;

uniform vec2 uImageSize;
uniform vec2 uPlaneSize;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec2 imageSize = uImageSize;
  vec2 planeSize = uPlaneSize;

  float imageAspect = imageSize.x / imageSize.y;
  float planeAspect = planeSize.x / planeSize.y;
  vec2 scale = vec2(1.0, 1.0);

  if (planeAspect > imageAspect) {
      scale.x = imageAspect / planeAspect;
  } else {
      scale.y = planeAspect / imageAspect;
  }

  vec2 uv = vUv * scale + (1.0 - scale) * 0.5;

  gl_FragColor = texture2D(tMap, uv);
}
\`;

function AutoBind(self: any, { include, exclude }: AutoBindOptions = {}) {
  const getAllProperties = (object: any): Set<[any, string | symbol]> => {
    const properties = new Set<[any, string | symbol]>();
    do {
      for (const key of Reflect.ownKeys(object)) {
        properties.add([object, key]);
      }
    } while (
      (object = Reflect.getPrototypeOf(object)) &&
      object !== Object.prototype
    );
    return properties;
  };

  const filter = (key: string | symbol) => {
    const match = (pattern: string | RegExp) =>
      typeof pattern === "string"
        ? key === pattern
        : (pattern as RegExp).test(key.toString());

    if (include) return include.some(match);
    if (exclude) return !exclude.some(match);
    return true;
  };

  for (const [object, key] of getAllProperties(self.constructor.prototype)) {
    if (key === "constructor" || !filter(key)) continue;
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === "function") {
      self[key] = self[key].bind(self);
    }
  }
  return self;
}

function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t;
}

function map(
  num: number,
  min1: number,
  max1: number,
  min2: number,
  max2: number,
  round = false
): number {
  const num1 = (num - min1) / (max1 - min1);
  const num2 = num1 * (max2 - min2) + min2;
  return round ? Math.round(num2) : num2;
}

class Media {
  gl: GL;
  geometry: OGLPlane;
  scene: OGLTransform;
  screen: ScreenSize;
  viewport: ViewportSize;
  image: string;
  length: number;
  index: number;
  planeWidth: number;
  planeHeight: number;
  distortion: number;

  program!: OGLProgram;
  plane!: OGLMesh;
  extra = 0;
  padding = 0;
  height = 0;
  heightTotal = 0;
  y = 0;

  constructor({
    gl,
    geometry,
    scene,
    screen,
    viewport,
    image,
    length,
    index,
    planeWidth,
    planeHeight,
    distortion,
  }: MediaParams) {
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;
    this.image = image;
    this.length = length;
    this.index = index;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;

    this.createShader();
    this.createMesh();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: false });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        tMap: { value: texture },
        uPosition: { value: 0 },
        uPlaneSize: { value: [0, 0] },
        uImageSize: { value: [0, 0] },
        uSpeed: { value: 0 },
        rotationAxis: { value: [0, 1, 0] },
        distortionAxis: { value: [1, 1, 0] },
        uDistortion: { value: this.distortion },
        uViewportSize: { value: [this.viewport.width, this.viewport.height] },
        uTime: { value: 0 },
      },
      cullFace: false,
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSize.value = [
        img.naturalWidth,
        img.naturalHeight,
      ];
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }

  setScale() {
    this.plane.scale.x =
      (this.viewport.width * this.planeWidth) / this.screen.width;
    this.plane.scale.y =
      (this.viewport.height * this.planeHeight) / this.screen.height;
    this.plane.position.x = 0;
    this.program.uniforms.uPlaneSize.value = [
      this.plane.scale.x,
      this.plane.scale.y,
    ];
  }

  onResize({
    screen,
    viewport,
  }: { screen?: ScreenSize; viewport?: ViewportSize } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      this.program.uniforms.uViewportSize.value = [
        viewport.width,
        viewport.height,
      ];
    }
    this.setScale();

    this.padding = 5;
    this.height = this.plane.scale.y + this.padding;
    this.heightTotal = this.height * this.length;
    this.y = -this.heightTotal / 2 + (this.index + 0.5) * this.height;
  }

  update(scroll: ScrollState) {
    this.plane.position.y = this.y - scroll.current - this.extra;
    const position = map(
      this.plane.position.y,
      -this.viewport.height,
      this.viewport.height,
      5,
      15
    );

    this.program.uniforms.uPosition.value = position;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = scroll.current;

    const planeHeight = this.plane.scale.y;
    const viewportHeight = this.viewport.height;
    const topEdge = this.plane.position.y + planeHeight / 2;
    const bottomEdge = this.plane.position.y - planeHeight / 2;

    if (topEdge < -viewportHeight / 2) {
      this.extra -= this.heightTotal;
    } else if (bottomEdge > viewportHeight / 2) {
      this.extra += this.heightTotal;
    }
  }
}

class Canvas {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  items: string[];
  planeWidth: number;
  planeHeight: number;
  distortion: number;
  scroll: ScrollState;
  cameraFov: number;
  cameraZ: number;

  renderer!: Renderer;
  gl!: GL;
  camera!: Camera;
  scene!: OGLTransform;
  planeGeometry!: OGLPlane;
  medias!: Media[];
  screen!: ScreenSize;
  viewport!: ViewportSize;
  isDown = false;
  start = 0;
  loaded = 0;

  constructor({
    container,
    canvas,
    items,
    planeWidth,
    planeHeight,
    distortion,
    scrollEase,
    cameraFov,
    cameraZ,
  }: CanvasParams) {
    this.container = container;
    this.canvas = canvas;
    this.items = items;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;
    this.scroll = {
      ease: scrollEase,
      current: 0,
      target: 0,
      last: 0,
    };
    this.cameraFov = cameraFov;
    this.cameraZ = cameraZ;

    AutoBind(this);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias();
    this.update();
    this.addEventListeners();
    this.createPreloader();
  }

  createRenderer() {
    this.renderer = new Renderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    this.gl = this.renderer.gl;
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = this.cameraFov;
    this.camera.position.z = this.cameraZ;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 1,
      widthSegments: 100,
    });
  }

  createMedias() {
    this.medias = this.items.map(
      (image, index) =>
        new Media({
          gl: this.gl,
          geometry: this.planeGeometry,
          scene: this.scene,
          screen: this.screen,
          viewport: this.viewport,
          image,
          length: this.items.length,
          index,
          planeWidth: this.planeWidth,
          planeHeight: this.planeHeight,
          distortion: this.distortion,
        })
    );
  }

  createPreloader() {
    this.loaded = 0;
    this.items.forEach((src) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = src;
      image.onload = () => {
        if (++this.loaded === this.items.length) {
          document.documentElement.classList.remove("loading");
          document.documentElement.classList.add("loaded");
        }
      };
    });
  }

  onResize() {
    const rect = this.container.getBoundingClientRect();
    this.screen = { width: rect.width, height: rect.height };
    this.renderer.setSize(this.screen.width, this.screen.height);

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height,
    });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };

    this.medias?.forEach((media) =>
      media.onResize({ screen: this.screen, viewport: this.viewport })
    );
  }

  onTouchDown(e: MouseEvent | TouchEvent) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
  }

  onTouchMove(e: MouseEvent | TouchEvent) {
    if (!this.isDown || !this.scroll.position) return;
    const y = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
    const distance = (this.start - y) * 0.1;
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.isDown = false;
  }

  onWheel(e: WheelEvent) {
    this.scroll.target += e.deltaY * 0.005;
  }

  update() {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    );
    this.medias?.forEach((media) => media.update(this.scroll));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    requestAnimationFrame(this.update);
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("wheel", this.onWheel);
    window.addEventListener("mousedown", this.onTouchDown);
    window.addEventListener("mousemove", this.onTouchMove);
    window.addEventListener("mouseup", this.onTouchUp);
    window.addEventListener("touchstart", this.onTouchDown as EventListener);
    window.addEventListener("touchmove", this.onTouchMove as EventListener);
    window.addEventListener("touchend", this.onTouchUp as EventListener);
  }

  destroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("mousedown", this.onTouchDown);
    window.removeEventListener("mousemove", this.onTouchMove);
    window.removeEventListener("mouseup", this.onTouchUp);
    window.removeEventListener("touchstart", this.onTouchDown as EventListener);
    window.removeEventListener("touchmove", this.onTouchMove as EventListener);
    window.removeEventListener("touchend", this.onTouchUp as EventListener);
  }
}

interface FlyingPostersProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: string[];
  planeWidth?: number;
  planeHeight?: number;
  distortion?: number;
  scrollEase?: number;
  cameraFov?: number;
  cameraZ?: number;
}

export default function FlyingPosters({
  items = [],
  planeWidth = 320,
  planeHeight = 320,
  distortion = 3,
  scrollEase = 0.01,
  cameraFov = 45,
  cameraZ = 20,
  className,
  ...props
}: FlyingPostersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<Canvas | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    instanceRef.current = new Canvas({
      container: containerRef.current,
      canvas: canvasRef.current,
      items,
      planeWidth,
      planeHeight,
      distortion,
      scrollEase,
      cameraFov,
      cameraZ,
    });

    return () => {
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, [
    items,
    planeWidth,
    planeHeight,
    distortion,
    scrollEase,
    cameraFov,
    cameraZ,
  ]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasEl = canvasRef.current;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (instanceRef.current) {
        instanceRef.current.onWheel(e);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    canvasEl.addEventListener("wheel", handleWheel, { passive: false });
    canvasEl.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      canvasEl.removeEventListener("wheel", handleWheel);
      canvasEl.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={\`posters-container \${className ?? ""}\`}
      {...props}
    >
      <canvas ref={canvasRef} className="posters-canvas" />
    </div>
  );
}
`,B=`import { useRef, useEffect } from "react";
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Program,
  Mesh,
  Texture,
  type OGLRenderingContext,
} from "ogl";

type GL = OGLRenderingContext;
type OGLProgram = Program;
type OGLMesh = Mesh;
type OGLTransform = Transform;
type OGLPlane = Plane;

interface ScreenSize {
  width: number;
  height: number;
}

interface ViewportSize {
  width: number;
  height: number;
}

interface ScrollState {
  position?: number;
  ease: number;
  current: number;
  target: number;
  last: number;
}

interface AutoBindOptions {
  include?: Array<string | RegExp>;
  exclude?: Array<string | RegExp>;
}

interface MediaParams {
  gl: GL;
  geometry: OGLPlane;
  scene: OGLTransform;
  screen: ScreenSize;
  viewport: ViewportSize;
  image: string;
  length: number;
  index: number;
  planeWidth: number;
  planeHeight: number;
  distortion: number;
}

interface CanvasParams {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  items: string[];
  planeWidth: number;
  planeHeight: number;
  distortion: number;
  scrollEase: number;
  cameraFov: number;
  cameraZ: number;
}

const vertexShader = \`
precision highp float;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float uPosition;
uniform float uTime;
uniform float uSpeed;
uniform vec3 distortionAxis;
uniform vec3 rotationAxis;
uniform float uDistortion;

varying vec2 vUv;
varying vec3 vNormal;

float PI = 3.141592653589793238;
mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(
      oc * axis.x * axis.x + c,         oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                              0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float qinticInOut(float t) {
  return t < 0.5
    ? 16.0 * pow(t, 5.0)
    : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
}

void main() {
  vUv = uv;
  
  float norm = 0.5;
  vec3 newpos = position;
  float offset = (dot(distortionAxis, position) + norm / 2.) / norm;
  float localprogress = clamp(
    (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion),
    0.,
    2.
  );
  localprogress = qinticInOut(localprogress) * PI;
  newpos = rotate(newpos, rotationAxis, localprogress);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
\`;

const fragmentShader = \`
precision highp float;

uniform vec2 uImageSize;
uniform vec2 uPlaneSize;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec2 imageSize = uImageSize;
  vec2 planeSize = uPlaneSize;

  float imageAspect = imageSize.x / imageSize.y;
  float planeAspect = planeSize.x / planeSize.y;
  vec2 scale = vec2(1.0, 1.0);

  if (planeAspect > imageAspect) {
      scale.x = imageAspect / planeAspect;
  } else {
      scale.y = planeAspect / imageAspect;
  }

  vec2 uv = vUv * scale + (1.0 - scale) * 0.5;

  gl_FragColor = texture2D(tMap, uv);
}
\`;

function AutoBind(self: any, { include, exclude }: AutoBindOptions = {}) {
  const getAllProperties = (object: any): Set<[any, string | symbol]> => {
    const properties = new Set<[any, string | symbol]>();
    do {
      for (const key of Reflect.ownKeys(object)) {
        properties.add([object, key]);
      }
    } while (
      (object = Reflect.getPrototypeOf(object)) &&
      object !== Object.prototype
    );
    return properties;
  };

  const filter = (key: string | symbol) => {
    const match = (pattern: string | RegExp) =>
      typeof pattern === "string"
        ? key === pattern
        : (pattern as RegExp).test(key.toString());

    if (include) return include.some(match);
    if (exclude) return !exclude.some(match);
    return true;
  };

  for (const [object, key] of getAllProperties(self.constructor.prototype)) {
    if (key === "constructor" || !filter(key)) continue;
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === "function") {
      self[key] = self[key].bind(self);
    }
  }
  return self;
}

function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t;
}

function map(
  num: number,
  min1: number,
  max1: number,
  min2: number,
  max2: number,
  round = false
): number {
  const num1 = (num - min1) / (max1 - min1);
  const num2 = num1 * (max2 - min2) + min2;
  return round ? Math.round(num2) : num2;
}

class Media {
  gl: GL;
  geometry: OGLPlane;
  scene: OGLTransform;
  screen: ScreenSize;
  viewport: ViewportSize;
  image: string;
  length: number;
  index: number;
  planeWidth: number;
  planeHeight: number;
  distortion: number;

  program!: OGLProgram;
  plane!: OGLMesh;
  extra = 0;
  padding = 0;
  height = 0;
  heightTotal = 0;
  y = 0;

  constructor({
    gl,
    geometry,
    scene,
    screen,
    viewport,
    image,
    length,
    index,
    planeWidth,
    planeHeight,
    distortion,
  }: MediaParams) {
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;
    this.image = image;
    this.length = length;
    this.index = index;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;

    this.createShader();
    this.createMesh();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: false });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        tMap: { value: texture },
        uPosition: { value: 0 },
        uPlaneSize: { value: [0, 0] },
        uImageSize: { value: [0, 0] },
        uSpeed: { value: 0 },
        rotationAxis: { value: [0, 1, 0] },
        distortionAxis: { value: [1, 1, 0] },
        uDistortion: { value: this.distortion },
        uViewportSize: { value: [this.viewport.width, this.viewport.height] },
        uTime: { value: 0 },
      },
      cullFace: false,
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSize.value = [
        img.naturalWidth,
        img.naturalHeight,
      ];
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }

  setScale() {
    this.plane.scale.x =
      (this.viewport.width * this.planeWidth) / this.screen.width;
    this.plane.scale.y =
      (this.viewport.height * this.planeHeight) / this.screen.height;
    this.plane.position.x = 0;
    this.program.uniforms.uPlaneSize.value = [
      this.plane.scale.x,
      this.plane.scale.y,
    ];
  }

  onResize({
    screen,
    viewport,
  }: { screen?: ScreenSize; viewport?: ViewportSize } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      this.program.uniforms.uViewportSize.value = [
        viewport.width,
        viewport.height,
      ];
    }
    this.setScale();

    this.padding = 5;
    this.height = this.plane.scale.y + this.padding;
    this.heightTotal = this.height * this.length;
    this.y = -this.heightTotal / 2 + (this.index + 0.5) * this.height;
  }

  update(scroll: ScrollState) {
    this.plane.position.y = this.y - scroll.current - this.extra;
    const position = map(
      this.plane.position.y,
      -this.viewport.height,
      this.viewport.height,
      5,
      15
    );

    this.program.uniforms.uPosition.value = position;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = scroll.current;

    const planeHeight = this.plane.scale.y;
    const viewportHeight = this.viewport.height;
    const topEdge = this.plane.position.y + planeHeight / 2;
    const bottomEdge = this.plane.position.y - planeHeight / 2;

    if (topEdge < -viewportHeight / 2) {
      this.extra -= this.heightTotal;
    } else if (bottomEdge > viewportHeight / 2) {
      this.extra += this.heightTotal;
    }
  }
}

class Canvas {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  items: string[];
  planeWidth: number;
  planeHeight: number;
  distortion: number;
  scroll: ScrollState;
  cameraFov: number;
  cameraZ: number;

  renderer!: Renderer;
  gl!: GL;
  camera!: Camera;
  scene!: OGLTransform;
  planeGeometry!: OGLPlane;
  medias!: Media[];
  screen!: ScreenSize;
  viewport!: ViewportSize;
  isDown = false;
  start = 0;
  loaded = 0;

  constructor({
    container,
    canvas,
    items,
    planeWidth,
    planeHeight,
    distortion,
    scrollEase,
    cameraFov,
    cameraZ,
  }: CanvasParams) {
    this.container = container;
    this.canvas = canvas;
    this.items = items;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;
    this.scroll = {
      ease: scrollEase,
      current: 0,
      target: 0,
      last: 0,
    };
    this.cameraFov = cameraFov;
    this.cameraZ = cameraZ;

    AutoBind(this);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias();
    this.update();
    this.addEventListeners();
    this.createPreloader();
  }

  createRenderer() {
    this.renderer = new Renderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    this.gl = this.renderer.gl;
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = this.cameraFov;
    this.camera.position.z = this.cameraZ;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 1,
      widthSegments: 100,
    });
  }

  createMedias() {
    this.medias = this.items.map(
      (image, index) =>
        new Media({
          gl: this.gl,
          geometry: this.planeGeometry,
          scene: this.scene,
          screen: this.screen,
          viewport: this.viewport,
          image,
          length: this.items.length,
          index,
          planeWidth: this.planeWidth,
          planeHeight: this.planeHeight,
          distortion: this.distortion,
        })
    );
  }

  createPreloader() {
    this.loaded = 0;
    this.items.forEach((src) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = src;
      image.onload = () => {
        if (++this.loaded === this.items.length) {
          document.documentElement.classList.remove("loading");
          document.documentElement.classList.add("loaded");
        }
      };
    });
  }

  onResize() {
    const rect = this.container.getBoundingClientRect();
    this.screen = { width: rect.width, height: rect.height };
    this.renderer.setSize(this.screen.width, this.screen.height);

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height,
    });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };

    this.medias?.forEach((media) =>
      media.onResize({ screen: this.screen, viewport: this.viewport })
    );
  }

  onTouchDown(e: MouseEvent | TouchEvent) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
  }

  onTouchMove(e: MouseEvent | TouchEvent) {
    if (!this.isDown || !this.scroll.position) return;
    const y = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
    const distance = (this.start - y) * 0.1;
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.isDown = false;
  }

  onWheel(e: WheelEvent) {
    this.scroll.target += e.deltaY * 0.005;
  }

  update() {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    );
    this.medias?.forEach((media) => media.update(this.scroll));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    requestAnimationFrame(this.update);
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("wheel", this.onWheel);
    window.addEventListener("mousedown", this.onTouchDown);
    window.addEventListener("mousemove", this.onTouchMove);
    window.addEventListener("mouseup", this.onTouchUp);
    window.addEventListener("touchstart", this.onTouchDown as EventListener);
    window.addEventListener("touchmove", this.onTouchMove as EventListener);
    window.addEventListener("touchend", this.onTouchUp as EventListener);
  }

  destroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("mousedown", this.onTouchDown);
    window.removeEventListener("mousemove", this.onTouchMove);
    window.removeEventListener("mouseup", this.onTouchUp);
    window.removeEventListener("touchstart", this.onTouchDown as EventListener);
    window.removeEventListener("touchmove", this.onTouchMove as EventListener);
    window.removeEventListener("touchend", this.onTouchUp as EventListener);
  }
}

interface FlyingPostersProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: string[];
  planeWidth?: number;
  planeHeight?: number;
  distortion?: number;
  scrollEase?: number;
  cameraFov?: number;
  cameraZ?: number;
}

export default function FlyingPosters({
  items = [],
  planeWidth = 320,
  planeHeight = 320,
  distortion = 3,
  scrollEase = 0.01,
  cameraFov = 45,
  cameraZ = 20,
  className,
  ...props
}: FlyingPostersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<Canvas | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    instanceRef.current = new Canvas({
      container: containerRef.current,
      canvas: canvasRef.current,
      items,
      planeWidth,
      planeHeight,
      distortion,
      scrollEase,
      cameraFov,
      cameraZ,
    });

    return () => {
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, [
    items,
    planeWidth,
    planeHeight,
    distortion,
    scrollEase,
    cameraFov,
    cameraZ,
  ]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasEl = canvasRef.current;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (instanceRef.current) {
        instanceRef.current.onWheel(e);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    canvasEl.addEventListener("wheel", handleWheel, { passive: false });
    canvasEl.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      canvasEl.removeEventListener("wheel", handleWheel);
      canvasEl.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={\`w-full h-full overflow-hidden relative z-2 \${className}\`}
      {...props}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
`,y={...E("Components/FlyingPosters"),installation:"npm install ogl",usage:`import FlyingPosters from './FlyingPosters'

const items = [
  'https://picsum.photos/500/500?grayscale', 
  'https://picsum.photos/600/600?grayscale', 
  'https://picsum.photos/400/400?grayscale'
];

<div style={{ height: '600px', position: 'relative' }}>
  <FlyingPosters items={items}/>
</div>`,code:Z,css:V,tailwind:Y,tsCode:N,tsTailwind:B},q=`
precision highp float;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float uPosition;
uniform float uTime;
uniform float uSpeed;
uniform vec3 distortionAxis;
uniform vec3 rotationAxis;
uniform float uDistortion;

varying vec2 vUv;
varying vec3 vNormal;

float PI = 3.141592653589793238;
mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(
      oc * axis.x * axis.x + c,         oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                              0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float qinticInOut(float t) {
  return t < 0.5
    ? 16.0 * pow(t, 5.0)
    : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
}

void main() {
  vUv = uv;
  
  float norm = 0.5;
  vec3 newpos = position;
  float offset = (dot(distortionAxis, position) + norm / 2.) / norm;
  float localprogress = clamp(
    (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion),
    0.,
    2.
  );
  localprogress = qinticInOut(localprogress) * PI;
  newpos = rotate(newpos, rotationAxis, localprogress);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
`,_=`
precision highp float;

uniform vec2 uImageSize;
uniform vec2 uPlaneSize;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec2 imageSize = uImageSize;
  vec2 planeSize = uPlaneSize;

  float imageAspect = imageSize.x / imageSize.y;
  float planeAspect = planeSize.x / planeSize.y;
  vec2 scale = vec2(1.0, 1.0);

  if (planeAspect > imageAspect) {
      scale.x = imageAspect / planeAspect;
  } else {
      scale.y = planeAspect / imageAspect;
  }

  vec2 uv = vUv * scale + (1.0 - scale) * 0.5;

  gl_FragColor = texture2D(tMap, uv);
}
`;function $(c,{include:n,exclude:e}={}){const s=t=>{const i=new Set;do for(const r of Reflect.ownKeys(t))i.add([t,r]);while((t=Reflect.getPrototypeOf(t))&&t!==Object.prototype);return i},h=t=>{const i=r=>typeof r=="string"?t===r:r.test(t);return n?n.some(i):e?!e.some(i):!0};for(const[t,i]of s(c.constructor.prototype)){if(i==="constructor"||!h(i))continue;const r=Reflect.getOwnPropertyDescriptor(t,i);r&&typeof r.value=="function"&&(c[i]=c[i].bind(c))}return c}function K(c,n,e){return c+(n-c)*e}function J(c,n,e,s,h,t=!1){const r=(c-n)/(e-n)*(h-s)+s;return t?Math.round(r):r}class Q{constructor({gl:n,geometry:e,scene:s,screen:h,viewport:t,image:i,length:r,index:v,planeWidth:u,planeHeight:d,distortion:m}){this.extra=0,this.gl=n,this.geometry=e,this.scene=s,this.screen=h,this.viewport=t,this.image=i,this.length=r,this.index=v,this.planeWidth=u,this.planeHeight=d,this.distortion=m,this.createShader(),this.createMesh(),this.onResize()}createShader(){const n=new U(this.gl,{generateMipmaps:!1});this.program=new L(this.gl,{depthTest:!1,depthWrite:!1,fragment:_,vertex:q,uniforms:{tMap:{value:n},uPosition:{value:0},uPlaneSize:{value:[0,0]},uImageSize:{value:[0,0]},uSpeed:{value:0},rotationAxis:{value:[0,1,0]},distortionAxis:{value:[1,1,0]},uDistortion:{value:this.distortion},uViewportSize:{value:[this.viewport.width,this.viewport.height]},uTime:{value:0}},cullFace:!1});const e=new Image;e.crossOrigin="anonymous",e.src=this.image,e.onload=()=>{n.image=e,this.program.uniforms.uImageSize.value=[e.naturalWidth,e.naturalHeight]}}createMesh(){this.plane=new R(this.gl,{geometry:this.geometry,program:this.program}),this.plane.setParent(this.scene)}setScale(){this.plane.scale.x=this.viewport.width*this.planeWidth/this.screen.width,this.plane.scale.y=this.viewport.height*this.planeHeight/this.screen.height,this.plane.position.x=0,this.plane.program.uniforms.uPlaneSize.value=[this.plane.scale.x,this.plane.scale.y]}onResize({screen:n,viewport:e}={}){n&&(this.screen=n),e&&(this.viewport=e,this.plane.program.uniforms.uViewportSize.value=[this.viewport.width,this.viewport.height]),this.setScale(),this.padding=5,this.height=this.plane.scale.y+this.padding,this.heightTotal=this.height*this.length,this.y=-this.heightTotal/2+(this.index+.5)*this.height}update(n){this.plane.position.y=this.y-n.current-this.extra;const e=J(this.plane.position.y,-this.viewport.height,this.viewport.height,5,15);this.program.uniforms.uPosition.value=e,this.program.uniforms.uTime.value+=.04,this.program.uniforms.uSpeed.value=n.current;const s=this.plane.scale.y,h=this.viewport.height,t=this.plane.position.y+s/2,i=this.plane.position.y-s/2;t<-h/2?this.extra-=this.heightTotal:i>h/2&&(this.extra+=this.heightTotal)}}class X{constructor({container:n,canvas:e,items:s,planeWidth:h,planeHeight:t,distortion:i,scrollEase:r,cameraFov:v,cameraZ:u}){this.container=n,this.canvas=e,this.items=s,this.planeWidth=h,this.planeHeight=t,this.distortion=i,this.scroll={ease:r,current:0,target:0,last:0},this.cameraFov=v,this.cameraZ=u,$(this),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(),this.update(),this.addEventListeners(),this.createPreloader()}createRenderer(){this.renderer=new S({canvas:this.canvas,alpha:!0,antialias:!0,dpr:Math.min(window.devicePixelRatio,2)}),this.gl=this.renderer.gl}createCamera(){this.camera=new z(this.gl),this.camera.fov=this.cameraFov,this.camera.position.z=this.cameraZ}createScene(){this.scene=new T}createGeometry(){this.planeGeometry=new k(this.gl,{heightSegments:1,widthSegments:100})}createMedias(){this.medias=this.items.map((n,e)=>new Q({gl:this.gl,geometry:this.planeGeometry,scene:this.scene,screen:this.screen,viewport:this.viewport,image:n,length:this.items.length,index:e,planeWidth:this.planeWidth,planeHeight:this.planeHeight,distortion:this.distortion}))}createPreloader(){this.loaded=0,this.items.length&&this.items.forEach(n=>{const e=new Image;e.crossOrigin="anonymous",e.src=n,e.onload=()=>{this.loaded+=1,this.loaded===this.items.length&&(document.documentElement.classList.remove("loading"),document.documentElement.classList.add("loaded"))}})}onResize(){const n=this.container.getBoundingClientRect();this.screen={width:n.width,height:n.height},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.gl.canvas.width/this.gl.canvas.height});const e=this.camera.fov*Math.PI/180,s=2*Math.tan(e/2)*this.camera.position.z,h=s*this.camera.aspect;this.viewport={height:s,width:h},this.medias&&this.medias.forEach(t=>t.onResize({screen:this.screen,viewport:this.viewport}))}onTouchDown(n){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=n.touches?n.touches[0].clientY:n.clientY}onTouchMove(n){if(!this.isDown)return;const e=n.touches?n.touches[0].clientY:n.clientY,s=(this.start-e)*.1;this.scroll.target=this.scroll.position+s}onTouchUp(){this.isDown=!1}onWheel(n){const e=n.deltaY;this.scroll.target+=e*.005}update(){this.scroll.current=K(this.scroll.current,this.scroll.target,this.scroll.ease),this.medias&&this.medias.forEach(n=>n.update(this.scroll)),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,requestAnimationFrame(this.update)}addEventListeners(){window.addEventListener("resize",this.onResize),window.addEventListener("wheel",this.onWheel),window.addEventListener("mousewheel",this.onWheel),window.addEventListener("mousedown",this.onTouchDown),window.addEventListener("mousemove",this.onTouchMove),window.addEventListener("mouseup",this.onTouchUp),window.addEventListener("touchstart",this.onTouchDown),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchUp)}destroy(){window.removeEventListener("resize",this.onResize),window.removeEventListener("wheel",this.onWheel),window.removeEventListener("mousewheel",this.onWheel),window.removeEventListener("mousedown",this.onTouchDown),window.removeEventListener("mousemove",this.onTouchMove),window.removeEventListener("mouseup",this.onTouchUp),window.removeEventListener("touchstart",this.onTouchDown),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchUp)}}function nn({items:c=[],planeWidth:n=320,planeHeight:e=320,distortion:s=3,scrollEase:h=.01,cameraFov:t=45,cameraZ:i=20,className:r,...v}){const u=l.useRef(null),d=l.useRef(null),m=l.useRef(null);return l.useEffect(()=>{if(u.current)return m.current=new X({container:u.current,canvas:d.current,items:c,planeWidth:n,planeHeight:e,distortion:s,scrollEase:h,cameraFov:t,cameraZ:i}),()=>{m.current&&(m.current.destroy(),m.current=null)}},[c,n,e,s,h,t,i]),l.useEffect(()=>{if(!d.current)return;const g=d.current,x=f=>{f.preventDefault(),m.current&&m.current.onWheel(f)},p=f=>{f.preventDefault()};return g.addEventListener("wheel",x,{passive:!1}),g.addEventListener("touchmove",p,{passive:!1}),()=>{g.removeEventListener("wheel",x),g.removeEventListener("touchmove",p)}},[]),a.jsx("div",{ref:u,className:`posters-container ${r}`,...v,children:a.jsx("canvas",{ref:d,className:"posters-canvas"})})}const ln=()=>{const[c]=l.useState(["https://picsum.photos/500/500?grayscale","https://picsum.photos/600/600?grayscale","https://picsum.photos/400/400?grayscale"]),[n,e]=l.useState(320),[s,h]=l.useState(320),[t,i]=l.useState(3),[r,v]=l.useState(.01),[u,d]=l.useState(45),[m,g]=l.useState(20),[x,p]=I(),f=[{name:"items",type:"string[]",default:"[]",description:"An array of image URLs to be displayed as flying posters."},{name:"planeWidth",type:"number",default:"320",description:"The width of each poster plane in pixels."},{name:"planeHeight",type:"number",default:"320",description:"The height of each poster plane in pixels."},{name:"distortion",type:"number",default:"3",description:"The amount of distortion applied to the posters' movement."},{name:"scrollEase",type:"number",default:"0.01",description:"The easing factor for smooth scrolling interactions."},{name:"cameraFov",type:"number",default:"45",description:"The field of view for the camera in degrees."},{name:"cameraZ",type:"number",default:"20",description:"The Z position of the camera, affecting zoom and perspective."}];return a.jsxs(P,{children:[a.jsxs(W,{children:[a.jsxs(b,{position:"relative",className:"demo-container",h:600,p:0,overflow:"hidden",children:[a.jsx(j,{onClick:p}),a.jsx(nn,{items:c,planeWidth:n,planeHeight:s,distortion:t,scrollEase:r,cameraFov:u,cameraZ:m},x),a.jsx(M,{color:"#271E37",zIndex:0,fontSize:"clamp(2rem, 6vw, 6rem)",fontWeight:900,position:"absolute",children:"Scroll."})]}),a.jsxs(O,{children:[a.jsx(w,{title:"Plane Width",min:300,max:400,step:10,value:n,onChange:o=>{e(o),p()},displayValue:o=>`${o}px`}),a.jsx(w,{title:"Plane Height",min:200,max:350,step:10,value:s,onChange:o=>{h(o),p()},displayValue:o=>`${o}px`}),a.jsx(w,{title:"Distortion",min:0,max:10,step:.1,value:t,onChange:o=>{i(o),p()},displayValue:o=>o.toFixed(1)}),a.jsx(w,{title:"Scroll Ease",min:.001,max:.05,step:.001,value:r,onChange:o=>{v(o),p()},displayValue:o=>o.toFixed(3)}),a.jsx(w,{title:"Camera FOV",min:20,max:90,step:1,value:u,onChange:o=>{d(o),p()},displayValue:o=>`${o}°`}),a.jsx(w,{title:"Camera Z",min:5,max:50,step:1,value:m,onChange:o=>{g(o),p()}})]}),a.jsx(H,{data:f}),a.jsx(G,{dependencyList:["ogl"]})]}),a.jsx(A,{children:a.jsx(D,{codeObject:y})}),a.jsx(C,{children:a.jsx(F,{...y})})]})};export{ln as default};
