import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact section-padding">
      <div class="container">
        <h2 class="section-title">Contact</h2>

        <div class="contact-wrapper">
          <div class="contact-content">
            <div class="contact-info">
              <h3 class="contact-subtitle">Coordonnées</h3>

              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-text">
                  <strong>Adresse:</strong>
                  <p>France / Union Européenne</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">✉️</div>
                <div class="info-text">
                  <strong>Mon Email:</strong>
                  <p>gbamba123@gmail.com</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-text">
                  <strong>Contact:</strong>
                  <p>+33 07 51 13 09 37</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">💼</div>
                <div class="info-text">
                  <strong>Disponibilité:</strong>
                  <p>Immédiate</p>
                </div>
              </div>

              <div class="social-links">
                <a href="https://www.linkedin.com/in/bamba-gaye-/" target="_blank" rel="noopener noreferrer" class="social-icon"><i class="fab fa-linkedin"></i></a>
                <a href="mailto:gbamba123@gmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
                <a href="tel:+33751130937" class="social-icon"><i class="fas fa-phone"></i></a>
              </div>
            </div>

            <div class="contact-form">
              <h3 class="contact-subtitle">Formulaire de contact</h3>

              <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="form-group">
                  <label class="form-label">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    class="form-input"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    class="form-input"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Objet*</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    [(ngModel)]="formData.subject"
                    required
                    class="form-input"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    [(ngModel)]="formData.message"
                    rows="4"
                    required
                    class="form-textarea">
                  </textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');

    // Réinitialiser le formulaire
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
