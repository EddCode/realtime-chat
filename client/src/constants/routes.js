import { Route } from 'react-router-dom'
import asyncComponent from './AsyncComponent'

import UserContext from '../Context/user'

const routes = {
  Home: {
    path: '/',
    component: asyncComponent(() => import('../Views/Home'))
  },
  Chat: {
    path: '/chat',
    component: asyncComponent(() => import('../Views/Chat'))
  },
}

export const Routes = () => (
  <UserContext>
    {
      Object.values(routes).map(route => (
        <Route exact key={route.path} path={route.path} component={route.component}/>
      ))
    }
  </UserContext>
)

