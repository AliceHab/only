import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

import * as s from './styles.module.scss'
import { CarretRight } from '../Icons/assets/CarretRight'
import { CarretLeft } from '../Icons/assets/CarretLeft'

type EventType = {
  id: number
  themeId: number
  title: string
  description: string
  date: string
}

type PaginationProps = {
  eventsData: EventType[]
}

export const Pagination = ({ eventsData }: PaginationProps) => {
  if (!eventsData || eventsData.length === 0) {
    return null
  }

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <Swiper
      navigation={{
        nextEl: `.${s.swiper_button_next}`,
        prevEl: `.${s.swiper_button_prev}`,
        disabledClass: s.swiper_button_disabled,
      }}
      modules={[Navigation]}
      slidesPerView={'auto'}
      breakpoints={{
        0: {
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          spaceBetween: 25,
        },
        1450: {
          slidesOffsetBefore: 78,
          slidesOffsetAfter: 78,
          spaceBetween: 85,
        },
      }}
      className={s.swiper}
      onSlideChange={handleSlideChange}
    >
      {eventsData.map((event, index) => (
        <SwiperSlide
          key={event.id}
          className={`${s.slide} ${index === activeIndex ? s.active : ''}`}
        >
          <p className={s.slide_title}>{new Date(event.date).getFullYear()}</p>
          <p className={s.slide_text}>{event.description}</p>
        </SwiperSlide>
      ))}

      <div className={s.swiper_button_next}>
        <CarretRight width="5" height="10" stroke="var(--iris-100)" />
      </div>
      <div className={s.swiper_button_prev}>
        <CarretLeft width="6" height="12" stroke="var(--iris-100)" />
      </div>
    </Swiper>
  )
}
