var E=Object.defineProperty;var D=(o,e,t)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var v=(o,e,t)=>D(o,typeof e!="symbol"?e+"":e,t);import{g as L,r as p,j as a,a as r,B as b,F as x,T as I,b as M}from"./index-j7DW7U0N.js";import{T as w,P as V,a as C,C as z,b as R,c as O,d as A}from"./PropTable-Baf4PZpP.js";import{D as S}from"./Dependencies-BSh7s3YA.js";import{u as B}from"./useForceRerender-LUtjsLCb.js";import{B as q}from"./button-group-BHXYEz30.js";const _=`import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './ImageTrail.css';

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0, clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}
function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = { el: null, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
    this.getRect();
    this.initEvents();
  }
  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }
  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class ImageTrailVariant1 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...this.DOM.el.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());

      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1,
        scale: 1,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4,
        ease: 'power1',
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4,
        ease: 'power3',
        opacity: 0,
        scale: 0.2
      }, 0.4);
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant2 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());

      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power1', scale: 1,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 2.8, filter: 'brightness(250%)'
      }, {
        duration: 0.4, ease: 'power1',
        scale: 1, filter: 'brightness(100%)'
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'power2',
        opacity: 0, scale: 0.2
      }, 0.45);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant3 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0, zIndex: this.zIndexVal,
        xPercent: 0, yPercent: 0,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power1',
        scale: 1,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 1.2
      }, {
        duration: 0.4, ease: 'power1', scale: 1
      }, 0)
      .to(img.DOM.el, {
        duration: .6, ease: 'power2',
        opacity: 0, scale: 0.2,
        xPercent: () => gsap.utils.random(-30, 30),
        yPercent: -200
      }, 0.6);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant4 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) { dx /= distance; dy /= distance; }
    dx *= distance / 100;
    dy *= distance / 100;

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power1', scale: 1,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 2,
        filter: \`brightness(\${Math.max(400 * distance / 100, 100)}%) contrast(\${Math.max(400 * distance / 100, 100)}%)\`
      }, {
        duration: 0.4, ease: 'power1', scale: 1,
        filter: 'brightness(100%) contrast(100%)'
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'power3', opacity: 0
      }, 0.4)
      .to(img.DOM.el, {
        duration: 1.5, ease: 'power4',
        x: \`+=\${dx * 110}\`,
        y: \`+=\${dy * 110}\`
      }, 0.05);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant5 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.lastAngle = 0;

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    if (angle > 90 && angle <= 270) angle += 180;
    const isMovingClockwise = angle >= this.lastAngle;
    this.lastAngle = angle;
    let startAngle = isMovingClockwise ? angle - 10 : angle + 10;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) { dx /= distance; dy /= distance; }
    dx *= distance / 150; dy *= distance / 150;

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, filter: 'brightness(80%)',
        scale: 0.1, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2,
        rotation: startAngle
      }, {
        duration: 1, ease: 'power2',
        scale: 1, filter: 'brightness(100%)',
        x: this.mousePos.x - img.rect.width / 2 + (dx * 70),
        y: this.mousePos.y - img.rect.height / 2 + (dy * 70),
        rotation: this.lastAngle
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'expo', opacity: 0
      }, 0.5)
      .to(img.DOM.el, {
        duration: 1.5, ease: 'power4',
        x: \`+=\${dx * 120}\`, y: \`+=\${dy * 120}\`
      }, 0.05);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant6 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  mapSpeedToSize(speed, minSize, maxSize) {
    const maxSpeed = 200;
    return minSize + (maxSize - minSize) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToBrightness(speed, minB, maxB) {
    const maxSpeed = 70;
    return minB + (maxB - minB) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToBlur(speed, minBlur, maxBlur) {
    const maxSpeed = 90;
    return minBlur + (maxBlur - minBlur) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToGrayscale(speed, minG, maxG) {
    const maxSpeed = 90;
    return minG + (maxG - minG) * Math.min(speed / maxSpeed, 1);
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let speed = Math.sqrt(dx * dx + dy * dy);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    let scaleFactor = this.mapSpeedToSize(speed, 0.3, 2);
    let brightnessValue = this.mapSpeedToBrightness(speed, 0, 1.3);
    let blurValue = this.mapSpeedToBlur(speed, 20, 0);
    let grayscaleValue = this.mapSpeedToGrayscale(speed, 600, 0);

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.8,
        ease: 'power3',
        scale: scaleFactor,
        filter: \`grayscale(\${grayscaleValue * 100}%) brightness(\${brightnessValue * 100}%) blur(\${blurValue}px)\`,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 2
      }, {
        duration: 0.8, ease: 'power3', scale: 1
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'power3.in',
        opacity: 0, scale: 0.2
      }, 0.45);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

function getNewPosition(position, offset, arr) {
  const realOffset = Math.abs(offset) % arr.length;
  if (position - realOffset >= 0) {
    return position - realOffset;
  } else {
    return arr.length - (realOffset - position);
  }
}
class ImageTrailVariant7 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.visibleImagesCount = 0;
    this.visibleImagesTotal = 9;
    this.visibleImagesTotal = Math.min(this.visibleImagesTotal, this.imagesTotal - 1);

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;

    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    ++this.visibleImagesCount;

    gsap.killTweensOf(img.DOM.el);
    const scaleValue = gsap.utils.random(0.5, 1.6);

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        scale: scaleValue - Math.max(gsap.utils.random(0.2, 0.6), 0),
        rotationZ: 0, opacity: 1,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power3',
        scale: scaleValue,
        rotationZ: gsap.utils.random(-3, 3),
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0);

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastInQueue = getNewPosition(this.imgPosition, this.visibleImagesTotal, this.images);
      const oldImg = this.images[lastInQueue];
      gsap.to(oldImg.DOM.el, {
        duration: 0.4,
        ease: 'power4',
        opacity: 0, scale: 1.3,
        onComplete: () => {
          if (this.activeImagesCount === 0) {
            this.isIdle = true;
          }
        }
      });
    }
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; }
}

class ImageTrailVariant8 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.rotation = { x: 0, y: 0 };
    this.cachedRotation = { x: 0, y: 0 };
    this.zValue = 0;
    this.cachedZValue = 0;

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const relX = this.mousePos.x - centerX;
    const relY = this.mousePos.y - centerY;

    this.rotation.x = -(relY / centerY) * 30;
    this.rotation.y = (relX / centerX) * 30;
    this.cachedRotation = { ...this.rotation };

    const distanceFromCenter = Math.sqrt(relX * relX + relY * relY);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const proportion = distanceFromCenter / maxDistance;
    this.zValue = proportion * 1200 - 600;
    this.cachedZValue = this.zValue;
    const normalizedZ = (this.zValue + 600) / 1200;
    const brightness = 0.2 + (normalizedZ * 2.3);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .set(this.DOM.el, { perspective: 1000 }, 0)
      .fromTo(img.DOM.el, {
        opacity: 1,
        z: 0,
        scale: 1 + (this.cachedZValue / 1000),
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2,
        rotationX: this.cachedRotation.x,
        rotationY: this.cachedRotation.y,
        filter: \`brightness(\${brightness})\`
      }, {
        duration: 1,
        ease: 'expo',
        scale: 1 + (this.zValue / 1000),
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2,
        rotationX: this.rotation.x,
        rotationY: this.rotation.y
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4,
        ease: 'power2',
        opacity: 0,
        z: -800
      }, 0.3);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

const variantMap = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  7: ImageTrailVariant7,
  8: ImageTrailVariant8
};

export default function ImageTrail({ items = [], variant = 1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Cls = variantMap[variant] || variantMap[1];
    new Cls(containerRef.current);
  }, [variant, items]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div
            className="content__img-inner"
            style={{ backgroundImage: \`url(\${url})\` }}
          />
        </div>
      ))}
    </div>
  );
}
`,N=`.content {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  border-radius: 8px;
  background: transparent;
  overflow: visible;
}

.content__img {
  width: 190px;
  aspect-ratio: 1.1;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  will-change: transform, filter;
}

.content__img-inner {
  background-position: 50% 50%;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background-size: cover;
  position: absolute;
  top: calc(-1 * 20px / 2);
  left: calc(-1 * 20px / 2);
}`,F=`import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0, clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}
function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = { el: null, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
    this.getRect();
    this.initEvents();
  }
  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }
  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class ImageTrailVariant1 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...this.DOM.el.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());

      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1,
        scale: 1,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4,
        ease: 'power1',
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4,
        ease: 'power3',
        opacity: 0,
        scale: 0.2
      }, 0.4);
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant2 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());

      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power1', scale: 1,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 2.8, filter: 'brightness(250%)'
      }, {
        duration: 0.4, ease: 'power1',
        scale: 1, filter: 'brightness(100%)'
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'power2',
        opacity: 0, scale: 0.2
      }, 0.45);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant3 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0, zIndex: this.zIndexVal,
        xPercent: 0, yPercent: 0,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power1',
        scale: 1,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 1.2
      }, {
        duration: 0.4, ease: 'power1', scale: 1
      }, 0)
      .to(img.DOM.el, {
        duration: .6, ease: 'power2',
        opacity: 0, scale: 0.2,
        xPercent: () => gsap.utils.random(-30, 30),
        yPercent: -200
      }, 0.6);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant4 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) { dx /= distance; dy /= distance; }
    dx *= distance / 100;
    dy *= distance / 100;

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power1', scale: 1,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 2,
        filter: \`brightness(\${Math.max(400 * distance / 100, 100)}%) contrast(\${Math.max(400 * distance / 100, 100)}%)\`
      }, {
        duration: 0.4, ease: 'power1', scale: 1,
        filter: 'brightness(100%) contrast(100%)'
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'power3', opacity: 0
      }, 0.4)
      .to(img.DOM.el, {
        duration: 1.5, ease: 'power4',
        x: \`+=\${dx * 110}\`,
        y: \`+=\${dy * 110}\`
      }, 0.05);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant5 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.lastAngle = 0;

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    if (angle > 90 && angle <= 270) angle += 180;
    const isMovingClockwise = angle >= this.lastAngle;
    this.lastAngle = angle;
    let startAngle = isMovingClockwise ? angle - 10 : angle + 10;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) { dx /= distance; dy /= distance; }
    dx *= distance / 150; dy *= distance / 150;

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, filter: 'brightness(80%)',
        scale: 0.1, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2,
        rotation: startAngle
      }, {
        duration: 1, ease: 'power2',
        scale: 1, filter: 'brightness(100%)',
        x: this.mousePos.x - img.rect.width / 2 + (dx * 70),
        y: this.mousePos.y - img.rect.height / 2 + (dy * 70),
        rotation: this.lastAngle
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'expo', opacity: 0
      }, 0.5)
      .to(img.DOM.el, {
        duration: 1.5, ease: 'power4',
        x: \`+=\${dx * 120}\`, y: \`+=\${dy * 120}\`
      }, 0.05);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant6 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  mapSpeedToSize(speed, minSize, maxSize) {
    const maxSpeed = 200;
    return minSize + (maxSize - minSize) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToBrightness(speed, minB, maxB) {
    const maxSpeed = 70;
    return minB + (maxB - minB) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToBlur(speed, minBlur, maxBlur) {
    const maxSpeed = 90;
    return minBlur + (maxBlur - minBlur) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToGrayscale(speed, minG, maxG) {
    const maxSpeed = 90;
    return minG + (maxG - minG) * Math.min(speed / maxSpeed, 1);
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let speed = Math.sqrt(dx * dx + dy * dy);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    let scaleFactor = this.mapSpeedToSize(speed, 0.3, 2);
    let brightnessValue = this.mapSpeedToBrightness(speed, 0, 1.3);
    let blurValue = this.mapSpeedToBlur(speed, 20, 0);
    let grayscaleValue = this.mapSpeedToGrayscale(speed, 600, 0);

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.8,
        ease: 'power3',
        scale: scaleFactor,
        filter: \`grayscale(\${grayscaleValue * 100}%) brightness(\${brightnessValue * 100}%) blur(\${blurValue}px)\`,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 2
      }, {
        duration: 0.8, ease: 'power3', scale: 1
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'power3.in',
        opacity: 0, scale: 0.2
      }, 0.45);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

function getNewPosition(position, offset, arr) {
  const realOffset = Math.abs(offset) % arr.length;
  if (position - realOffset >= 0) {
    return position - realOffset;
  } else {
    return arr.length - (realOffset - position);
  }
}
class ImageTrailVariant7 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.visibleImagesCount = 0;
    this.visibleImagesTotal = 9;
    this.visibleImagesTotal = Math.min(this.visibleImagesTotal, this.imagesTotal - 1);

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;

    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    ++this.visibleImagesCount;

    gsap.killTweensOf(img.DOM.el);
    const scaleValue = gsap.utils.random(0.5, 1.6);

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        scale: scaleValue - Math.max(gsap.utils.random(0.2, 0.6), 0),
        rotationZ: 0, opacity: 1,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power3',
        scale: scaleValue,
        rotationZ: gsap.utils.random(-3, 3),
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0);

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastInQueue = getNewPosition(this.imgPosition, this.visibleImagesTotal, this.images);
      const oldImg = this.images[lastInQueue];
      gsap.to(oldImg.DOM.el, {
        duration: 0.4,
        ease: 'power4',
        opacity: 0, scale: 1.3,
        onComplete: () => {
          if (this.activeImagesCount === 0) {
            this.isIdle = true;
          }
        }
      });
    }
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; }
}

class ImageTrailVariant8 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.rotation = { x: 0, y: 0 };
    this.cachedRotation = { x: 0, y: 0 };
    this.zValue = 0;
    this.cachedZValue = 0;

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const relX = this.mousePos.x - centerX;
    const relY = this.mousePos.y - centerY;

    this.rotation.x = -(relY / centerY) * 30;
    this.rotation.y = (relX / centerX) * 30;
    this.cachedRotation = { ...this.rotation };

    const distanceFromCenter = Math.sqrt(relX * relX + relY * relY);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const proportion = distanceFromCenter / maxDistance;
    this.zValue = proportion * 1200 - 600;
    this.cachedZValue = this.zValue;
    const normalizedZ = (this.zValue + 600) / 1200;
    const brightness = 0.2 + (normalizedZ * 2.3);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .set(this.DOM.el, { perspective: 1000 }, 0)
      .fromTo(img.DOM.el, {
        opacity: 1,
        z: 0,
        scale: 1 + (this.cachedZValue / 1000),
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2,
        rotationX: this.cachedRotation.x,
        rotationY: this.cachedRotation.y,
        filter: \`brightness(\${brightness})\`
      }, {
        duration: 1,
        ease: 'expo',
        scale: 1 + (this.zValue / 1000),
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2,
        rotationX: this.rotation.x,
        rotationY: this.rotation.y
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4,
        ease: 'power2',
        opacity: 0,
        z: -800
      }, 0.3);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

const variantMap = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  7: ImageTrailVariant7,
  8: ImageTrailVariant8
};

export default function ImageTrail({ items = [], variant = 1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Cls = variantMap[variant] || variantMap[1];
    new Cls(containerRef.current);
  }, [variant, items]);

  return (
    <div className="w-full h-full relative z-[100] rounded-lg bg-transparent overflow-visible" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img w-[190px] aspect-[1.1] rounded-[15px] absolute top-0 left-0 opacity-0 overflow-hidden [will-change:transform,filter]" key={i}>
          <div
            className="content__img-inner bg-center bg-cover w-[calc(100%+20px)] h-[calc(100%+20px)] absolute top-[-10px] left-[-10px]"
            style={{ backgroundImage: \`url(\${url})\` }}
          />
        </div>
      ))}
    </div>
  );
}
`,X=`import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ImageTrail.css";

function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(
  e: MouseEvent | TouchEvent,
  rect: DOMRect
): { x: number; y: number } {
  let clientX = 0,
    clientY = 0;
  if ("touches" in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ("clientX" in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function getMouseDistance(
  p1: { x: number; y: number },
  p2: { x: number; y: number }
): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  public DOM: { el: HTMLDivElement; inner: HTMLDivElement | null } = {
    el: null as unknown as HTMLDivElement,
    inner: null,
  };
  public defaultStyle: gsap.TweenVars = { scale: 1, x: 0, y: 0, opacity: 0 };
  public rect: DOMRect | null = null;
  private resize!: () => void;

  constructor(DOM_el: HTMLDivElement) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector(".content__img-inner");
    this.getRect();
    this.initEvents();
  }

  private initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener("resize", this.resize);
  }

  private getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class ImageTrailVariant1 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3",
          opacity: 0,
          scale: 0.2,
        },
        0.4
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant2 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        { scale: 2.8, filter: "brightness(250%)" },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          filter: "brightness(100%)",
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power2",
          opacity: 0,
          scale: 0.2,
        },
        0.45
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant3 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          xPercent: 0,
          yPercent: 0,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        { scale: 1.2 },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.6,
          ease: "power2",
          opacity: 0,
          scale: 0.2,
          xPercent: () => gsap.utils.random(-30, 30),
          yPercent: -200,
        },
        0.6
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant4 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) {
      dx /= distance;
      dy /= distance;
    }
    dx *= distance / 100;
    dy *= distance / 100;

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        {
          scale: 2,
          filter: \`brightness(\${Math.max((400 * distance) / 100, 100)}%) contrast(\${Math.max(
            (400 * distance) / 100,
            100
          )}%)\`,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          filter: "brightness(100%) contrast(100%)",
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3",
          opacity: 0,
        },
        0.4
      )
      .to(
        img.DOM.el,
        {
          duration: 1.5,
          ease: "power4",
          x: \`+=\${dx * 110}\`,
          y: \`+=\${dy * 110}\`,
        },
        0.05
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant5 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };
  private lastAngle: number;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.lastAngle = 0;

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    if (angle > 90 && angle <= 270) angle += 180;
    const isMovingClockwise = angle >= this.lastAngle;
    this.lastAngle = angle;
    let startAngle = isMovingClockwise ? angle - 10 : angle + 10;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) {
      dx /= distance;
      dy /= distance;
    }
    dx *= distance / 150;
    dy *= distance / 150;

    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          filter: "brightness(80%)",
          scale: 0.1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
          rotation: startAngle,
        },
        {
          duration: 1,
          ease: "power2",
          scale: 1,
          filter: "brightness(100%)",
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2 + dx * 70,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2 + dy * 70,
          rotation: this.lastAngle,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "expo",
          opacity: 0,
        },
        0.5
      )
      .to(
        img.DOM.el,
        {
          duration: 1.5,
          ease: "power4",
          x: \`+=\${dx * 120}\`,
          y: \`+=\${dy * 120}\`,
        },
        0.05
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant6 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private mapSpeedToSize(speed: number, minSize: number, maxSize: number) {
    const maxSpeed = 200;
    return minSize + (maxSize - minSize) * Math.min(speed / maxSpeed, 1);
  }

  private mapSpeedToBrightness(speed: number, minB: number, maxB: number) {
    const maxSpeed = 70;
    return minB + (maxB - minB) * Math.min(speed / maxSpeed, 1);
  }

  private mapSpeedToBlur(speed: number, minBlur: number, maxBlur: number) {
    const maxSpeed = 90;
    return minBlur + (maxBlur - minBlur) * Math.min(speed / maxSpeed, 1);
  }

  private mapSpeedToGrayscale(speed: number, minG: number, maxG: number) {
    const maxSpeed = 90;
    return minG + (maxG - minG) * Math.min(speed / maxSpeed, 1);
  }

  private showNextImage() {
    const dx = this.mousePos.x - this.cacheMousePos.x;
    const dy = this.mousePos.y - this.cacheMousePos.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    const scaleFactor = this.mapSpeedToSize(speed, 0.3, 2);
    const brightnessValue = this.mapSpeedToBrightness(speed, 0, 1.3);
    const blurValue = this.mapSpeedToBlur(speed, 20, 0);
    const grayscaleValue = this.mapSpeedToGrayscale(speed, 600, 0);

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.8,
          ease: "power3",
          scale: scaleFactor,
          filter: \`grayscale(\${grayscaleValue * 100}%) brightness(\${
            brightnessValue * 100
          }%) blur(\${blurValue}px)\`,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        { scale: 2 },
        {
          duration: 0.8,
          ease: "power3",
          scale: 1,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3.in",
          opacity: 0,
          scale: 0.2,
        },
        0.45
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

function getNewPosition(position: number, offset: number, arr: ImageItem[]) {
  const realOffset = Math.abs(offset) % arr.length;
  if (position - realOffset >= 0) {
    return position - realOffset;
  } else {
    return arr.length - (realOffset - position);
  }
}

class ImageTrailVariant7 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };
  private visibleImagesCount: number;
  private visibleImagesTotal: number;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.visibleImagesCount = 0;
    this.visibleImagesTotal = 9;
    this.visibleImagesTotal = Math.min(
      this.visibleImagesTotal,
      this.imagesTotal - 1
    );

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;

    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    ++this.visibleImagesCount;

    gsap.killTweensOf(img.DOM.el);
    const scaleValue = gsap.utils.random(0.5, 1.6);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          scale: scaleValue - Math.max(gsap.utils.random(0.2, 0.6), 0),
          rotationZ: 0,
          opacity: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power3",
          scale: scaleValue,
          rotationZ: gsap.utils.random(-3, 3),
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      );

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastInQueue = getNewPosition(
        this.imgPosition,
        this.visibleImagesTotal,
        this.images
      );
      const oldImg = this.images[lastInQueue];
      gsap.to(oldImg.DOM.el, {
        duration: 0.4,
        ease: "power4",
        opacity: 0,
        scale: 1.3,
        onComplete: () => {
          if (this.activeImagesCount === 0) {
            this.isIdle = true;
          }
        },
      });
    }
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
  }
}

class ImageTrailVariant8 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };
  private rotation: { x: number; y: number };
  private cachedRotation: { x: number; y: number };
  private zValue: number;
  private cachedZValue: number;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.rotation = { x: 0, y: 0 };
    this.cachedRotation = { x: 0, y: 0 };
    this.zValue = 0;
    this.cachedZValue = 0;

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const relX = this.mousePos.x - centerX;
    const relY = this.mousePos.y - centerY;

    this.rotation.x = -(relY / centerY) * 30;
    this.rotation.y = (relX / centerX) * 30;
    this.cachedRotation = { ...this.rotation };

    const distanceFromCenter = Math.sqrt(relX * relX + relY * relY);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const proportion = distanceFromCenter / maxDistance;
    this.zValue = proportion * 1200 - 600;
    this.cachedZValue = this.zValue;
    const normalizedZ = (this.zValue + 600) / 1200;
    const brightness = 0.2 + normalizedZ * 2.3;

    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .set(this.DOM.el, { perspective: 1000 }, 0)
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          z: 0,
          scale: 1 + this.cachedZValue / 1000,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
          rotationX: this.cachedRotation.x,
          rotationY: this.cachedRotation.y,
          filter: \`brightness(\${brightness})\`,
        },
        {
          duration: 1,
          ease: "expo",
          scale: 1 + this.zValue / 1000,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
          rotationX: this.rotation.x,
          rotationY: this.rotation.y,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power2",
          opacity: 0,
          z: -800,
        },
        0.3
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

type ImageTrailConstructor =
  | typeof ImageTrailVariant1
  | typeof ImageTrailVariant2
  | typeof ImageTrailVariant3
  | typeof ImageTrailVariant4
  | typeof ImageTrailVariant5
  | typeof ImageTrailVariant6
  | typeof ImageTrailVariant7
  | typeof ImageTrailVariant8;

const variantMap: Record<number, ImageTrailConstructor> = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  7: ImageTrailVariant7,
  8: ImageTrailVariant8,
};

interface ImageTrailProps {
  items?: string[];
  variant?: number;
}

export default function ImageTrail({
  items = [],
  variant = 1,
}: ImageTrailProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const Cls = variantMap[variant] || variantMap[1];
    new Cls(containerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, items]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div
            className="content__img-inner"
            style={{ backgroundImage: \`url(\${url})\` }}
          />
        </div>
      ))}
    </div>
  );
}
`,H=`import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(
  e: MouseEvent | TouchEvent,
  rect: DOMRect
): { x: number; y: number } {
  let clientX = 0,
    clientY = 0;
  if ("touches" in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ("clientX" in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function getMouseDistance(
  p1: { x: number; y: number },
  p2: { x: number; y: number }
): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  public DOM: { el: HTMLDivElement; inner: HTMLDivElement | null } = {
    el: null as unknown as HTMLDivElement,
    inner: null,
  };
  public defaultStyle: gsap.TweenVars = { scale: 1, x: 0, y: 0, opacity: 0 };
  public rect: DOMRect | null = null;
  private resize!: () => void;

  constructor(DOM_el: HTMLDivElement) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector(".content__img-inner");
    this.getRect();
    this.initEvents();
  }

  private initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener("resize", this.resize);
  }

  private getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class ImageTrailVariant1 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3",
          opacity: 0,
          scale: 0.2,
        },
        0.4
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant2 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        { scale: 2.8, filter: "brightness(250%)" },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          filter: "brightness(100%)",
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power2",
          opacity: 0,
          scale: 0.2,
        },
        0.45
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant3 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          xPercent: 0,
          yPercent: 0,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        { scale: 1.2 },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.6,
          ease: "power2",
          opacity: 0,
          scale: 0.2,
          xPercent: () => gsap.utils.random(-30, 30),
          yPercent: -200,
        },
        0.6
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant4 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) {
      dx /= distance;
      dy /= distance;
    }
    dx *= distance / 100;
    dy *= distance / 100;

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        {
          scale: 2,
          filter: \`brightness(\${Math.max((400 * distance) / 100, 100)}%) contrast(\${Math.max(
            (400 * distance) / 100,
            100
          )}%)\`,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          filter: "brightness(100%) contrast(100%)",
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3",
          opacity: 0,
        },
        0.4
      )
      .to(
        img.DOM.el,
        {
          duration: 1.5,
          ease: "power4",
          x: \`+=\${dx * 110}\`,
          y: \`+=\${dy * 110}\`,
        },
        0.05
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant5 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };
  private lastAngle: number;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.lastAngle = 0;

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    if (angle > 90 && angle <= 270) angle += 180;
    const isMovingClockwise = angle >= this.lastAngle;
    this.lastAngle = angle;
    let startAngle = isMovingClockwise ? angle - 10 : angle + 10;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) {
      dx /= distance;
      dy /= distance;
    }
    dx *= distance / 150;
    dy *= distance / 150;

    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          filter: "brightness(80%)",
          scale: 0.1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
          rotation: startAngle,
        },
        {
          duration: 1,
          ease: "power2",
          scale: 1,
          filter: "brightness(100%)",
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2 + dx * 70,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2 + dy * 70,
          rotation: this.lastAngle,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "expo",
          opacity: 0,
        },
        0.5
      )
      .to(
        img.DOM.el,
        {
          duration: 1.5,
          ease: "power4",
          x: \`+=\${dx * 120}\`,
          y: \`+=\${dy * 120}\`,
        },
        0.05
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant6 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private mapSpeedToSize(speed: number, minSize: number, maxSize: number) {
    const maxSpeed = 200;
    return minSize + (maxSize - minSize) * Math.min(speed / maxSpeed, 1);
  }

  private mapSpeedToBrightness(speed: number, minB: number, maxB: number) {
    const maxSpeed = 70;
    return minB + (maxB - minB) * Math.min(speed / maxSpeed, 1);
  }

  private mapSpeedToBlur(speed: number, minBlur: number, maxBlur: number) {
    const maxSpeed = 90;
    return minBlur + (maxBlur - minBlur) * Math.min(speed / maxSpeed, 1);
  }

  private mapSpeedToGrayscale(speed: number, minG: number, maxG: number) {
    const maxSpeed = 90;
    return minG + (maxG - minG) * Math.min(speed / maxSpeed, 1);
  }

  private showNextImage() {
    const dx = this.mousePos.x - this.cacheMousePos.x;
    const dy = this.mousePos.y - this.cacheMousePos.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    const scaleFactor = this.mapSpeedToSize(speed, 0.3, 2);
    const brightnessValue = this.mapSpeedToBrightness(speed, 0, 1.3);
    const blurValue = this.mapSpeedToBlur(speed, 20, 0);
    const grayscaleValue = this.mapSpeedToGrayscale(speed, 600, 0);

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.8,
          ease: "power3",
          scale: scaleFactor,
          filter: \`grayscale(\${grayscaleValue * 100}%) brightness(\${
            brightnessValue * 100
          }%) blur(\${blurValue}px)\`,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        { scale: 2 },
        {
          duration: 0.8,
          ease: "power3",
          scale: 1,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3.in",
          opacity: 0,
          scale: 0.2,
        },
        0.45
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

function getNewPosition(position: number, offset: number, arr: ImageItem[]) {
  const realOffset = Math.abs(offset) % arr.length;
  if (position - realOffset >= 0) {
    return position - realOffset;
  } else {
    return arr.length - (realOffset - position);
  }
}

class ImageTrailVariant7 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };
  private visibleImagesCount: number;
  private visibleImagesTotal: number;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.visibleImagesCount = 0;
    this.visibleImagesTotal = 9;
    this.visibleImagesTotal = Math.min(
      this.visibleImagesTotal,
      this.imagesTotal - 1
    );

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;

    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    ++this.visibleImagesCount;

    gsap.killTweensOf(img.DOM.el);
    const scaleValue = gsap.utils.random(0.5, 1.6);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          scale: scaleValue - Math.max(gsap.utils.random(0.2, 0.6), 0),
          rotationZ: 0,
          opacity: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power3",
          scale: scaleValue,
          rotationZ: gsap.utils.random(-3, 3),
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0
      );

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastInQueue = getNewPosition(
        this.imgPosition,
        this.visibleImagesTotal,
        this.images
      );
      const oldImg = this.images[lastInQueue];
      gsap.to(oldImg.DOM.el, {
        duration: 0.4,
        ease: "power4",
        opacity: 0,
        scale: 1.3,
        onComplete: () => {
          if (this.activeImagesCount === 0) {
            this.isIdle = true;
          }
        },
      });
    }
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
  }
}

class ImageTrailVariant8 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };
  private rotation: { x: number; y: number };
  private cachedRotation: { x: number; y: number };
  private zValue: number;
  private cachedZValue: number;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.rotation = { x: 0, y: 0 };
    this.cachedRotation = { x: 0, y: 0 };
    this.zValue = 0;
    this.cachedZValue = 0;

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove);

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };
    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const relX = this.mousePos.x - centerX;
    const relY = this.mousePos.y - centerY;

    this.rotation.x = -(relY / centerY) * 30;
    this.rotation.y = (relX / centerX) * 30;
    this.cachedRotation = { ...this.rotation };

    const distanceFromCenter = Math.sqrt(relX * relX + relY * relY);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const proportion = distanceFromCenter / maxDistance;
    this.zValue = proportion * 1200 - 600;
    this.cachedZValue = this.zValue;
    const normalizedZ = (this.zValue + 600) / 1200;
    const brightness = 0.2 + normalizedZ * 2.3;

    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .set(this.DOM.el, { perspective: 1000 }, 0)
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          z: 0,
          scale: 1 + this.cachedZValue / 1000,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
          rotationX: this.cachedRotation.x,
          rotationY: this.cachedRotation.y,
          filter: \`brightness(\${brightness})\`,
        },
        {
          duration: 1,
          ease: "expo",
          scale: 1 + this.zValue / 1000,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
          rotationX: this.rotation.x,
          rotationY: this.rotation.y,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power2",
          opacity: 0,
          z: -800,
        },
        0.3
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

type ImageTrailConstructor =
  | typeof ImageTrailVariant1
  | typeof ImageTrailVariant2
  | typeof ImageTrailVariant3
  | typeof ImageTrailVariant4
  | typeof ImageTrailVariant5
  | typeof ImageTrailVariant6
  | typeof ImageTrailVariant7
  | typeof ImageTrailVariant8;

const variantMap: Record<number, ImageTrailConstructor> = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  7: ImageTrailVariant7,
  8: ImageTrailVariant8,
};

interface ImageTrailProps {
  items?: string[];
  variant?: number;
}

export default function ImageTrail({
  items = [],
  variant = 1,
}: ImageTrailProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const Cls = variantMap[variant] || variantMap[1];
    new Cls(containerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, items]);

  return (
    <div
      className="w-full h-full relative z-[100] rounded-lg bg-transparent overflow-visible"
      ref={containerRef}
    >
      {items.map((url, i) => (
        <div
          className="content__img w-[190px] aspect-[1.1] rounded-[15px] absolute top-0 left-0 opacity-0 overflow-hidden [will-change:transform,filter]"
          key={i}
        >
          <div
            className="content__img-inner bg-center bg-cover w-[calc(100%+20px)] h-[calc(100%+20px)] absolute top-[-10px] left-[-10px]"
            style={{ backgroundImage: \`url(\${url})\` }}
          />
        </div>
      ))}
    </div>
  );
}
`,y={...L("Animations/ImageTrail"),installation:"npm install gsap",usage:`import ImageTrail from './ImageTrail;'

<div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <ImageTrail
    key={key}
    items={[
      'https://picsum.photos/id/287/300/300',
      'https://picsum.photos/id/1001/300/300',
      'https://picsum.photos/id/1025/300/300',
      'https://picsum.photos/id/1026/300/300',
      'https://picsum.photos/id/1027/300/300',
      'https://picsum.photos/id/1028/300/300',
      'https://picsum.photos/id/1029/300/300',
      'https://picsum.photos/id/1030/300/300',
      // ...
    ]}
    variant={1}
  />
</div>`,code:_,css:N,tailwind:F,tsCode:X,tsTailwind:H};function h(o,e,t){return(1-t)*o+t*e}function c(o,e){let t=0,n=0;return o.touches&&o.touches.length>0?(t=o.touches[0].clientX,n=o.touches[0].clientY):(t=o.clientX,n=o.clientY),{x:t-e.left,y:n-e.top}}function u(o,e){const t=o.x-e.x,n=o.y-e.y;return Math.hypot(t,n)}class d{constructor(e){v(this,"DOM",{el:null,inner:null});v(this,"defaultStyle",{scale:1,x:0,y:0,opacity:0});v(this,"rect",null);this.DOM.el=e,this.DOM.inner=this.DOM.el.querySelector(".content__img-inner"),this.getRect(),this.initEvents()}initEvents(){this.resize=()=>{r.set(this.DOM.el,this.defaultStyle),this.getRect()},window.addEventListener("resize",this.resize)}getRect(){this.rect=this.DOM.el.getBoundingClientRect()}}class Y{constructor(e){this.container=e,this.DOM={el:e},this.images=[...this.DOM.el.querySelectorAll(".content__img")].map(s=>new d(s)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const t=s=>{const i=this.container.getBoundingClientRect();this.mousePos=c(s,i)};e.addEventListener("mousemove",t),e.addEventListener("touchmove",t);const n=s=>{const i=this.container.getBoundingClientRect();this.mousePos=c(s,i),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){let e=u(this.mousePos,this.lastMousePos);this.cacheMousePos.x=h(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=h(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];r.killTweensOf(e.DOM.el),r.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-e.rect.width/2,y:this.cacheMousePos.y-e.rect.height/2},{duration:.4,ease:"power1",x:this.mousePos.x-e.rect.width/2,y:this.mousePos.y-e.rect.height/2},0).to(e.DOM.el,{duration:.4,ease:"power3",opacity:0,scale:.2},.4)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class k{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(s=>new d(s)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const t=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i)};e.addEventListener("mousemove",t),e.addEventListener("touchmove",t);const n=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){let e=u(this.mousePos,this.lastMousePos);this.cacheMousePos.x=h(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=h(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];r.killTweensOf(e.DOM.el),r.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-e.rect.width/2,y:this.cacheMousePos.y-e.rect.height/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-e.rect.width/2,y:this.mousePos.y-e.rect.height/2},0).fromTo(e.DOM.inner,{scale:2.8,filter:"brightness(250%)"},{duration:.4,ease:"power1",scale:1,filter:"brightness(100%)"},0).to(e.DOM.el,{duration:.4,ease:"power2",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class ${constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(s=>new d(s)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const t=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i)};e.addEventListener("mousemove",t),e.addEventListener("touchmove",t);const n=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){let e=u(this.mousePos,this.lastMousePos);this.cacheMousePos.x=h(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=h(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];r.killTweensOf(e.DOM.el),r.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,xPercent:0,yPercent:0,x:this.cacheMousePos.x-e.rect.width/2,y:this.cacheMousePos.y-e.rect.height/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-e.rect.width/2,y:this.mousePos.y-e.rect.height/2},0).fromTo(e.DOM.inner,{scale:1.2},{duration:.4,ease:"power1",scale:1},0).to(e.DOM.el,{duration:.6,ease:"power2",opacity:0,scale:.2,xPercent:()=>r.utils.random(-30,30),yPercent:-200},.6)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class Z{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(s=>new d(s)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const t=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i)};e.addEventListener("mousemove",t),e.addEventListener("touchmove",t);const n=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){u(this.mousePos,this.lastMousePos)>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.cacheMousePos.x=h(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=h(this.cacheMousePos.y,this.mousePos.y,.1),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];r.killTweensOf(e.DOM.el);let t=this.mousePos.x-this.cacheMousePos.x,n=this.mousePos.y-this.cacheMousePos.y,s=Math.sqrt(t*t+n*n);s!==0&&(t/=s,n/=s),t*=s/100,n*=s/100,r.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-e.rect.width/2,y:this.cacheMousePos.y-e.rect.height/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-e.rect.width/2,y:this.mousePos.y-e.rect.height/2},0).fromTo(e.DOM.inner,{scale:2,filter:`brightness(${Math.max(400*s/100,100)}%) contrast(${Math.max(400*s/100,100)}%)`},{duration:.4,ease:"power1",scale:1,filter:"brightness(100%) contrast(100%)"},0).to(e.DOM.el,{duration:.4,ease:"power3",opacity:0},.4).to(e.DOM.el,{duration:1.5,ease:"power4",x:`+=${t*110}`,y:`+=${n*110}`},.05)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class G{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(s=>new d(s)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.lastAngle=0;const t=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i)};e.addEventListener("mousemove",t),e.addEventListener("touchmove",t);const n=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){u(this.mousePos,this.lastMousePos)>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.cacheMousePos.x=h(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=h(this.cacheMousePos.y,this.mousePos.y,.1),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){let e=this.mousePos.x-this.cacheMousePos.x,t=this.mousePos.y-this.cacheMousePos.y,n=Math.atan2(t,e)*(180/Math.PI);n<0&&(n+=360),n>90&&n<=270&&(n+=180);const s=n>=this.lastAngle;this.lastAngle=n;let i=s?n-10:n+10,m=Math.sqrt(e*e+t*t);m!==0&&(e/=m,t/=m),e*=m/150,t*=m/150,++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const l=this.images[this.imgPosition];r.killTweensOf(l.DOM.el),r.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(l.DOM.el,{opacity:1,filter:"brightness(80%)",scale:.1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-l.rect.width/2,y:this.cacheMousePos.y-l.rect.height/2,rotation:i},{duration:1,ease:"power2",scale:1,filter:"brightness(100%)",x:this.mousePos.x-l.rect.width/2+e*70,y:this.mousePos.y-l.rect.height/2+t*70,rotation:this.lastAngle},0).to(l.DOM.el,{duration:.4,ease:"expo",opacity:0},.5).to(l.DOM.el,{duration:1.5,ease:"power4",x:`+=${e*120}`,y:`+=${t*120}`},.05)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class j{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(s=>new d(s)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const t=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i)};e.addEventListener("mousemove",t),e.addEventListener("touchmove",t);const n=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){let e=u(this.mousePos,this.lastMousePos);this.cacheMousePos.x=h(this.cacheMousePos.x,this.mousePos.x,.3),this.cacheMousePos.y=h(this.cacheMousePos.y,this.mousePos.y,.3),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}mapSpeedToSize(e,t,n){return t+(n-t)*Math.min(e/200,1)}mapSpeedToBrightness(e,t,n){return t+(n-t)*Math.min(e/70,1)}mapSpeedToBlur(e,t,n){return t+(n-t)*Math.min(e/90,1)}mapSpeedToGrayscale(e,t,n){return t+(n-t)*Math.min(e/90,1)}showNextImage(){let e=this.mousePos.x-this.cacheMousePos.x,t=this.mousePos.y-this.cacheMousePos.y,n=Math.sqrt(e*e+t*t);++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const s=this.images[this.imgPosition];let i=this.mapSpeedToSize(n,.3,2),m=this.mapSpeedToBrightness(n,0,1.3),l=this.mapSpeedToBlur(n,20,0),P=this.mapSpeedToGrayscale(n,600,0);r.killTweensOf(s.DOM.el),r.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(s.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-s.rect.width/2,y:this.cacheMousePos.y-s.rect.height/2},{duration:.8,ease:"power3",scale:i,filter:`grayscale(${P*100}%) brightness(${m*100}%) blur(${l}px)`,x:this.mousePos.x-s.rect.width/2,y:this.mousePos.y-s.rect.height/2},0).fromTo(s.DOM.inner,{scale:2},{duration:.8,ease:"power3",scale:1},0).to(s.DOM.el,{duration:.4,ease:"power3.in",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}function Q(o,e,t){const n=Math.abs(e)%t.length;return o-n>=0?o-n:t.length-(n-o)}class W{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(s=>new d(s)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.visibleImagesCount=0,this.visibleImagesTotal=9,this.visibleImagesTotal=Math.min(this.visibleImagesTotal,this.imagesTotal-1);const t=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i)};e.addEventListener("mousemove",t),e.addEventListener("touchmove",t);const n=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){let e=u(this.mousePos,this.lastMousePos);this.cacheMousePos.x=h(this.cacheMousePos.x,this.mousePos.x,.3),this.cacheMousePos.y=h(this.cacheMousePos.y,this.mousePos.y,.3),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];++this.visibleImagesCount,r.killTweensOf(e.DOM.el);const t=r.utils.random(.5,1.6);if(r.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{scale:t-Math.max(r.utils.random(.2,.6),0),rotationZ:0,opacity:1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-e.rect.width/2,y:this.cacheMousePos.y-e.rect.height/2},{duration:.4,ease:"power3",scale:t,rotationZ:r.utils.random(-3,3),x:this.mousePos.x-e.rect.width/2,y:this.mousePos.y-e.rect.height/2},0),this.visibleImagesCount>=this.visibleImagesTotal){const n=Q(this.imgPosition,this.visibleImagesTotal,this.images),s=this.images[n];r.to(s.DOM.el,{duration:.4,ease:"power4",opacity:0,scale:1.3,onComplete:()=>{this.activeImagesCount===0&&(this.isIdle=!0)}})}}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--}}class J{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(s=>new d(s)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.rotation={x:0,y:0},this.cachedRotation={x:0,y:0},this.zValue=0,this.cachedZValue=0;const t=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i)};e.addEventListener("mousemove",t),e.addEventListener("touchmove",t);const n=s=>{const i=e.getBoundingClientRect();this.mousePos=c(s,i),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){let e=u(this.mousePos,this.lastMousePos);this.cacheMousePos.x=h(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=h(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){const e=this.container.getBoundingClientRect(),t=e.width/2,n=e.height/2,s=this.mousePos.x-t,i=this.mousePos.y-n;this.rotation.x=-(i/n)*30,this.rotation.y=s/t*30,this.cachedRotation={...this.rotation};const m=Math.sqrt(s*s+i*i),l=Math.sqrt(t*t+n*n),P=m/l;this.zValue=P*1200-600,this.cachedZValue=this.zValue;const T=.2+(this.zValue+600)/1200*2.3;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const g=this.images[this.imgPosition];r.killTweensOf(g.DOM.el),r.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).set(this.DOM.el,{perspective:1e3},0).fromTo(g.DOM.el,{opacity:1,z:0,scale:1+this.cachedZValue/1e3,zIndex:this.zIndexVal,x:this.cacheMousePos.x-g.rect.width/2,y:this.cacheMousePos.y-g.rect.height/2,rotationX:this.cachedRotation.x,rotationY:this.cachedRotation.y,filter:`brightness(${T})`},{duration:1,ease:"expo",scale:1+this.zValue/1e3,x:this.mousePos.x-g.rect.width/2,y:this.mousePos.y-g.rect.height/2,rotationX:this.rotation.x,rotationY:this.rotation.y},0).to(g.DOM.el,{duration:.4,ease:"power2",opacity:0,z:-800},.3)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}const f={1:Y,2:k,3:$,4:Z,5:G,6:j,7:W,8:J};function U({items:o=[],variant:e=1}){const t=p.useRef(null);return p.useEffect(()=>{if(!t.current)return;const n=f[e]||f[1];new n(t.current)},[e,o]),a.jsx("div",{className:"content",ref:t,children:o.map((n,s)=>a.jsx("div",{className:"content__img",children:a.jsx("div",{className:"content__img-inner",style:{backgroundImage:`url(${n})`}})},s))})}const ae=()=>{const[o,e]=p.useState("1"),[t,n]=B(),s=[{name:"items",type:"string[]",default:"[]",description:"An array of image URLs which will be animated in the trail."},{name:"variant",type:"number",default:"1",description:"A number from 1 to 8 - all different animation styles."}];return a.jsxs(w,{children:[a.jsxs(V,{children:[a.jsxs(b,{position:"relative",className:"demo-container",h:500,overflow:"hidden",children:[a.jsx(U,{items:["https://picsum.photos/id/287/300/300","https://picsum.photos/id/1001/300/300","https://picsum.photos/id/1025/300/300","https://picsum.photos/id/1026/300/300","https://picsum.photos/id/1027/300/300","https://picsum.photos/id/1028/300/300","https://picsum.photos/id/1029/300/300","https://picsum.photos/id/1030/300/300"],variant:o},t),a.jsxs(x,{position:"absolute",justifyContent:"center",flexDirection:"column",alignItems:"center",children:[a.jsx(I,{fontSize:"clamp(2rem, 6vw, 6rem)",fontWeight:900,color:"#271E37",mb:0,children:"Hover Me."}),a.jsxs(I,{fontSize:"18px",fontWeight:900,color:"#a6a6a6",mt:0,children:["Variant ",o]})]})]}),a.jsxs("div",{className:"preview-options",children:[a.jsx("h2",{className:"demo-title-extra",children:"Customize"}),a.jsx(x,{gap:6,direction:"column",children:a.jsxs(q,{isAttached:!0,size:"sm",children:[a.jsx(M,{fontSize:"xs",disabled:!0,border:"1px solid #271E37",h:8,_disabled:{bg:"#271E37",border:"1px solid #271E37",color:"#fff",cursor:"not-allowed",_hover:{bg:"#222"}},children:"Variant"}),[1,2,3,4,5,6,7,8].map(i=>{const m=o===String(i);return a.jsx(M,{bg:m?"#5227FF":"#0D0716",border:"1px solid #271E37",_hover:{backgroundColor:m?"#5227FF":"#0D0716"},color:"#fff",fontSize:"xs",h:8,onClick:()=>{e(String(i)),n()},children:i},i)})]})})]}),a.jsx(C,{data:s}),a.jsx(S,{dependencyList:["gsap"]})]}),a.jsx(z,{children:a.jsx(R,{codeObject:y})}),a.jsx(O,{children:a.jsx(A,{...y})})]})};export{ae as default};
