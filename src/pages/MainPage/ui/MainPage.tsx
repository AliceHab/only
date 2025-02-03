import { fetchThemes, fetchEvents } from '../model/mockApi'
import { DatesCircle } from 'widgets/ui/DatesCircle'

const MainPage = () => {
  return <DatesCircle fetchThemes={fetchThemes} fetchEvents={fetchEvents} />
}

export default MainPage
