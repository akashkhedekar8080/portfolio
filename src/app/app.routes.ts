import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () =>
      import("./features/hero/hero.component").then((c) => c.HeroComponent),
  },
  {
    path: "projects",
    loadComponent: () =>
      import("./features/projects/projects.component").then(
        (c) => c.ProjectsComponent
      ),
  },
  {
    path: "skills",
    loadComponent: () =>
      import("./features/skills/skills.component").then(
        (c) => c.SkillsComponent
      ),
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./features/contact/contact.component").then(
        (c) => c.ContactComponent
      ),
  },
];
