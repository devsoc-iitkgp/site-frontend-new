import{r as s,j as e,p as W,g as G,B as K,F as D,u as Q,t as P}from"./index-j7DW7U0N.js";import{T as X,P as Y,a as Z,C as _,b as ee,c as te,d as re}from"./PropTable-Baf4PZpP.js";import{D as ne}from"./Dependencies-BSh7s3YA.js";import{R as ae}from"./RefreshButton-BMj2HM2t.js";import{u as se}from"./useForceRerender-LUtjsLCb.js";import{P as k}from"./PreviewSlider-D0sSZbsU.js";import{P as q}from"./PreviewSwitch-_xo3rdWG.js";import{P as F}from"./PreviewSelect-BhKIbQB2.js";import{C as ie}from"./Customize-Dq9g9yhm.js";import"./field-BmHOm1Rn.js";const B={wrapper:{display:"inline-block",whiteSpace:"pre-wrap"},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",border:0}};function N({text:a,speed:C=50,maxIterations:u=10,sequential:w=!1,revealDirection:v="start",useOriginalCharsOnly:I=!1,characters:h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",className:j="",parentClassName:f="",encryptedClassName:M="",animateOn:c="hover",...H}){const[T,i]=s.useState(a),[b,y]=s.useState(!1),[E,n]=s.useState(!1),[U,A]=s.useState(new Set),[L,$]=s.useState(!1),z=s.useRef(null);s.useEffect(()=>{let d,x=0;const g=t=>{const p=a.length;switch(v){case"start":return t.size;case"end":return p-1-t.size;case"center":{const o=Math.floor(p/2),l=Math.floor(t.size/2),S=t.size%2===0?o+l:o-l-1;if(S>=0&&S<p&&!t.has(S))return S;for(let r=0;r<p;r++)if(!t.has(r))return r;return 0}default:return t.size}},m=I?Array.from(new Set(a.split(""))).filter(t=>t!==" "):h.split(""),O=(t,p)=>{if(I){const o=t.split("").map((r,R)=>({char:r,isSpace:r===" ",index:R,isRevealed:p.has(R)})),l=o.filter(r=>!r.isSpace&&!r.isRevealed).map(r=>r.char);for(let r=l.length-1;r>0;r--){const R=Math.floor(Math.random()*(r+1));[l[r],l[R]]=[l[R],l[r]]}let S=0;return o.map(r=>r.isSpace?" ":r.isRevealed?t[r.index]:l[S++]).join("")}else return t.split("").map((o,l)=>o===" "?" ":p.has(l)?t[l]:m[Math.floor(Math.random()*m.length)]).join("")};return b?(n(!0),d=setInterval(()=>{A(t=>{if(w)if(t.size<a.length){const p=g(t),o=new Set(t);return o.add(p),i(O(a,o)),o}else return clearInterval(d),n(!1),t;else return i(O(a,t)),x++,x>=u&&(clearInterval(d),n(!1),i(a)),t})},C)):(i(a),A(new Set),n(!1)),()=>{d&&clearInterval(d)}},[b,a,C,u,w,v,h,I]),s.useEffect(()=>{if(c!=="view")return;const d=O=>{O.forEach(t=>{t.isIntersecting&&!L&&(y(!0),$(!0))})},x={root:null,rootMargin:"0px",threshold:.1},g=new IntersectionObserver(d,x),m=z.current;return m&&g.observe(m),()=>{m&&g.unobserve(m)}},[c,L]);const V=c==="hover"?{onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)}:{};return e.jsxs(W.span,{className:f,ref:z,style:B.wrapper,...V,...H,children:[e.jsx("span",{style:B.srOnly,children:T}),e.jsx("span",{"aria-hidden":"true",children:T.split("").map((d,x)=>{const g=U.has(x)||!E||!b;return e.jsx("span",{className:g?j:M,children:d},x)})})]})}const le=`import { useEffect, useState, useRef } from 'react'
import { motion } from 'motion/react'

const styles = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap',
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0,
  },
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let interval
    let currentIteration = 0

    const getNextIndex = (revealedSet) => {
      const textLength = text.length
      switch (revealDirection) {
        case 'start':
          return revealedSet.size
        case 'end':
          return textLength - 1 - revealedSet.size
        case 'center': {
          const middle = Math.floor(textLength / 2)
          const offset = Math.floor(revealedSet.size / 2)
          const nextIndex =
            revealedSet.size % 2 === 0
              ? middle + offset
              : middle - offset - 1

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex
          }

          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i
          }
          return 0
        }
        default:
          return revealedSet.size
      }
    }

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
      : characters.split('')

    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i),
        }))

        const nonSpaceChars = positions
          .filter((p) => !p.isSpace && !p.isRevealed)
          .map((p) => p.char)

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
            ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
        }

        let charIndex = 0
        return positions
          .map((p) => {
            if (p.isSpace) return ' '
            if (p.isRevealed) return originalText[p.index]
            return nonSpaceChars[charIndex++]
          })
          .join('')
      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (currentRevealed.has(i)) return originalText[i]
            return availableChars[Math.floor(Math.random() * availableChars.length)]
          })
          .join('')
      }
    }

    if (isHovering) {
      setIsScrambling(true)
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed)
              const newRevealed = new Set(prevRevealed)
              newRevealed.add(nextIndex)
              setDisplayText(shuffleText(text, newRevealed))
              return newRevealed
            } else {
              clearInterval(interval)
              setIsScrambling(false)
              return prevRevealed
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed))
            currentIteration++
            if (currentIteration >= maxIterations) {
              clearInterval(interval)
              setIsScrambling(false)
              setDisplayText(text)
            }
            return prevRevealed
          }
        })
      }, speed)
    } else {
      setDisplayText(text)
      setRevealedIndices(new Set())
      setIsScrambling(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
  ])

  useEffect(() => {
    if (animateOn !== 'view') return

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true)
          setHasAnimated(true)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [animateOn, hasAnimated])

  const hoverProps =
    animateOn === 'hover'
      ? {
        onMouseEnter: () => setIsHovering(true),
        onMouseLeave: () => setIsHovering(false),
      }
      : {}

  return (
    <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps} {...props}>
      <span style={styles.srOnly}>{displayText}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || !isHovering

          return (
            <span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
            >
              {char}
            </span>
          )
        })}
      </span>
    </motion.span>
  )
}
`,oe=`import { useEffect, useState, useRef } from 'react'
import { motion } from 'motion/react'

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrambling, setIsScrambling] = useState(false)
  const [revealedIndices, setRevealedIndices] = useState(new Set())
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    let interval
    let currentIteration = 0

    const getNextIndex = (revealedSet) => {
      const textLength = text.length
      switch (revealDirection) {
        case 'start':
          return revealedSet.size
        case 'end':
          return textLength - 1 - revealedSet.size
        case 'center': {
          const middle = Math.floor(textLength / 2)
          const offset = Math.floor(revealedSet.size / 2)
          const nextIndex =
            revealedSet.size % 2 === 0
              ? middle + offset
              : middle - offset - 1

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex
          }
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i
          }
          return 0
        }
        default:
          return revealedSet.size
      }
    }

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
      : characters.split('')

    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i),
        }))

        const nonSpaceChars = positions
          .filter((p) => !p.isSpace && !p.isRevealed)
          .map((p) => p.char)

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
            ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
        }

        let charIndex = 0
        return positions
          .map((p) => {
            if (p.isSpace) return ' '
            if (p.isRevealed) return originalText[p.index]
            return nonSpaceChars[charIndex++]
          })
          .join('')
      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (currentRevealed.has(i)) return originalText[i]
            return availableChars[Math.floor(Math.random() * availableChars.length)]
          })
          .join('')
      }
    }

    if (isHovering) {
      setIsScrambling(true)
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed)
              const newRevealed = new Set(prevRevealed)
              newRevealed.add(nextIndex)
              setDisplayText(shuffleText(text, newRevealed))
              return newRevealed
            } else {
              clearInterval(interval)
              setIsScrambling(false)
              return prevRevealed
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed))
            currentIteration++
            if (currentIteration >= maxIterations) {
              clearInterval(interval)
              setIsScrambling(false)
              setDisplayText(text)
            }
            return prevRevealed
          }
        })
      }, speed)
    } else {
      setDisplayText(text)
      setRevealedIndices(new Set())
      setIsScrambling(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
  ])

  useEffect(() => {
    if (animateOn !== 'view') return

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true)
          setHasAnimated(true)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [animateOn, hasAnimated])

  const hoverProps =
    animateOn === 'hover'
      ? {
        onMouseEnter: () => setIsHovering(true),
        onMouseLeave: () => setIsHovering(false),
      }
      : {}

  return (
    <motion.span
      ref={containerRef}
      className={\`inline-block whitespace-pre-wrap \${parentClassName}\`}
      {...hoverProps}
      {...props}
    >
      <span className="sr-only">{displayText}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || !isHovering

          return (
            <span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
            >
              {char}
            </span>
          )
        })}
      </span>
    </motion.span>
  )
}
`,ce=`import { useEffect, useState, useRef, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'motion/react'

const styles = {
    wrapper: {
        display: 'inline-block',
        whiteSpace: 'pre-wrap',
    },
    srOnly: {
        position: 'absolute' as 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0,0,0,0)',
        border: 0,
    },
}

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string
    speed?: number
    maxIterations?: number
    sequential?: boolean
    revealDirection?: 'start' | 'end' | 'center'
    useOriginalCharsOnly?: boolean
    characters?: string
    className?: string
    parentClassName?: string
    encryptedClassName?: string
    animateOn?: 'view' | 'hover'
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'hover',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text)
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [isScrambling, setIsScrambling] = useState<boolean>(false)
    const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set())
    const [hasAnimated, setHasAnimated] = useState<boolean>(false)
    const containerRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let currentIteration = 0

        const getNextIndex = (revealedSet: Set<number>): number => {
            const textLength = text.length
            switch (revealDirection) {
                case 'start':
                    return revealedSet.size
                case 'end':
                    return textLength - 1 - revealedSet.size
                case 'center': {
                    const middle = Math.floor(textLength / 2)
                    const offset = Math.floor(revealedSet.size / 2)
                    const nextIndex =
                        revealedSet.size % 2 === 0
                            ? middle + offset
                            : middle - offset - 1

                    if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                        return nextIndex
                    }

                    for (let i = 0; i < textLength; i++) {
                        if (!revealedSet.has(i)) return i
                    }
                    return 0
                }
                default:
                    return revealedSet.size
            }
        }

        const availableChars = useOriginalCharsOnly
            ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
            : characters.split('')

        const shuffleText = (originalText: string, currentRevealed: Set<number>): string => {
            if (useOriginalCharsOnly) {
                const positions = originalText.split('').map((char, i) => ({
                    char,
                    isSpace: char === ' ',
                    index: i,
                    isRevealed: currentRevealed.has(i),
                }))

                const nonSpaceChars = positions
                    .filter((p) => !p.isSpace && !p.isRevealed)
                    .map((p) => p.char)

                for (let i = nonSpaceChars.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1))
                    ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
                }

                let charIndex = 0
                return positions
                    .map((p) => {
                        if (p.isSpace) return ' '
                        if (p.isRevealed) return originalText[p.index]
                        return nonSpaceChars[charIndex++]
                    })
                    .join('')
            } else {
                return originalText
                    .split('')
                    .map((char, i) => {
                        if (char === ' ') return ' '
                        if (currentRevealed.has(i)) return originalText[i]
                        return availableChars[Math.floor(Math.random() * availableChars.length)]
                    })
                    .join('')
            }
        }

        if (isHovering) {
            setIsScrambling(true)
            interval = setInterval(() => {
                setRevealedIndices((prevRevealed) => {
                    if (sequential) {
                        if (prevRevealed.size < text.length) {
                            const nextIndex = getNextIndex(prevRevealed)
                            const newRevealed = new Set(prevRevealed)
                            newRevealed.add(nextIndex)
                            setDisplayText(shuffleText(text, newRevealed))
                            return newRevealed
                        } else {
                            clearInterval(interval)
                            setIsScrambling(false)
                            return prevRevealed
                        }
                    } else {
                        setDisplayText(shuffleText(text, prevRevealed))
                        currentIteration++
                        if (currentIteration >= maxIterations) {
                            clearInterval(interval)
                            setIsScrambling(false)
                            setDisplayText(text)
                        }
                        return prevRevealed
                    }
                })
            }, speed)
        } else {
            setDisplayText(text)
            setRevealedIndices(new Set())
            setIsScrambling(false)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [
        isHovering,
        text,
        speed,
        maxIterations,
        sequential,
        revealDirection,
        characters,
        useOriginalCharsOnly,
    ])

    useEffect(() => {
        if (animateOn !== 'view') return

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsHovering(true)
                    setHasAnimated(true)
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        const currentRef = containerRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [animateOn, hasAnimated])

    const hoverProps =
        animateOn === 'hover'
            ? {
                onMouseEnter: () => setIsHovering(true),
                onMouseLeave: () => setIsHovering(false),
            }
            : {}

    return (
        <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps} {...props}>
            <span style={styles.srOnly}>{displayText}</span>

            <span aria-hidden="true">
                {displayText.split('').map((char, index) => {
                    const isRevealedOrDone =
                        revealedIndices.has(index) || !isScrambling || !isHovering

                    return (
                        <span
                            key={index}
                            className={isRevealedOrDone ? className : encryptedClassName}
                        >
                            {char}
                        </span>
                    )
                })}
            </span>
        </motion.span>
    )
}
`,de=`import { useEffect, useState, useRef } from 'react'
import { motion, HTMLMotionProps } from 'motion/react'

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string
    speed?: number
    maxIterations?: number
    sequential?: boolean
    revealDirection?: 'start' | 'end' | 'center'
    useOriginalCharsOnly?: boolean
    characters?: string
    className?: string
    encryptedClassName?: string
    parentClassName?: string
    animateOn?: 'view' | 'hover'
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'hover',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text)
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [isScrambling, setIsScrambling] = useState<boolean>(false)
    const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set())
    const [hasAnimated, setHasAnimated] = useState<boolean>(false)
    const containerRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        let interval: NodeJS.Timeout
        let currentIteration = 0

        const getNextIndex = (revealedSet: Set<number>): number => {
            const textLength = text.length
            switch (revealDirection) {
                case 'start':
                    return revealedSet.size
                case 'end':
                    return textLength - 1 - revealedSet.size
                case 'center': {
                    const middle = Math.floor(textLength / 2)
                    const offset = Math.floor(revealedSet.size / 2)
                    const nextIndex =
                        revealedSet.size % 2 === 0
                            ? middle + offset
                            : middle - offset - 1

                    if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                        return nextIndex
                    }
                    for (let i = 0; i < textLength; i++) {
                        if (!revealedSet.has(i)) return i
                    }
                    return 0
                }
                default:
                    return revealedSet.size
            }
        }

        const availableChars = useOriginalCharsOnly
            ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
            : characters.split('')

        const shuffleText = (originalText: string, currentRevealed: Set<number>): string => {
            if (useOriginalCharsOnly) {
                const positions = originalText.split('').map((char, i) => ({
                    char,
                    isSpace: char === ' ',
                    index: i,
                    isRevealed: currentRevealed.has(i),
                }))

                const nonSpaceChars = positions
                    .filter((p) => !p.isSpace && !p.isRevealed)
                    .map((p) => p.char)

                for (let i = nonSpaceChars.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1))
                        ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
                }

                let charIndex = 0
                return positions
                    .map((p) => {
                        if (p.isSpace) return ' '
                        if (p.isRevealed) return originalText[p.index]
                        return nonSpaceChars[charIndex++]
                    })
                    .join('')
            } else {
                return originalText
                    .split('')
                    .map((char, i) => {
                        if (char === ' ') return ' '
                        if (currentRevealed.has(i)) return originalText[i]
                        return availableChars[Math.floor(Math.random() * availableChars.length)]
                    })
                    .join('')
            }
        }

        if (isHovering) {
            setIsScrambling(true)
            interval = setInterval(() => {
                setRevealedIndices((prevRevealed) => {
                    if (sequential) {
                        if (prevRevealed.size < text.length) {
                            const nextIndex = getNextIndex(prevRevealed)
                            const newRevealed = new Set(prevRevealed)
                            newRevealed.add(nextIndex)
                            setDisplayText(shuffleText(text, newRevealed))
                            return newRevealed
                        } else {
                            clearInterval(interval)
                            setIsScrambling(false)
                            return prevRevealed
                        }
                    } else {
                        setDisplayText(shuffleText(text, prevRevealed))
                        currentIteration++
                        if (currentIteration >= maxIterations) {
                            clearInterval(interval)
                            setIsScrambling(false)
                            setDisplayText(text)
                        }
                        return prevRevealed
                    }
                })
            }, speed)
        } else {
            setDisplayText(text)
            setRevealedIndices(new Set())
            setIsScrambling(false)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [
        isHovering,
        text,
        speed,
        maxIterations,
        sequential,
        revealDirection,
        characters,
        useOriginalCharsOnly,
    ])

    useEffect(() => {
        if (animateOn !== 'view') return

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsHovering(true)
                    setHasAnimated(true)
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        const currentRef = containerRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [animateOn, hasAnimated])

    const hoverProps =
        animateOn === 'hover'
            ? {
                onMouseEnter: () => setIsHovering(true),
                onMouseLeave: () => setIsHovering(false),
            }
            : {}

    return (
        <motion.span
            ref={containerRef}
            className={\`inline-block whitespace-pre-wrap \${parentClassName}\`}
            {...hoverProps}
            {...props}
        >
            <span className="sr-only">{displayText}</span>

            <span aria-hidden="true">
                {displayText.split('').map((char, index) => {
                    const isRevealedOrDone =
                        revealedIndices.has(index) || !isScrambling || !isHovering

                    return (
                        <span
                            key={index}
                            className={isRevealedOrDone ? className : encryptedClassName}
                        >
                            {char}
                        </span>
                    )
                })}
            </span>
        </motion.span>
    )
}
`,J={...G("TextAnimations/DecryptedText"),installation:"npm install motion",usage:`import DecryptedText from './DecryptedText';

{/* Example 1: Defaults (hover to decrypt) */}
<DecryptedText text="Hover me!" />

{/* Example 2: Customized speed and characters */}
<DecryptedText
text="Customize me"
speed={100}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>

{/* Example 3: Animate on view (runs once) */}
<div style={{ marginTop: '4rem' }}>
<DecryptedText
  text="This text animates when in view"
  animateOn="view"
  revealDirection="center"
/>
</div>`,code:le,tailwind:oe,tsCode:ce,tsTailwind:de},be=()=>{const[a,C]=s.useState(60),[u,w]=s.useState(10),[v,I]=s.useState(!0),[h,j]=s.useState(!1),[f,M]=s.useState("start"),[c,H]=s.useState("view"),[T,i]=se(),b=[{name:"text",type:"string",default:'""',description:"The text content to decrypt."},{name:"speed",type:"number",default:"50",description:"Time in ms between each iteration."},{name:"maxIterations",type:"number",default:"10",description:"Max # of random iterations (non-sequential mode)."},{name:"sequential",type:"boolean",default:"false",description:"Whether to reveal one character at a time in sequence."},{name:"revealDirection",type:'"start" | "end" | "center"',default:'"start"',description:"From which position characters begin to reveal in sequential mode."},{name:"useOriginalCharsOnly",type:"boolean",default:"false",description:"Restrict scrambling to only the characters already in the text."},{name:"className",type:"string",default:'""',description:"CSS class for revealed characters."},{name:"parentClassName",type:"string",default:'""',description:"CSS class for the main characters container."},{name:"encryptedClassName",type:"string",default:'""',description:"CSS class for encrypted characters."},{name:"animateOn",type:'"view" | "hover"',default:'"hover"',description:"Trigger scrambling on hover or scroll-into-view."}],y=[{label:"View",value:"view"},{label:"Hover",value:"hover"}],E=[{label:"Start",value:"start"},{label:"End",value:"end"},{label:"Center",value:"center"}];return e.jsxs(X,{children:[e.jsxs(Y,{children:[e.jsxs(K,{position:"relative",py:{md:6,sm:4},className:"demo-container",overflow:"hidden",children:[e.jsx(ae,{onClick:i}),e.jsxs(D,{pl:{md:6,sm:3},m:{md:8,sm:2},w:"100%",direction:"column",justifyContent:"flex-start",alignItems:"flex-start",children:[e.jsx(N,{speed:a,text:"Ahoy, matey!",maxIterations:u,sequential:v,revealDirection:f,parentClassName:"decrypted-text",useOriginalCharsOnly:h,animateOn:c}),e.jsx(N,{speed:a,text:"Set yer eyes on this",maxIterations:u,sequential:v,revealDirection:f,parentClassName:"decrypted-text",useOriginalCharsOnly:h,animateOn:c}),e.jsx(N,{speed:a,text:"And try tinkerin' round'",maxIterations:u,sequential:v,revealDirection:f,parentClassName:"decrypted-text",useOriginalCharsOnly:h,animateOn:c}),e.jsx(N,{speed:a,text:"with these here props, arr!",maxIterations:u,sequential:v,revealDirection:f,parentClassName:"decrypted-text",useOriginalCharsOnly:h,animateOn:c,onAnimationComplete:()=>Q("✅ Animation Finished!")})]},T)]}),e.jsxs(ie,{children:[e.jsxs(D,{wrap:"wrap",gap:4,mb:4,children:[e.jsx(q,{title:"Sequential",isChecked:v,onChange:n=>{I(n),i()}}),e.jsx(q,{title:"Original Chars",isChecked:h,onChange:n=>{j(n),i()}})]}),e.jsx(P,{borderColor:"#271E37",my:4}),e.jsxs(D,{wrap:"wrap",direction:"column",gap:4,children:[e.jsx(F,{title:"Animate On",options:y,value:c,name:"animateOn",width:100,onChange:n=>{H(n),i()}}),e.jsx(F,{title:"Direction",options:E,value:f,name:"direction",width:100,onChange:n=>{M(n),i()}})]}),e.jsx(P,{borderColor:"#271E37",my:4}),e.jsxs(D,{wrap:"wrap",direction:"column",gap:4,mb:4,children:[e.jsx(k,{title:"Speed",min:10,max:200,step:10,value:a,valueUnit:"ms",onChange:n=>{C(n),i()}}),e.jsx(k,{title:"Iterations",min:1,max:50,step:1,value:u,onChange:n=>{w(n),i()}})]})]}),e.jsx(Z,{data:b}),e.jsx(ne,{dependencyList:["motion"]})]}),e.jsx(_,{children:e.jsx(ee,{codeObject:J})}),e.jsx(te,{children:e.jsx(re,{...J})})]})};export{be as default};
