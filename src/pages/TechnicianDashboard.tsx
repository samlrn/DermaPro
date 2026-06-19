import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {
  calendarOutline,
  chatbubblesOutline,
  gridOutline,
  idCardOutline,
  searchOutline,
  logOutOutline,
} from 'ionicons/icons'
import { Redirect, Route, useHistory } from 'react-router-dom'

import Dashboard from './Dashboard'
import Shifts from './Shifts'
import Bookings from './Bookings'
import Messages from './Messages'
import Profile from './Profile'

export default function TechnicianDashboard() {
  const history = useHistory()

  const handleLogout = () => {
    history.push('/')
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/technician/dashboard" component={Dashboard} />
            <Route exact path="/technician/shifts" component={Shifts} />
            <Route exact path="/technician/bookings" component={Bookings} />
            <Route exact path="/technician/messages" component={Messages} />
            <Route exact path="/technician/profile" component={Profile} />
            <Route exact path="/technician">
              <Redirect to="/technician/dashboard" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/technician/dashboard">
              <IonIcon icon={gridOutline} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>
            <IonTabButton tab="shifts" href="/technician/shifts">
              <IonIcon icon={searchOutline} />
              <IonLabel>Shifts</IonLabel>
            </IonTabButton>
            <IonTabButton tab="bookings" href="/technician/bookings">
              <IonIcon icon={calendarOutline} />
              <IonLabel>Bookings</IonLabel>
            </IonTabButton>
            <IonTabButton tab="messages" href="/technician/messages">
              <IonIcon icon={chatbubblesOutline} />
              <IonLabel>Messages</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/technician/profile">
              <IonIcon icon={idCardOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="logout" onClick={handleLogout}>
              <IonIcon icon={logOutOutline} />
              <IonLabel>Logout</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}
