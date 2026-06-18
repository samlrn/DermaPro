import {
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonIcon,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
} from '@ionic/react'
import {
  addCircleOutline,
  checkmarkCircleOutline,
  shieldCheckmarkOutline,
  trendingUpOutline,
} from 'ionicons/icons'
import { useState } from 'react'

import AppHeader from '../components/AppHeader'
import ShiftCard from '../components/ShiftCard'
import StatCard from '../components/StatCard'
import { dashboardStats, roadmap, shifts, type UserRole } from '../data/marketplace'

export default function Dashboard() {
  const [role, setRole] = useState<UserRole>('clinic')

  return (
    <IonPage>
      <AppHeader eyebrow="DermaPro" title="Marketplace dashboard" />
      <IonContent fullscreen className="page-shell">
        <section className="workspace-band">
          <div className="workspace-copy">
            <IonChip color="primary">
              <IonIcon icon={shieldCheckmarkOutline} />
              <span>Credential-first staffing</span>
            </IonChip>
            <h1>Fill dermatology coverage gaps before they become lost clinic days.</h1>
            <p>
              A web-first marketplace for clinics posting shifts and dermatologists
              finding flexible, short-term coverage opportunities.
            </p>
          </div>

          <div className="workspace-actions">
            <IonSegment
              value={role}
              onIonChange={(event) => setRole(event.detail.value as UserRole)}
            >
              <IonSegmentButton value="clinic">Clinic</IonSegmentButton>
              <IonSegmentButton value="dermatologist">Dermatologist</IonSegmentButton>
            </IonSegment>
            <IonButton routerLink="/shifts">
              <IonIcon icon={addCircleOutline} slot="start" />
              {role === 'clinic' ? 'Post shift' : 'Find shifts'}
            </IonButton>
          </div>
        </section>

        <section className="stat-grid" aria-label="Marketplace metrics">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="two-column">
          <div>
            <div className="section-heading">
              <IonText color="medium">
                <p className="eyebrow">High priority</p>
              </IonText>
              <h2>Shifts needing action</h2>
            </div>
            <div className="stack">
              {shifts.slice(0, 2).map((shift) => (
                <ShiftCard key={shift.id} shift={shift} cta="Open match" />
              ))}
            </div>
          </div>

          <div>
            <div className="section-heading">
              <IonText color="medium">
                <p className="eyebrow">MVP scope</p>
              </IonText>
              <h2>Build priorities</h2>
            </div>
            <IonCard className="checklist-card">
              <IonCardContent>
                {roadmap.map((item) => (
                  <div className="check-row" key={item}>
                    <IonIcon icon={checkmarkCircleOutline} />
                    <span>{item}</span>
                  </div>
                ))}
              </IonCardContent>
            </IonCard>

            <IonCard className="insight-card">
              <IonCardContent>
                <IonIcon icon={trendingUpOutline} />
                <div>
                  <h3>Launch wedge</h3>
                  <p>
                    Compete on fast, self-serve coverage instead of the slow,
                    phone-based locum tenens workflow.
                  </p>
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </section>
      </IonContent>
    </IonPage>
  )
}
