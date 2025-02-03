import 'app/styles/index.scss'
import { AppRouter } from 'app/providers/router'

const App = () => {
  return (
    <div className={'app'}>
      {/* <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link> */}
      <AppRouter />
    </div>
  )
}

export default App
