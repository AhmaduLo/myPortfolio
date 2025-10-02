import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="app">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-testimonials></app-testimonials>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahmadou-portfolio';
}
