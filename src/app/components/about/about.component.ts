import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./about.component.scss'],
  template: `
    <section id="apropos" class="about section-padding">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <div class="profile-image">
              <img
                src="assets/images/profile2.jpg"
                alt="AHMADU BAMBA GAYE LO"
              />
            </div>
          </div>
          <div class="about-text">
            <h2 class="section-title">À propos de moi</h2>
            <p class="about-description">
              Développeur Full Stack Java / Angular, je conçois et maintiens des
              applications web robustes en combinant rigueur technique et sens
              du détail. Mon parcours m’a permis d’acquérir une solide
              expérience chez BNP Paribas, où j’ai participé au développement et
              à la maintenance d’applications internes, tout en suivant une
              formation approfondie chez OpenClassrooms. Je maîtrise l’ensemble
              de la stack frontend (Angular) et backend (Java / Spring Boot),
              ainsi que les outils d’intégration continue comme Jenkins et
              Docker. Curieux et impliqué, je recherche constamment à améliorer
              la qualité du code, l’automatisation des tests et la collaboration
              en équipe dans un environnement Agile.
            </p>

            <div class="additional-info">
              <p>
                <strong>🌍 Langues:</strong> Wolof (Maternel), Français
                (Maternel), Anglais (B1)
              </p>
              <p><strong>📷Nationalité:</strong> Espagnol</p>
              <p><strong>📍 Localisation:</strong> France / Union Européenne</p>
              <p><strong>✅ Disponibilité:</strong> Immédiate</p>
            </div>
            <br />
            <div class="skills-progress">
              <div class="skill" *ngFor="let skill of skills">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    [style.width.%]="skill.level"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  skills = [
    { name: 'Java/Spring Boot', level: 85 },
    { name: 'Angular/React', level: 85 },
    { name: 'CI/CD (Jenkins, Docker)', level: 80 },
    { name: 'Tests (JUnit, Cypress, Jest)', level: 80 },
    { name: 'MySQL/PostgreSQL', level: 85 },
    { name: 'Agile/Scrum', level: 85 },
  ];
}
