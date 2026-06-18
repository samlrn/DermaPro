import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonProgressBar,
} from '@ionic/react'
import {
  cloudUploadOutline,
  ribbonOutline,
  shieldCheckmarkOutline,
  warningOutline,
} from 'ionicons/icons'

import AppHeader from '../components/AppHeader'

const credentialItems = [
  { label: 'State medical license', status: 'Verified', due: 'NC · expires Feb 2027' },
  { label: 'DEA license', status: 'Expiring', due: 'Renew by Aug 12, 2026' },
  { label: 'Malpractice insurance', status: 'Verified', due: '$1M / $3M coverage' },
  { label: 'CV and board certification', status: 'Review', due: 'Admin review pending' },
]

export default function Profile() {
  return (
    <IonPage>
      <AppHeader eyebrow="Provider readiness" title="Profile & credentials" />
      <IonContent fullscreen className="page-shell">
        <section className="profile-band">
          <div className="avatar-mark">MC</div>
          <div>
            <p className="eyebrow">Dermatologist profile</p>
            <h1>Dr. Maya Chen</h1>
            <p>Board-certified dermatologist · General derm, cosmetic, Mohs assist</p>
          </div>
          <IonBadge color="success">
            <IonIcon icon={shieldCheckmarkOutline} />
            Verified
          </IonBadge>
        </section>

        <section className="two-column">
          <IonCard>
            <IonCardContent>
              <div className="section-heading">
                <p className="eyebrow">Completion</p>
                <h2>Onboarding progress</h2>
              </div>
              <IonProgressBar value={0.84} />
              <p className="muted">
                Profile, rate, state licenses, subspecialties, and CV upload power
                the matching engine.
              </p>
              <div className="profile-facts">
                <span>$2,400 day rate</span>
                <span>NC, SC</span>
                <span>EMA, Epic, ModMed</span>
              </div>
              <IonButton expand="block">
                <IonIcon icon={cloudUploadOutline} slot="start" />
                Upload document
              </IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent>
              <div className="section-heading">
                <p className="eyebrow">Credential vault</p>
                <h2>Compliance checklist</h2>
              </div>
              <IonList lines="full">
                {credentialItems.map((item) => (
                  <IonItem key={item.label}>
                    <IonIcon
                      icon={item.status === 'Expiring' ? warningOutline : ribbonOutline}
                      slot="start"
                    />
                    <IonLabel>
                      <h2>{item.label}</h2>
                      <p>{item.due}</p>
                    </IonLabel>
                    <IonBadge color={item.status === 'Verified' ? 'success' : 'warning'}>
                      {item.status}
                    </IonBadge>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        </section>
      </IonContent>
    </IonPage>
  )
}
