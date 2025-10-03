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
      text: "Ahmadu a été un excellent apprenti. Il a fait preuve d'une grande autonomie, d'une implication remarquable et a rapidement maîtrisé JavaScript et React. Son travail rigoureux et sa capacité d'adaptation ont été des atouts précieux pour l'équipe.",
      name: "BRAULT Sylvain",
      title: "Lead Developer, BNP Paribas",
      image: "assets/images/BNP_Paribas.png"
    },
    {
      text: "Ahmadou a réalisé le site vitrine de notre restaurant avec professionnalisme. Il a su comprendre nos besoins et proposer une interface moderne et fonctionnelle. Nous avons apprécié son écoute et sa capacité à livrer un travail de qualité dans les délais impartis.",
      name: "Hassan Ali",
      title: "Gérant, Restaurant 2HA CONCEPT",
      image: "assets/images/resto2h.png"
    },
    {
      text: "Ahmadou a montré une réelle progression durant sa formation chez Simplon. Son projet Shambles démontre sa capacité à développer une application complète en respectant les bonnes pratiques. Il a su travailler en équipe et s'adapter aux méthodes Agile.",
      name: "Jeremy Sostra",
      title: "Formateur, Simplon",
      image: "assets/images/simplon.png"
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
