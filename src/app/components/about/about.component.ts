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
              <img src="assets/images/profile.jpg" alt="Ahmadou Bamba Gaye" />
            </div>
          </div>
          <div class="about-text">
            <h2 class="section-title">À propos de moi</h2>
            <p class="about-description">
              Je suis un développeur web passionné spécialisé dans la création d'interfaces modernes et responsives. 
              Fort d'une expertise approfondie en Angular, JavaScript et WordPress, je développe des solutions 
              web innovantes qui allient performance et expérience utilisateur exceptionnelle. 
              Adepte des méthodes agiles, je m'engage à livrer des projets de qualité qui répondent 
              aux besoins spécifiques de mes clients.
            </p>
            
            <div class="skills-progress">
              <div class="skill" *ngFor="let skill of skills">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" [style.width.%]="skill.level"></div>
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
    { name: 'HTML/CSS/Bootstrap', level: 90 },
    { name: 'JavaScript/Angular', level: 85 },
    { name: 'MySQL/WordPress', level: 80 },
    { name: 'Scrum', level: 75 }
  ];
}
