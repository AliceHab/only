import cn from 'classnames'
import * as s from './styles.module.scss'

type HistoryCircleProps = {
  activeIndex: number
  themesData: { id: number; label: string }[]
  rotation: number
  handleClickCircle: (index: number) => void
  currentDateLeft: number
  currentDateRight: number
  dateLeftRef: React.RefObject<HTMLParagraphElement>
  dateRightRef: React.RefObject<HTMLParagraphElement>
}

export const HistoryCircle = ({
  activeIndex,
  themesData,
  rotation,
  handleClickCircle,
  currentDateLeft,
  currentDateRight,
  dateLeftRef,
  dateRightRef,
}: HistoryCircleProps) => {
  const radius = 265
  const centerX = 265
  const centerY = 265

  return (
    <div className={cn(s.circle)}>
      <div
        className={cn(s.circleWrapper)}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        {themesData.map((theme, index) => {
          const angle = (2 * Math.PI * index) / themesData.length
          const x = centerX + radius * Math.cos(angle)
          const y = centerY + radius * Math.sin(angle)

          return (
            <button
              key={theme.id}
              className={cn(s.circleBtn, { [s.active]: index === activeIndex })}
              onClick={() => handleClickCircle(index)}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
              }}
            >
              <p className={cn(s.circleNum)}>{theme.id}</p>
              <p className={cn(s.circleLabel)}>{theme.label}</p>
            </button>
          )
        })}
      </div>

      <div className={cn(s.dates)}>
        <p className={cn(s.dateL)} ref={dateLeftRef}>
          {currentDateLeft}
        </p>
        <p className={cn(s.dateR)} ref={dateRightRef}>
          {currentDateRight}
        </p>
      </div>
    </div>
  )
}
