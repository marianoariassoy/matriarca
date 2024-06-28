import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Blog from './pages/blog'
import Materia from './pages/materia'

import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/materia-prima/:id'
        component={Materia}
      />
      <Route
        path='/blog/:id'
        component={Blog}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
