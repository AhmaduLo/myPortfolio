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
      icon: '📄',
      name: 'HTML & CSS',
      description: 'Maîtrise avancée des langages de balisage et de style, création d\'interfaces modernes et responsives avec les dernières normes web.'
    },
    {
      icon: '⚡',
      name: 'JavaScript',
      description: 'Développement d\'applications interactives et dynamiques, expertise en ES6+ et programmation orientée objet moderne.'
    },
    {
      icon: '⚙️',
      name: 'WordPress',
      description: 'Création de sites web sur mesure, développement de thèmes personnalisés et optimisation pour les performances et le SEO.'
    },
    {
      icon: '🔄',
      name: 'Scrum',
      description: 'Application des méthodes agiles pour la gestion de projets, collaboration efficace en équipe et livraison continue de valeur.'
    }
  ];
}
