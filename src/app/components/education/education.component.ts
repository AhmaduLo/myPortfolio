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
            <ul class="education-highlights" *ngIf="edu.highlights">
              <li *ngFor="let highlight of edu.highlights">{{ highlight }}</li>
            </ul>
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
      period: '2025 - 2026 (En cours)',
      title: 'Master Développeur Full Stack Java/Angular',
      institution: 'OpenClassrooms',
      level: 'Niveau 7 (Bac+5)',
      status: 'En cours',
      statusIcon: '🎓',
      statusColor: 'orange',
      description: 'Formation avancée en développement Full Stack avec spécialisation Java/Spring Boot et Angular, incluant CI/CD et méthodologies Agile.',
      highlights: [
        'Architecture d\'applications Full Stack complexes',
        'Maîtrise approfondie de Java/Spring Boot et Angular',
        'DevOps : CI/CD avec Jenkins et GitHub Actions',
        'Tests automatisés et qualité de code',
        'Gestion de projets en méthodologie Agile',
        'Sécurité des applications web'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'Docker', 'Jenkins', 'SonarCloud', 'MySQL', 'PostgreSQL'],
      diplomaUrl: 'assets/diplomas/master-fullstack.pdf'
    },
    {
      icon: '💻',
      period: '2022 - 2024',
      title: 'Développeur d\'Application JavaScript React',
      institution: 'OpenClassrooms',
      level: 'Niveau 6 (Bac+3/4)',
      status: 'Obtenu',
      statusIcon: '✅',
      statusColor: 'green',
      description: 'Formation intensive au développement d\'applications avec JavaScript et React, avec mise en pratique lors de l\'alternance chez BNP Paribas.',
      highlights: [
        'Développement d\'applications React modernes',
        'Tests unitaires et E2E',
        'State management avancé',
        'API REST et intégration backend',
        'Alternance de 2 ans chez BNP Paribas'
      ],
      technologies: ['JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Jest', 'Cypress'],
      diplomaUrl: 'assets/diplomas/niveau6.pdf'
    },
    {
      icon: '🌐',
      period: '2021 - 2022',
      title: 'Développeur Web et Web Mobile',
      institution: 'Simplon',
      level: 'Titre Professionnel Niveau 5 (Bac+2) - Obtenu',
      status: 'Obtenu',
      statusIcon: '✅',
      statusColor: 'green',
      description: 'Formation intensive au développement web Full Stack avec Java/Angular, incluant un projet fil rouge complet.',
      highlights: [
        'Développement de l\'application Shambles (type Instagram)',
        'Maîtrise de Java et Angular',
        'Spring Boot pour la création d\'API REST',
        'Base de données relationnelles',
        'Méthodologies Agile',
        'Obtention du Titre Professionnel'
      ],
      technologies: ['Java', 'Angular', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
      diplomaUrl: 'assets/diplomas/certificat_dev.pdf'
    },
    {
      icon: '📋',
      period: 'Délivré le 12/04/2022',
      title: 'Certificat de Compétences - Gérer un Projet en Mobilisant les Méthodes Agiles',
      institution: 'Simplon.co',
      level: 'Certificat de Compétences - Validité Permanente',
      status: 'Obtenu',
      statusIcon: '✅',
      statusColor: 'green',
      description: 'Certification professionnelle en gestion de projet Agile, validant les compétences en méthodologies Scrum, Kanban et gestion d\'équipe.',
      highlights: [
        'Maîtrise des méthodes Agile (Scrum, Kanban)',
        'Planification et suivi de sprints',
        'Animation de cérémonies Agile',
        'Gestion de backlog produit',
        'Collaboration en équipe',
        'Certification à validité permanente'
      ],
      technologies: ['Scrum', 'Kanban', 'Jira', 'Trello', 'Agile'],
      diplomaUrl: 'assets/diplomas/agile.pdf'
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
