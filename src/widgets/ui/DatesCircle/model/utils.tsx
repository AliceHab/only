import { gsap } from 'gsap'

export const animateNumber = (
  from: number,
  to: number,
  ref: React.RefObject<HTMLParagraphElement>
) => {
  const obj = { num: from }
  gsap.to(obj, {
    num: to,
    duration: 0.3,
    ease: 'power1.out',
    onUpdate: () => {
      if (ref.current) {
        ref.current.textContent = Math.floor(obj.num).toString()
      }
    },
  })
}

