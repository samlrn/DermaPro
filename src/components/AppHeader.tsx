import {
  IonBadge,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { notificationsOutline, personCircleOutline } from 'ionicons/icons'

type AppHeaderProps = {
  eyebrow: string
  title: string
}

export default function AppHeader({ eyebrow, title }: AppHeaderProps) {
  return (
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>
          <span className="toolbar-eyebrow">{eyebrow}</span>
          <span className="toolbar-title">{title}</span>
        </IonTitle>
        <IonButtons slot="end">
          <IonButton aria-label="Notifications">
            <IonIcon slot="icon-only" icon={notificationsOutline} />
            <IonBadge color="danger" className="notification-badge">
              4
            </IonBadge>
          </IonButton>
          <IonButton aria-label="Account">
            <IonIcon slot="icon-only" icon={personCircleOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}
