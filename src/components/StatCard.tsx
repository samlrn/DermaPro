import { IonCard, IonCardContent, IonText } from '@ionic/react'

type StatCardProps = {
  label: string
  value: string
  detail: string
}

export default function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <IonCard className="stat-card">
      <IonCardContent>
        <IonText color="medium">
          <p className="eyebrow">{label}</p>
        </IonText>
        <strong>{value}</strong>
        <p>{detail}</p>
      </IonCardContent>
    </IonCard>
  )
}
