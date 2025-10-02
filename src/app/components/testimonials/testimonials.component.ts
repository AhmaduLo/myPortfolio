import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="temoignages" class="testimonials section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Témoignages</h2>
          <p class="section-subtitle">
            Ce que mes collaborateurs, formateurs et clients disent de mon travail et de mon professionnalisme.
          </p>
        </div>

        <div class="testimonials-carousel">
          <!-- Left side card -->
          <div class="testimonial-card side-card left"
               *ngIf="getPrevTestimonial()"
               (click)="previousSlide()">
            <div class="author-image">
              <img [src]="getPrevTestimonial()!.image" [alt]="getPrevTestimonial()!.name" />
            </div>
            <div class="testimonial-content">
              <p class="testimonial-text">{{ getPrevTestimonial()!.text }}</p>
              <div class="author-info">
                <h4 class="author-name">{{ getPrevTestimonial()!.name }}</h4>
                <p class="author-title">{{ getPrevTestimonial()!.title }}</p>
              </div>
            </div>
          </div>

          <!-- Center main card -->
          <div class="testimonial-card main-card">
            <div class="author-image">
              <img [src]="testimonials[currentIndex].image" [alt]="testimonials[currentIndex].name" />
            </div>
            <div class="testimonial-content">
              <p class="testimonial-text">{{ testimonials[currentIndex].text }}</p>
              <div class="author-info">
                <h4 class="author-name">{{ testimonials[currentIndex].name }}</h4>
                <p class="author-title">{{ testimonials[currentIndex].title }}</p>
              </div>
            </div>
          </div>

          <!-- Right side card -->
          <div class="testimonial-card side-card right"
               *ngIf="getNextTestimonial()"
               (click)="nextSlide()">
            <div class="author-image">
              <img [src]="getNextTestimonial()!.image" [alt]="getNextTestimonial()!.name" />
            </div>
            <div class="testimonial-content">
              <p class="testimonial-text">{{ getNextTestimonial()!.text }}</p>
              <div class="author-info">
                <h4 class="author-name">{{ getNextTestimonial()!.name }}</h4>
                <p class="author-title">{{ getNextTestimonial()!.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-indicators">
          <span
            *ngFor="let testimonial of testimonials; let i = index"
            [class.active]="i === currentIndex"
            (click)="goToSlide(i)"
            class="indicator">
          </span>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  currentIndex = 0;

  testimonials = [
    {
      text: "Ahmadu a fait preuve d'une grande autonomie et d'un excellent esprit d'équipe lors de son alternance. Sa maîtrise de React et son souci du détail dans les tests ont grandement contribué à la qualité de nos applications. C'est un développeur rigoureux qui s'investit pleinement dans ses projets.",
      name: "Jean Dupont",
      title: "Lead Developer, BNP Paribas",
      image: "assets/images/testimonial-bnp.jpg"
    },
    {
      text: "Développeur rigoureux et investi, Ahmadu a su mener à bien le projet Shambles en respectant les délais et en appliquant les bonnes pratiques de développement. Son évolution technique a été remarquable tout au long de sa formation. Sa capacité d'apprentissage et son professionnalisme sont exemplaires.",
      name: "Marie Martin",
      title: "Formatrice, Simplon",
      image: "assets/images/testimonial-simplon.jpg"
    },
    {
      text: "Professionnel et à l'écoute, Ahmadu a su comprendre nos besoins et créer un site web moderne et fonctionnel pour notre restaurant. Le système de réservation fonctionne parfaitement et nos clients apprécient la facilité d'utilisation. Nous recommandons ses services sans hésitation.",
      name: "Hassan Ali",
      title: "Propriétaire, Restaurant 2HA CONCEPT",
      image: "assets/images/testimonial-restaurant.jpg"
    },
    {
      text: "Ahmadu est un développeur Full Stack complet qui maîtrise aussi bien le frontend que le backend. Sa capacité à comprendre les besoins métier et à les traduire en solutions techniques efficaces est remarquable. Son expertise en Java/Spring Boot et Angular fait de lui un atout précieux pour tout projet.",
      name: "Sophie Leblanc",
      title: "Chef de Projet, OpenClassrooms",
      image: "assets/images/testimonial-openclassrooms.jpg"
    }
  ];

  getPrevTestimonial() {
    const prevIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    return this.testimonials[prevIndex];
  }

  getNextTestimonial() {
    const nextIndex = (this.currentIndex + 1) % this.testimonials.length;
    return this.testimonials[nextIndex];
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
