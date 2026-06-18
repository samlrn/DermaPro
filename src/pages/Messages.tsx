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
  IonTextarea,
} from '@ionic/react'
import { lockOpenOutline, paperPlaneOutline } from 'ionicons/icons'

import AppHeader from '../components/AppHeader'
import { messages } from '../data/marketplace'

export default function Messages() {
  return (
    <IonPage>
      <AppHeader eyebrow="Communication" title="Shift messages" />
      <IonContent fullscreen className="page-shell">
        <section className="split-toolbar">
          <div>
            <p className="eyebrow">Unlocked after application</p>
            <h1>Keep every clinic-provider conversation tied to one shift.</h1>
          </div>
          <IonBadge color="primary">3 active threads</IonBadge>
        </section>

        <section className="two-column">
          <IonCard>
            <IonCardContent>
              <IonList lines="full" className="message-list">
                {messages.map((message) => (
                  <IonItem button key={message.subject}>
                    <IonLabel>
                      <div className="message-row">
                        <strong>{message.from}</strong>
                        {message.unread && <IonBadge color="danger">New</IonBadge>}
                      </div>
                      <h2>{message.subject}</h2>
                      <p>{message.preview}</p>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>

          <IonCard className="thread-card">
            <IonCardContent>
              <div className="section-heading">
                <p className="eyebrow">shift-1042</p>
                <h2>Triangle Dermatology Center</h2>
              </div>
              <div className="conversation">
                <p className="bubble incoming">
                  Can you confirm comfort with biopsy documentation and follow-up
                  templates in EMA?
                </p>
                <p className="bubble outgoing">
                  Yes. I used EMA for two recent coverage shifts and can follow
                  your clinic templates.
                </p>
              </div>
              <IonTextarea
                autoGrow
                label="Reply"
                labelPlacement="stacked"
                placeholder="Write a message"
              />
              <div className="card-actions">
                <span>
                  <IonIcon icon={lockOpenOutline} /> Messaging active after application
                </span>
                <IonButton size="small">
                  <IonIcon icon={paperPlaneOutline} slot="start" />
                  Send
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </section>
      </IonContent>
    </IonPage>
  )
}
