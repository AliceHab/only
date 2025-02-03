import { fetchThemes, fetchEvents } from '../model/mockApi'
import { DatesCircle } from 'widgets/ui/DatesCircle'

const OptionalPage = () => {
  return <DatesCircle fetchThemes={fetchThemes} fetchEvents={fetchEvents} />
}

export default OptionalPage
