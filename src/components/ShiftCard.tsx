import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react'
import {
  cashOutline,
  documentTextOutline,
  locationOutline,
  timeOutline,
} from 'ionicons/icons'

import type { Shift } from '../data/marketplace'

type ShiftCardProps = {
  shift: Shift
  cta?: string
}

export default function ShiftCard({ shift, cta = 'Review' }: ShiftCardProps) {
  return (
    <IonCard className="shift-card">
      <IonCardContent>
        <div className="card-heading">
          <div>
            <p className="eyebrow">{shift.id}</p>
            <h2>{shift.clinic}</h2>
          </div>
          <IonBadge color={shift.status === 'Open' ? 'success' : 'warning'}>
            {shift.status}
          </IonBadge>
        </div>

        <IonList lines="none" className="detail-list">
          <IonItem>
            <IonIcon icon={locationOutline} slot="start" />
            <IonLabel>{shift.location}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={timeOutline} slot="start" />
            <IonLabel>
              {shift.date} · {shift.duration}
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>${shift.compensation.toLocaleString()} day rate</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={documentTextOutline} slot="start" />
            <IonLabel>
              {shift.specialty} · {shift.ehr}
            </IonLabel>
          </IonItem>
        </IonList>

        <div className="card-actions">
          <span>{shift.applicants} applicants</span>
          <IonButton size="small">{cta}</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  )
}
