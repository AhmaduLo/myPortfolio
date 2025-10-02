import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-top">
            <div class="footer-logo">
              <span class="logo-text">ABG DEVELOPPEUR</span>
            </div>
            <div class="footer-social">
              <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="copyright">
              © 2025 Ahmadou Bamba Gaye - Tous les droits Réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
