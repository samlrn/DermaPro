import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
} from '@ionic/react'

import AppHeader from '../components/AppHeader'
import ShiftCard from '../components/ShiftCard'
import { shifts } from '../data/marketplace'

export default function Shifts() {
  return (
    <IonPage>
      <AppHeader eyebrow="Marketplace" title="Shift discovery" />
      <IonContent fullscreen className="page-shell">
        <section className="split-toolbar">
          <div>
            <p className="eyebrow">Core booking loop</p>
            <h1>Post, discover, and apply for dermatology coverage.</h1>
          </div>
          <IonSegment value="open">
            <IonSegmentButton value="open">Open</IonSegmentButton>
            <IonSegmentButton value="saved">Saved</IonSegmentButton>
            <IonSegmentButton value="applied">Applied</IonSegmentButton>
          </IonSegment>
        </section>

        <section className="two-column wide-left">
          <div>
            <div className="filter-row">
              <IonItem>
                <IonSelect label="State" value="NC">
                  <IonSelectOption value="NC">North Carolina</IonSelectOption>
                  <IonSelectOption value="SC">South Carolina</IonSelectOption>
                  <IonSelectOption value="VA">Virginia</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonSelect label="Specialty" value="all">
                  <IonSelectOption value="all">All subspecialties</IonSelectOption>
                  <IonSelectOption value="general">General derm</IonSelectOption>
                  <IonSelectOption value="mohs">Mohs surgery</IonSelectOption>
                  <IonSelectOption value="pediatric">Pediatric</IonSelectOption>
                  <IonSelectOption value="cosmetic">Cosmetic</IonSelectOption>
                </IonSelect>
              </IonItem>
            </div>

            <div className="stack">
              {shifts.map((shift) => (
                <ShiftCard key={shift.id} shift={shift} cta="Apply" />
              ))}
            </div>
          </div>

          <IonCard className="form-card">
            <IonCardContent>
              <div className="section-heading">
                <p className="eyebrow">Clinic workflow</p>
                <h2>Post a shift draft</h2>
              </div>
              <IonItem>
                <IonInput label="Date" placeholder="Jul 8, 2026" />
              </IonItem>
              <IonItem>
                <IonInput label="Duration" placeholder="8 hr" />
              </IonItem>
              <IonItem>
                <IonInput label="Compensation" placeholder="$2,400" />
              </IonItem>
              <IonItem>
                <IonSelect label="Required specialty" value="general">
                  <IonSelectOption value="general">General dermatology</IonSelectOption>
                  <IonSelectOption value="mohs">Mohs surgery</IonSelectOption>
                  <IonSelectOption value="cosmetic">Cosmetic</IonSelectOption>
                  <IonSelectOption value="pediatric">Pediatric dermatology</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonInput label="EHR" placeholder="EMA, Epic, ModMed" />
              </IonItem>
              <IonButton expand="block">Save draft</IonButton>
              <IonLabel className="form-note">
                Draft/publish/cancel state handling should live behind this form
                once the backend is connected.
              </IonLabel>
            </IonCardContent>
          </IonCard>
        </section>
      </IonContent>
    </IonPage>
  )
}
