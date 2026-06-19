import {
  IonApp,
  IonIcon,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
} from '@ionic/react'
import { logOutOutline } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'

export default function ClinicDashboard() {
  const history = useHistory()

  const handleLogout = () => {
    history.push('/')
  }

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Clinic Dashboard</IonTitle>
            <IonButton slot="end" onClick={handleLogout} fill="clear">
              <IonIcon icon={logOutOutline} />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to Clinic Dashboard</h1>
            <p>Find and manage technicians and dermatologists</p>
            <p style={{ color: '#999', marginTop: '40px' }}>
              Dashboard features coming soon...
            </p>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  )
}
