import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="competences" class="skills section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Compétences</h2>
          <p class="section-subtitle">
            Découvrez mes compétences techniques et méthodologiques développées 
            au fil de mes expériences et projets.
          </p>
        </div>
        
        <div class="skills-grid">
          <div class="skill-card" *ngFor="let skill of skillsData">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3 class="skill-title">{{ skill.name }}</h3>
            <p class="skill-description">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsData = [
    {
      icon: '☕',
      name: 'Java & Spring Boot',
      description: 'Développement d\'applications backend robustes et sécurisées, création d\'API REST, architecture MVC et gestion de bases de données.'
    },
    {
      icon: '🅰️',
      name: 'Angular & React',
      description: 'Création d\'interfaces utilisateur modernes et réactives, maîtrise des composants, routing, state management et optimisation des performances.'
    },
    {
      icon: '⚡',
      name: 'JavaScript/TypeScript',
      description: 'Développement d\'applications interactives et dynamiques, expertise en ES6+ et programmation orientée objet moderne avec TypeScript.'
    },
    {
      icon: '📄',
      name: 'HTML5 & CSS3',
      description: 'Maîtrise avancée des langages de balisage et de style, création d\'interfaces modernes et responsives avec Bootstrap et les dernières normes web.'
    },
    {
      icon: '🔧',
      name: 'CI/CD & DevOps',
      description: 'Mise en place de pipelines Jenkins et GitHub Actions, conteneurisation Docker, analyse de code avec SonarCloud et déploiement automatisé.'
    },
    {
      icon: '✅',
      name: 'Tests & Qualité',
      description: 'Tests unitaires avec JUnit, tests E2E avec Cypress, tests frontend avec Jest, assurance qualité et couverture de code.'
    },
    {
      icon: '🗄️',
      name: 'Bases de données',
      description: 'Conception et gestion de bases de données relationnelles MySQL et PostgreSQL, optimisation des requêtes et modélisation de données.'
    },
    {
      icon: '🔄',
      name: 'Méthodes Agile',
      description: 'Application des méthodologies Scrum et Kanban, utilisation de Jira et Trello, collaboration efficace en équipe et livraison continue.'
    },
    {
      icon: '🎨',
      name: 'Design & Outils',
      description: 'Création de maquettes avec Figma, collaboration avec Slack et Bitbucket, versioning Git et workflow de développement collaboratif.'
    }
  ];
}
