import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="formations" class="education section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Formation & Certifications</h2>
          <p class="section-subtitle">
            Mon parcours académique et mes certifications professionnelles dans le développement logiciel.
          </p>
        </div>

        <div class="education-grid">
          <div class="education-card" *ngFor="let edu of educations">
            <div class="education-header">
              <div class="education-icon">{{ edu.icon }}</div>
              <div class="education-dates">{{ edu.period }}</div>
            </div>
            <h3 class="education-title">{{ edu.title }}</h3>
            <h4 class="education-institution">{{ edu.institution }}</h4>
            <p class="education-level">{{ edu.level }}</p>
            <p class="education-description">{{ edu.description }}</p>
            <ul class="education-highlights" *ngIf="edu.highlights">
              <li *ngFor="let highlight of edu.highlights">{{ highlight }}</li>
            </ul>
            <div class="education-technologies" *ngIf="edu.technologies">
              <span class="tech-badge" *ngFor="let tech of edu.technologies">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      level: 'Niveau 6 (Bac+3/4)',
      description: 'Formation avancée en développement Full Stack avec spécialisation Java/Spring Boot et Angular, incluant CI/CD et méthodologies Agile.',
      highlights: [
        'Architecture d\'applications Full Stack complexes',
        'Maîtrise approfondie de Java/Spring Boot et Angular',
        'DevOps : CI/CD avec Jenkins et GitHub Actions',
        'Tests automatisés et qualité de code',
        'Gestion de projets en méthodologie Agile',
        'Sécurité des applications web'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'Docker', 'Jenkins', 'SonarCloud', 'MySQL', 'PostgreSQL']
    },
    {
      icon: '💻',
      period: '2022 - 2024',
      title: 'Développeur d\'Application JavaScript React',
      institution: 'OpenClassrooms',
      level: 'Niveau 6 (Bac+3/4)',
      description: 'Formation intensive au développement d\'applications avec JavaScript et React, avec mise en pratique lors de l\'alternance chez BNP Paribas.',
      highlights: [
        'Développement d\'applications React modernes',
        'Tests unitaires et E2E',
        'State management avancé',
        'API REST et intégration backend',
        'Alternance de 2 ans chez BNP Paribas'
      ],
      technologies: ['JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Jest', 'Cypress']
    },
    {
      icon: '🌐',
      period: '2021 - 2022',
      title: 'Développeur Web et Web Mobile',
      institution: 'Simplon',
      level: 'Titre Professionnel Niveau 5 (Bac+2) - Obtenu',
      description: 'Formation intensive au développement web Full Stack avec Java/Angular, incluant un projet fil rouge complet.',
      highlights: [
        'Développement de l\'application Shambles (type Instagram)',
        'Maîtrise de Java et Angular',
        'Spring Boot pour la création d\'API REST',
        'Base de données relationnelles',
        'Méthodologies Agile',
        'Obtention du Titre Professionnel'
      ],
      technologies: ['Java', 'Angular', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git']
    },
    {
      icon: '📚',
      period: '2020 - 2021',
      title: 'Formation Développement Web Autodidacte',
      institution: 'Auto-formation',
      level: 'Apprentissage autonome',
      description: 'Apprentissage en autonomie des fondamentaux du développement web via des ressources en ligne.',
      highlights: [
        'MDN Web Docs - Documentation Mozilla',
        'OpenClassrooms - Cours en ligne',
        'Digital Campus Live - Formations',
        'Projets personnels et pratique intensive',
        'Veille technologique constante'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'WordPress']
    },
    {
      icon: '📖',
      period: '2018 - 2019',
      title: 'Baccalauréat Littéraire',
      institution: 'Sénégal',
      level: 'Diplôme obtenu',
      description: 'Formation générale avec spécialisation littéraire.',
      highlights: [],
      technologies: []
    }
  ];
}
