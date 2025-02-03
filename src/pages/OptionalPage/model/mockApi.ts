import { EventType, ThemeType } from './types'

export const themes = [
  { id: 1, label: 'Кино', from: 2003, to: 2018 },
  { id: 2, label: 'Литература', from: 2001, to: 2022 },
  { id: 3, label: 'Театр', from: 2015, to: 2020 },
  { id: 4, label: 'Наука', from: 2007, to: 2022 },
]

export const events = [
  {
    id: 1,
    themeId: 1,
    title: 'Премьера фильма "Аватар"',
    description: 'Премьера культового фильма в 3D формате.',
    date: '2003-12-18',
  },
  {
    id: 2,
    themeId: 1,
    title: 'Фестиваль кино',
    description: 'Ежегодное событие, объединяющее любителей кино.',
    date: '2016-06-10',
  },
  {
    id: 3,
    themeId: 1,
    title: 'Премьера нового фильма',
    description: 'Дебют долгожданного фильма мирового уровня.',
    date: '2017-03-25',
  },
  {
    id: 4,
    themeId: 1,
    title: 'Награждение на кинофестивале',
    description: 'Церемония награждения лучших представителей киноиндустрии.',
    date: '2018-09-05',
  },
  // Литература (themeId: 2)
  {
    id: 5,
    themeId: 2,
    title: 'Выход нового романа',
    description: 'Новый роман известного писателя завоёвывает критиков.',
    date: '2001-05-10',
  },
  {
    id: 6,
    themeId: 2,
    title: 'Литературный вечер',
    description: 'Встреча с авторами и обсуждение новинок литературы.',
    date: '2016-11-15',
  },
  {
    id: 7,
    themeId: 2,
    title: 'Презентация книги',
    description: 'Официальное представление новой книги в литературном салоне.',
    date: '2017-08-20',
  },
  {
    id: 8,
    themeId: 2,
    title: 'Литературный конкурс',
    description: 'Соревнование молодых талантов в мире литературы.',
    date: '2022-04-30',
  },
  // Театр (themeId: 3)
  {
    id: 9,
    themeId: 3,
    title: 'Премьера театральной постановки',
    description: 'Дебют новой постановки, получившей восторженные отзывы.',
    date: '2015-09-15',
  },
  {
    id: 10,
    themeId: 3,
    title: 'Фестиваль театра',
    description: 'Многочисленные спектакли и постановки в рамках фестиваля.',
    date: '2016-07-22',
  },
  {
    id: 11,
    themeId: 3,
    title: 'Новогодняя постановка',
    description: 'Праздничное представление с участием звезд театра.',
    date: '2017-12-31',
  },
  {
    id: 12,
    themeId: 3,
    title: 'Дебютный спектакль',
    description: 'Первое выступление молодой театральной труппы.',
    date: '2020-10-10',
  },
  // Наука (themeId: 4)
  {
    id: 13,
    themeId: 4,
    title: 'Научная конференция',
    description: 'Международное собрание ученых для обмена идеями.',
    date: '2007-03-20',
  },
  {
    id: 14,
    themeId: 4,
    title: 'Выставка технологий',
    description: 'Демонстрация последних достижений в области технологий.',
    date: '2016-05-05',
  },
  {
    id: 15,
    themeId: 4,
    title: 'Научный симпозиум',
    description: 'Форум для обсуждения актуальных вопросов науки.',
    date: '2017-02-14',
  },
  {
    id: 16,
    themeId: 4,
    title: 'Презентация инноваций',
    description: 'Представление новых технологических решений и разработок.',
    date: '2022-11-11',
  },
]

/**
 * Simulate api for themes.
 */
export const fetchThemes = (): Promise<ThemeType[]> => {
  return new Promise<ThemeType[]>((resolve) => {
    setTimeout(() => {
      resolve(themes)
    }, 300)
  })
}

/**
 * Simulate api for events
 * @param {number} params.themeId - theme id
 * @param {number} params.from - start date (year)
 * @param {number} params.to - end date (year)
 * @returns {Promise<Array>} filtered events
 */
type FetchEventsParams = {
  themeId: number
  from: number
  to: number
}
export const fetchEvents = ({ themeId, from, to }: FetchEventsParams): Promise<EventType[]> => {
  return new Promise<EventType[]>((resolve) => {
    setTimeout(() => {
      const filteredEvents = events.filter((event) => {
        const eventYear = new Date(event.date).getFullYear()
        return event.themeId === themeId && eventYear >= from && eventYear <= to
      })
      resolve(filteredEvents)
    }, 300)
  })
}
