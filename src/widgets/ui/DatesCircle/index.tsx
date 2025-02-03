import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { EventType, ThemeType } from '../../../pages/MainPage/model/types'
import { Pagination } from 'shared/ui/Pagination'
import { Navigation } from 'shared/ui/Navigation'
import { HistoryCircle } from 'shared/ui/HistoryCircle'
import * as s from './styles.module.scss'
import { animateNumber } from './model/utils'

type DatesCircleProps = {
  fetchThemes: () => Promise<ThemeType[]>
  fetchEvents: (params: { themeId: number; from: number; to: number }) => Promise<EventType[]>
}

export const DatesCircle = ({ fetchThemes, fetchEvents }: DatesCircleProps) => {
  const [rotation, setRotation] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [themesData, setThemesData] = useState<ThemeType[]>([])
  const [eventsData, setEventsData] = useState<EventType[]>([])
  const [selectedThemeId, setSelectedThemeId] = useState(null)

  const [currentDateLeft, setCurrentDateLeft] = useState(null)
  const [currentDateRight, setCurrentDateRight] = useState(null)

  const dateLeftRef = useRef(null)
  const dateRightRef = useRef(null)

  const degreesPerButton = themesData.length > 0 ? 360 / themesData.length : 360

  useEffect(() => {
    fetchThemes().then((data) => {
      setThemesData(data)
      if (data && data.length > 0) {
        setSelectedThemeId(data[data.length - 1].id)
        setCurrentDateLeft(data[data.length - 1].from)
        setCurrentDateRight(data[data.length - 1].to)
        setActiveIndex(data.length - 1)

        fetchEvents({
          themeId: data[data.length - 1].id,
          from: data[data.length - 1].from,
          to: data[data.length - 1].to,
        }).then((events) => {
          setEventsData(events)
        })
      }
    })
  }, [])

  const handleClickPagination = (direction: 'prev' | 'next') => {
    if (!themesData || themesData.length === 0) return
    let newIndex = activeIndex + (direction === 'prev' ? -1 : 1)
    if (newIndex < 0 || newIndex >= themesData.length) return

    const selectedTheme = themesData[newIndex]
    const baseAngleDegrees = degreesPerButton * newIndex - 30
    let currentAngle = (baseAngleDegrees + rotation) % 360
    if (currentAngle < 0) currentAngle += 360

    let delta = 270 - currentAngle
    if (delta > 180) delta -= 360
    else if (delta < -180) delta += 360

    setRotation((prev) => prev + delta)
    setActiveIndex(newIndex)
    setSelectedThemeId(selectedTheme.id)

    animateNumber(currentDateLeft, selectedTheme.from, dateLeftRef)
    animateNumber(currentDateRight, selectedTheme.to, dateRightRef)
    setCurrentDateLeft(selectedTheme.from)
    setCurrentDateRight(selectedTheme.to)

    setEventsData([])

    fetchEvents({ themeId: selectedTheme.id, from: selectedTheme.from, to: selectedTheme.to }).then(
      (events) => {
        setEventsData(events)
      }
    )
  }

  const handleClickCircle = (index: number) => {
    if (!themesData || themesData.length === 0) return

    const selectedTheme = themesData[index]
    const desiredAngle = 270
    const baseAngleDegrees = degreesPerButton * index - 30

    let currentAngle = (baseAngleDegrees + rotation) % 360
    if (currentAngle < 0) currentAngle += 360

    let delta = desiredAngle - currentAngle
    if (delta > 180) delta -= 360
    else if (delta < -180) delta += 360

    setRotation((prev) => prev + delta)
    setActiveIndex(index)
    setSelectedThemeId(selectedTheme.id)

    animateNumber(currentDateLeft, selectedTheme.from, dateLeftRef)
    animateNumber(currentDateRight, selectedTheme.to, dateRightRef)
    setCurrentDateLeft(selectedTheme.from)
    setCurrentDateRight(selectedTheme.to)

    setEventsData([])

    fetchEvents({ themeId: selectedTheme.id, from: selectedTheme.from, to: selectedTheme.to }).then(
      (events) => {
        setEventsData(events)
      }
    )
  }

  const selectedTheme = themesData.find((theme) => theme.id === selectedThemeId)
  const themeTitle = selectedTheme ? selectedTheme.label : ''

  return (
    <section className={cn(s.container)}>
      <div className={cn(s.verticalLine)} />

      <div className={cn(s.main)}>
        <h2 className={cn(s.h2)}> {'Исторические\nдаты'}</h2>
        <HistoryCircle
          activeIndex={activeIndex}
          themesData={themesData}
          rotation={rotation}
          handleClickCircle={handleClickCircle}
          currentDateLeft={currentDateLeft}
          currentDateRight={currentDateRight}
          dateLeftRef={dateLeftRef}
          dateRightRef={dateRightRef}
        />

        <Navigation
          activeIndex={activeIndex}
          themesDataLength={themesData.length}
          handleClickPagination={handleClickPagination}
          handleClickCircle={handleClickCircle}
        />

        <div className={cn(s.gradient)} />
        <div className={cn(s.horizontalLine)} />
        <div className={cn(s.swapperWrapper)}>
          <p className={s.themeTitle}>{themeTitle}</p>
          <Pagination eventsData={eventsData} />
        </div>
      </div>
    </section>
  )
}
