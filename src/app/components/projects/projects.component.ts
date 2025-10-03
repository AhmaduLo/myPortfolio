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
              <div class="project-technologies" *ngIf="project.technologies">
                <span class="tech-badge" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
              <a *ngIf="project.link" [href]="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
                Voir le projet →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  filters = ['Tous', 'Java/Spring', 'Angular', 'React', 'Full Stack', 'CI/CD'];
  currentFilter = 'Tous';

  projects = [
    {
      title: 'Projet 9 : Pipeline CI/CD & DevOps',
      category: 'CI/CD & DevOps',
      description: 'Mise en place d\'un pipeline complet avec GitHub Actions, conteneurisation Docker, analyse de code SonarCloud et déploiement automatisé.',
      image: 'assets/images/projet9.png',
      tags: ['CI/CD', 'Full Stack'],
      technologies: ['GitHub Actions', 'Docker', 'SonarCloud', 'Java', 'Angular'],
      link: 'https://github.com/AhmaduLo/projet_9?tab=readme-ov-file'
    },
    {
      title: 'Projet 6 : Application Full Stack Java/Angular',
      category: 'Full Stack',
      description: 'Application complète avec backend Java/Spring Boot et frontend Angular. Gestion de base de données, sécurité (authentification/autorisation) et API REST complète.',
      image: 'assets/images/projet6.png',
      tags: ['Java/Spring', 'Angular', 'Full Stack'],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'API REST'],
      link: 'https://github.com/AhmaduLo/projet6D-veloppez-une-application-full-stack-compl-te'
    },
    {
      title: 'Projet 5 : Application avec Tests Automatisés',
      category: 'Full Stack',
      description: 'Application Full Stack avec couverture de tests complète : tests unitaires (JUnit), tests E2E (Cypress) et tests frontend (Jest).',
      image: 'assets/images/projet5.png',
      tags: ['Java/Spring', 'Angular', 'Full Stack'],
      technologies: ['JUnit', 'Cypress', 'Jest', 'Java', 'Angular'],
      link: 'https://github.com/AhmaduLo/projet5Backdev'
    },
    {
      title: 'Projet 3 : Interface Angular',
      category: 'Frontend',
      description: 'Développement d\'une interface utilisateur moderne avec Angular, composants réutilisables, routing et state management.',
      image: 'assets/images/project-angular.jpg',
      tags: ['Angular'],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
      link: 'https://github.com/AhmaduLo/projet3FrontEnd'
    },
    {
      title: 'Site Vitrine E-commerce',
      category: 'Site Vitrine E-commerce',
      type: "Projet personnel",
      description: 'Site vitrine e-commerce développé en Angular pour présenter une boutique en ligne moderne. Interface responsive avec présentation de produits, navigation fluide et design épuré."',
      image: 'assets/images/sitrVitrine.png',
      tags: ['Angular'],
      technologies: ["Angular",
        "TypeScript",
        "HTML5",
        "CSS3",
        "RxJS",
        "Angular Router",
        "Netlify"],
      link: 'https://bambagaye-shop.netlify.app/'
    },
    {
      title: 'Eyes Following Cursor',
      category: 'Animation Interactive',
      type: "Projet personnel",
      description: 'Animation interactive en JavaScript pur où des yeux suivent le mouvement du curseur en temps réel. Démonstration de manipulation du DOM, calcul de coordonnées et animations fluides."',
      image: 'assets/images/eyes.png',
      tags: ['Angular'],
      technologies: ["JavaScript Vanilla",
        "HTML5",
        "CSS3",
        "DOM API",
        "Event Listeners"],
      link: 'https://musing-engelbart-0965b4.netlify.app/'
    },
    {
      title: 'Under Armour Clone',
      category: 'Intégration Web',
      type: "Projet personnel",
      description: "Reproduction fidèle de la page d'accueil Under Armour pour perfectionner mes compétences en HTML/CSS. Focus sur le responsive design, les layouts complexes et les animations CSS avancées.",
      image: 'assets/images/underArmour.png',
      tags: ['Angular'],
      technologies: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "CSS Grid",
        "Responsive Design",
        "CSS Animations"
      ],
      link: 'https://determined-wescoff-a1ad3d.netlify.app/'
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
