import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {
  calendarOutline,
  chatbubblesOutline,
  gridOutline,
  idCardOutline,
  searchOutline,
} from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Shifts from './pages/Shifts'
import Bookings from './pages/Bookings'
import Messages from './pages/Messages'
import Profile from './pages/Profile'

import './App.css'

setupIonicReact()

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/shifts" component={Shifts} />
            <Route exact path="/bookings" component={Bookings} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon icon={gridOutline} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>
            <IonTabButton tab="shifts" href="/shifts">
              <IonIcon icon={searchOutline} />
              <IonLabel>Shifts</IonLabel>
            </IonTabButton>
            <IonTabButton tab="bookings" href="/bookings">
              <IonIcon icon={calendarOutline} />
              <IonLabel>Bookings</IonLabel>
            </IonTabButton>
            <IonTabButton tab="messages" href="/messages">
              <IonIcon icon={chatbubblesOutline} />
              <IonLabel>Messages</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={idCardOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}
