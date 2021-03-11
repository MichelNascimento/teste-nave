import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import NaverRegister from './components/NaverRegister'
import ListNavers from './components/ListNavers'
import ModalNaverDelete from './components/ModalNaverDelete'
import ModalNaverDetails from './components/ModalNaverDetails'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/NaverRegister" component={NaverRegister} />
        <Route path="/ListNavers" component={ListNavers} />
        <Route path="/ModalNaverDelete" component={ModalNaverDelete} />
        <Route path="/ModalNaverDetails/:id" component={ModalNaverDetails} />
      </Switch>
    </BrowserRouter>
  )
}