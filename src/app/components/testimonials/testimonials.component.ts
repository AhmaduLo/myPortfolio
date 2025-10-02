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
          <h2 class="section-title">Témoignage</h2>
          <p class="section-subtitle">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
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
      text: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Maecenas pellentesque id adipiscing commodo elit at imperdiet dui accumsan.",
      name: "Adama Gueye",
      title: "CEO Digital UPÙX",
      image: "assets/images/testimonial1.jpg"
    },
    {
      text: "Ahmadou a su transformer notre vision en une réalité digitale exceptionnelle. Son expertise technique et sa créativité ont dépassé nos attentes. Un professionnel à recommander sans hésitation.",
      name: "Saliou Diop",
      title: "CEO TechStart",
      image: "assets/images/testimonial2.jpg"
    },
    {
      text: "Collaborer avec Ahmadou a été un véritable plaisir. Sa maîtrise des technologies modernes et sa capacité à livrer dans les délais en font un développeur de choix pour tout projet web ambitieux.",
      name: "Fatou Ndiaye",
      title: "CTO Innovation Labs",
      image: "assets/images/testimonial3.jpg"
    },
    {
      text: "Un développeur exceptionnel qui allie compétence technique et créativité. Ahmadou a livré un projet parfait dans les temps. Je le recommande vivement pour tout projet web d'envergure.",
      name: "Moussa Ba",
      title: "Directeur Digital Solutions",
      image: "assets/images/testimonial4.jpg"
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
