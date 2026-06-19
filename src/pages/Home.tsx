import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react'
import { useHistory } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  const history = useHistory()

  return (
    <IonPage>
      <IonContent fullscreen className="home-content">
        <div className="home-container">
          <div className="hero-section">
            <h1 className="app-title">DermaPro</h1>
            <p className="app-tagline">Professional Dermatology Services Made Simple</p>
          </div>

          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              DermaPro connects dermatology clinics with certified technicians and dermatologists
              to streamline scheduling, booking, and professional collaboration.
            </p>
          </div>

          <div className="features-section">
            <h3>What We Do</h3>
            <div className="features-grid">
              <div className="feature-card">
                <h4>Easy Scheduling</h4>
                <p>Manage shifts and availability effortlessly</p>
              </div>
              <div className="feature-card">
                <h4>Direct Communication</h4>
                <p>Connect with clinics and colleagues instantly</p>
              </div>
              <div className="feature-card">
                <h4>Booking Management</h4>
                <p>Track and organize all your appointments</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Get Started</h3>
            <p>Choose your role to continue</p>

            <IonGrid>
              <IonRow className="button-row">
                <IonCol>
                  <IonButton
                    expand="block"
                    size="large"
                    onClick={() => history.push('/technician')}
                    className="cta-button technician-btn"
                  >
                    I'm a Technician
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow className="button-row">
                <IonCol>
                  <IonButton
                    expand="block"
                    size="large"
                    onClick={() => history.push('/clinic')}
                    className="cta-button clinic-btn"
                  >
                    I'm Looking for a Technician
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}
