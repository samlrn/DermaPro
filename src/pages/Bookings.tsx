import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonPage,
  IonProgressBar,
} from '@ionic/react'
import { calendarNumberOutline, cardOutline, receiptOutline } from 'ionicons/icons'

import AppHeader from '../components/AppHeader'
import { bookings } from '../data/marketplace'

export default function Bookings() {
  return (
    <IonPage>
      <AppHeader eyebrow="Operations" title="Bookings & payments" />
      <IonContent fullscreen className="page-shell">
        <section className="split-toolbar">
          <div>
            <p className="eyebrow">Confirmed coverage</p>
            <h1>Track acceptances, calendars, invoices, and payouts.</h1>
          </div>
          <IonButton>
            <IonIcon icon={calendarNumberOutline} slot="start" />
            Sync calendar
          </IonButton>
        </section>

        <section className="booking-grid">
          {bookings.map((booking) => (
            <IonCard className="booking-card" key={booking.id}>
              <IonCardContent>
                <div className="card-heading">
                  <div>
                    <p className="eyebrow">{booking.id}</p>
                    <h2>{booking.clinic}</h2>
                  </div>
                  <IonBadge color={booking.status === 'Confirmed' ? 'success' : 'warning'}>
                    {booking.status}
                  </IonBadge>
                </div>
                <p className="muted">
                  {booking.dermatologist} · {booking.date}
                </p>
                <div className="payment-row">
                  <IonIcon icon={cardOutline} />
                  <strong>${booking.payment.toLocaleString()}</strong>
                  <span>Stripe payment workflow</span>
                </div>
                <IonProgressBar
                  value={booking.status === 'Ready for payout' ? 1 : booking.status === 'Confirmed' ? 0.68 : 0.34}
                />
                <div className="card-actions">
                  <span>Invoice and receipt ready after capture</span>
                  <IonButton fill="clear" size="small">
                    <IonIcon icon={receiptOutline} slot="start" />
                    Details
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </section>
      </IonContent>
    </IonPage>
  )
}
