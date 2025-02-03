export type ThemeType = {
  id: number
  label: string
  from: number
  to: number
}

export type EventType = {
  id: number
  themeId: number
  title: string
  description: string
  date: string
}
