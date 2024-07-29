import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Blog from './pages/blog'
import Materia from './pages/materia'

function App() {
  return (
    <Switch>
      <Route
        path='/materia-prima/:id'
        component={Materia}
      />
      <Route
        path='/blog/:id'
        component={Blog}
      />
      <Route component={Home} />
    </Switch>
  )
}

export default App
