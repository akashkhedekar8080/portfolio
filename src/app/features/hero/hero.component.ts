import { Component, effect, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent {
  private router = inject(Router);
  isVisible = signal(false);

  constructor() {
    // Use effect for handling visibility
    effect(() => {
      setTimeout(() => {
        this.isVisible.set(true);
      }, 100);
    });
  }

  redirectTo() {
    this.router.navigate(["/contact"]);
  }
}
