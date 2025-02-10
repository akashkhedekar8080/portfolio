import { Component } from "@angular/core";
import { Skill } from "../../shared/models/interfaces";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
  skillCategories: Skill[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "TypeScript", icon: "fab fa-js" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "C++", icon: "fas fa-code" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Node.js", icon: "fab fa-node-js" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "Angular", icon: "fab fa-angular" },
        { name: "React", icon: "fab fa-react" },
        { name: "SCSS/SASS", icon: "fab fa-css3" },
        { name: "Tailwind CSS", icon: "fas fa-palette" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Angular Material", icon: "fas fa-layer-group" },
        { name: "Material UI", icon: "fas fa-layer-group" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Django", icon: "fab fa-python" },
        { name: "Django REST Framework", icon: "fas fa-server" },
      ],
    },
    {
      title: "State Management",
      skills: [
        { name: "NgRx", icon: "fas fa-exchange-alt" },
        { name: "RxJS", icon: "fas fa-stream" },
        { name: "Redux", icon: "fas fa-sync-alt" },
        { name: "Context API", icon: "fas fa-brain" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Bitbucket", icon: "fab fa-bitbucket" },
        { name: "VS Code", icon: "fas fa-code" },
        { name: "Xcode", icon: "fab fa-apple" },
      ],
    },
    {
      title: "Specialized Skills",
      skills: [
        { name: "Electron", icon: "fas fa-desktop" },
        { name: "API Integration", icon: "fas fa-plug" },
        { name: "Performance Optimization", icon: "fas fa-tachometer-alt" },
        { name: "Responsive Design", icon: "fas fa-mobile-alt" },
        { name: "Cross-Platform Development", icon: "fas fa-laptop-code" },
      ],
    },
  ];
}
