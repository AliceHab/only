import cn from 'classnames'
import { CarretLeft } from 'shared/ui/Icons/assets/CarretLeft'
import { CarretRight } from 'shared/ui/Icons/assets/CarretRight'
import * as s from './styles.module.scss'

type NavigationProps = {
  activeIndex: number
  themesDataLength: number
  handleClickPagination: (direction: 'prev' | 'next') => void
  handleClickCircle: (index: number) => void
}

export const Navigation = ({
  activeIndex,
  themesDataLength,
  handleClickPagination,
  handleClickCircle,
}: NavigationProps) => {
  return (
    <>
      <div className={cn(s.pagination)}>
        <p className={cn(s.counter)}>
          0{activeIndex + 1}/0{themesDataLength}
        </p>
        <div className={cn(s.paginationButtonsWrapper)}>
          <button
            className={cn(s.paginationBtn, { [s.disabled]: activeIndex === 0 })}
            disabled={activeIndex === 0}
            onClick={() => handleClickPagination('prev')}
          >
            <CarretLeft className={s.paginationIcon} stroke="rgba(var(--black-blue)" />
          </button>
          <button
            className={cn(s.paginationBtn, { [s.disabled]: activeIndex === themesDataLength - 1 })}
            disabled={activeIndex === themesDataLength - 1}
            onClick={() => handleClickPagination('next')}
          >
            <CarretRight className={s.paginationIcon} stroke="rgba(var(--black-blue)" />
          </button>
        </div>
      </div>

      <div className={cn(s.paginationCirclesWrapper)}>
        {Array.from({ length: themesDataLength }).map((_, index) => (
          <button
            key={index}
            className={cn(s.paginationCircle, {
              [s.paginationCircleActive]: index === activeIndex,
            })}
            disabled={index === activeIndex}
            onClick={() => handleClickCircle(index)}
          ></button>
        ))}
      </div>
    </>
  )
}
