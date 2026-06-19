import { IonApp, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'

import Home from './pages/Home'
import TechnicianDashboard from './pages/TechnicianDashboard'
import ClinicDashboard from './pages/ClinicDashboard'

import './App.css'

setupIonicReact()

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <Route exact path="/" component={Home} />
        <Route path="/technician" component={TechnicianDashboard} />
        <Route path="/clinic" component={ClinicDashboard} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
      </IonReactRouter>
    </IonApp>
  )
}
