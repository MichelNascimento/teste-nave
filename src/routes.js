import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import NaverRegister from './components/NaverRegister'
import ListNavers from './components/ListNavers'
import ModalNaverDelete from './components/ModalNaverDelete'

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/NaverRegister">
          <NaverRegister action={props.action} />
        </Route>
        <Route path="/ListNavers" component={ListNavers} />
        <Route path="/ModalNaverDelete" component={ModalNaverDelete} />
      </Switch>
    </BrowserRouter>
  )
}