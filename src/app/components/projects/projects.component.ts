import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projets" class="projects section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Mes Projets</h2>
          <p class="section-subtitle">
            Découvrez quelques-uns de mes projets récents qui démontrent 
            mes compétences et ma passion pour le développement web.
          </p>
        </div>
        
        <div class="filter-buttons">
          <button 
            *ngFor="let filter of filters" 
            [class.active]="currentFilter === filter"
            (click)="filterProjects(filter)"
            class="filter-btn">
            {{ filter }}
          </button>
        </div>
        
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of filteredProjects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
            </div>
            <div class="project-info">
              <span class="project-category">{{ project.category }}</span>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  filters = ['Tous', 'WordPress', 'Site web dynamique', 'Angular'];
  currentFilter = 'Tous';

  projects = [
    {
      title: 'bambagaye-shop',
      category: 'E-Shop',
      description: 'Site e-commerce développé avec WordPress, intégrant WooCommerce pour une expérience d\'achat optimale.',
      image: 'assets/images/project1.jpg',
      tags: ['WordPress', 'E-Shop']
    },
    {
      title: 'Business Landing Page Design',
      category: 'Design',
      description: 'Page d\'atterrissage moderne pour entreprise avec design responsive et optimisations SEO.',
      image: 'assets/images/project2.jpg',
      tags: ['Site web dynamique', 'Design']
    },
    {
      title: 'Ecom Web Page Design',
      category: 'Ecommerce',
      description: 'Interface e-commerce développée avec Angular, offrant une expérience utilisateur fluide et moderne.',
      image: 'assets/images/project3.jpg',
      tags: ['Angular', 'Ecommerce']
    }
  ];

  filteredProjects = [...this.projects];

  filterProjects(filter: string) {
    this.currentFilter = filter;
    
    if (filter === 'Tous') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.tags.includes(filter)
      );
    }
  }
}
