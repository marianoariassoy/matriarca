import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
