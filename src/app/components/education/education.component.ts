import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SafePipe],
  template: `
    <section id="formations" class="education section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Formations & Diplômes</h2>
          <p class="section-subtitle">
            Mon parcours académique et mes certifications professionnelles dans le développement logiciel.
          </p>
        </div>

        <div class="education-grid">
          <div class="education-card" *ngFor="let edu of educations" [attr.data-status]="edu.statusColor">
            <div class="status-badge" [attr.data-color]="edu.statusColor">
              <span class="status-icon">{{ edu.statusIcon }}</span>
              <span class="status-text">{{ edu.status }}</span>
            </div>
            <div class="education-icon-header">{{ edu.icon }}</div>
            <h3 class="education-title">{{ edu.title }}</h3>
            <h4 class="education-institution">{{ edu.institution }}</h4>
            <p class="education-level">{{ edu.level }}</p>
            <div class="education-period">{{ edu.period }}</div>
            <p class="education-description">{{ edu.description }}</p>
            <div class="education-technologies" *ngIf="edu.technologies && edu.technologies.length > 0">
              <span class="tech-badge" *ngFor="let tech of edu.technologies">{{ tech }}</span>
            </div>
            <button class="diploma-btn" (click)="openDiplomaModal(edu)">
              📄 Voir le diplôme
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal pour afficher le PDF -->
    <div class="diploma-modal" *ngIf="selectedDiploma" (click)="closeDiplomaModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="modal-close" (click)="closeDiplomaModal()">✕</button>
        <h3 class="modal-title">{{ selectedDiploma.title }}</h3>
        <div class="pdf-container">
          <iframe [src]="selectedDiploma.diplomaUrl | safe" type="application/pdf"></iframe>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations = [
    {
      icon: '🎓',
      period: '2025-2026',
      title: 'Master Développeur Full Stack Java/Angular',
      institution: 'OpenClassrooms',
      level: 'Niveau 7 (Bac+5)',
      status: 'En cours',
      statusIcon: '🎓',
      statusColor: 'orange',
      description: 'Formation approfondie en développement Full Stack avec spécialisation Java/Spring Boot et Angular. Projets incluant CI/CD, tests automatisés, architecture microservices et gestion de projet Agile.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Docker', 'Jenkins', 'CI/CD', 'JUnit', 'Jest', 'Cypress'],
      diplomaUrl: 'assets/diplomas/master-fullstack.pdf'
    },
    {
      icon: '💻',
      period: '2022-2024',
      title: 'Développeur d\'Application - JavaScript React',
      institution: 'OpenClassrooms',
      level: 'Niveau 6 (Bac+3/4)',
      status: 'Obtenu',
      statusIcon: '✅',
      statusColor: 'green',
      description: 'Formation spécialisée en développement frontend avec React.js. Maîtrise des composants, hooks, routing, state management et tests automatisés.',
      technologies: ['JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Jest', 'Cypress'],
      diplomaUrl: 'assets/diplomas/niveau6.pdf'
    },
    {
      icon: '🌐',
      period: '2021-2022',
      title: 'Développeur Web et Web Mobile',
      institution: 'Simplon',
      level: 'Titre Professionnel Niveau 5 (Bac+2)',
      status: 'Obtenu',
      statusIcon: '✅',
      statusColor: 'green',
      description: 'Formation intensive au développement web Full Stack avec Java/Angular, incluant un projet fil rouge complet de type réseau social.',
      technologies: ['Java', 'Angular', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
      diplomaUrl: 'assets/diplomas/certificat_dev.pdf'
    }
  ];

  selectedDiploma: any = null;

  openDiplomaModal(education: any) {
    this.selectedDiploma = education;
  }

  closeDiplomaModal() {
    this.selectedDiploma = null;
  }
}
