import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experiences" class="experience section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Expériences Professionnelles</h2>
          <p class="section-subtitle">
            Mon parcours professionnel et mes principales expériences dans le développement logiciel.
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of experiences; let i = index" [class.left]="i % 2 === 0" [class.right]="i % 2 !== 0">
            <div class="timeline-content">
              <div class="timeline-date">{{ exp.period }}</div>
              <h3 class="timeline-title">{{ exp.title }}</h3>
              <h4 class="timeline-company">{{ exp.company }} - {{ exp.location }}</h4>
              <p class="timeline-description">{{ exp.description }}</p>
              <ul class="timeline-achievements">
                <li *ngFor="let achievement of exp.achievements">{{ achievement }}</li>
              </ul>
              <div class="timeline-technologies">
                <span class="tech-tag" *ngFor="let tech of exp.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      period: 'Septembre 2022 - Août 2024',
      title: 'Développeur Full Stack',
      company: 'BNP Paribas',
      location: 'Paris, France',
      description: 'Alternance de 2 ans au sein d\'une équipe de développement Agile, travaillant sur des applications critiques pour le secteur bancaire.',
      achievements: [
        'Développement et maintenance d\'applications React performantes',
        'Rédaction de scripts de test automatisés pour assurer la qualité du code',
        'Collaboration en équipe Agile avec daily standups et sprints',
        'Correction de bugs et optimisation des performances applicatives',
        'Participation active aux revues de code et aux rétrospectives'
      ],
      technologies: ['JavaScript', 'React', 'Tests automatisés', 'Agile/Scrum', 'Git']
    },
    {
      period: '2021 - 2022',
      title: 'Développeur Web',
      company: 'Simplon',
      location: 'Formation professionnelle',
      description: 'Formation intensive au développement web avec projet fil rouge de création d\'une application de type réseau social.',
      achievements: [
        'Développement de l\'application Shambles (type Instagram)',
        'Maîtrise de Java et Angular pour le développement Full Stack',
        'Apprentissage de Spring Boot pour la création d\'API REST',
        'Application des méthodologies Agile dans les projets',
        'Obtention du Titre Professionnel Développeur Web et Web Mobile (Niveau 5)'
      ],
      technologies: ['Java', 'Angular', 'Spring Boot', 'MySQL', 'Git', 'Agile']
    },
    {
      period: 'Mai 2021',
      title: 'Développeur de site web',
      company: 'Restaurant 2HA CONCEPT',
      location: 'Gennevilliers, France',
      description: 'Stage de développement d\'un site web vitrine pour un restaurant avec système de réservation en ligne.',
      achievements: [
        'Conception et développement d\'un site web responsive',
        'Intégration d\'un système de réservation en ligne',
        'Optimisation SEO pour améliorer la visibilité',
        'Formation du client à la gestion du site'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress']
    },
    {
      period: '2019',
      title: 'Agent Commercial',
      company: 'Services Financiers',
      location: 'Sénégal',
      description: 'Gestion de services de transfert d\'argent et services bureautiques.',
      achievements: [
        'Gestion des transactions de transfert d\'argent',
        'Services bureautiques et vente de produits',
        'Relation client et conseil personnalisé'
      ],
      technologies: ['Gestion commerciale', 'Service client']
    }
  ];
}
