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
      title: "Frontend Development",
      skills: [
        { name: "Angular", icon: "fab fa-angular" },
        { name: "React", icon: "fab fa-react" },
        { name: "TypeScript", icon: "fas fa-code" },
        { name: "JavaScript ES6+", icon: "fab fa-js-square" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3/SCSS", icon: "fab fa-css3-alt" },
        { name: "Tailwind CSS", icon: "fas fa-wind" },
        { name: "Angular Material", icon: "fas fa-palette" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "C++", icon: "fas fa-code" },
        { name: "Python", icon: "fab fa-python" },
      ],
    },
    {
      title: "State Management & Reactive Programming",
      skills: [
        { name: "NgRx", icon: "fas fa-layer-group" },
        { name: "NgRx Signals Store", icon: "fas fa-database" },
        { name: "RxJS", icon: "fas fa-stream" },
        { name: "Redux Toolkit", icon: "fas fa-layer-group" },
        { name: "Computed Signals", icon: "fas fa-bolt" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Django", icon: "fas fa-python" },
        { name: "Django REST Framework", icon: "fas fa-api" },
        { name: "RESTful APIs", icon: "fas fa-exchange-alt" },
        { name: "JWT Authentication", icon: "fas fa-key" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express.js", icon: "fas fa-server" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "SQLite", icon: "fas fa-database" },
        { name: "PostgreSQL", icon: "fas fa-elephant" },
        { name: "MongoDB", icon: "fas fa-leaf" },
      ],
    },
    {
      title: "Cross-Platform & Desktop",
      skills: [
        { name: "Electron", icon: "fas fa-desktop" },
        { name: "C++", icon: "fas fa-code" },
        { name: "Swift", icon: "fab fa-apple" },
        { name: "macOS Development", icon: "fab fa-apple" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", icon: "fab fa-git-alt" },
        { name: "Bitbucket", icon: "fab fa-bitbucket" },
        { name: "Angular CLI", icon: "fas fa-terminal" },
        { name: "NPM", icon: "fab fa-npm" },
        // { name: "Webpack", icon: "fas fa-box" },
        { name: "VS Code", icon: "fas fa-code" },
        { name: "Xcode", icon: "fab fa-apple" },
        { name: "Redux DevTools", icon: "fas fa-bug" },
        { name: "Chrome DevTools", icon: "fab fa-chrome" },
      ],
    },
    {
      title: "Specializations",
      skills: [
        { name: "Performance Optimization", icon: "fas fa-tachometer-alt" },
        { name: "Component Architecture", icon: "fas fa-cubes" },
        { name: "Responsive Design", icon: "fas fa-mobile-alt" },
        { name: "Security Implementation", icon: "fas fa-shield-alt" },
        { name: "Cross-browser Compatibility", icon: "fas fa-globe" },
      ],
    },
  ];

  // skillCategories: Skill[] = [
  //   {
  //     title: "Programming Languages",
  //     skills: [
  //       { name: "HTML5", icon: "fab fa-html5" },
  //       { name: "CSS3", icon: "fab fa-css3-alt" },
  //       { name: "TypeScript", icon: "fas fa-code" },
  //       { name: "JavaScript", icon: "fab fa-js-square" },
  //       { name: "C++", icon: "fas fa-code" },
  //       { name: "Python", icon: "fab fa-python" },
  //       { name: "Node.js", icon: "fab fa-node-js" },
  //     ],
  //   },
  //   {
  //     title: "Frontend Technologies",
  //     skills: [
  //       { name: "Angular", icon: "fab fa-angular" },
  //       { name: "React", icon: "fab fa-react" },
  //       { name: "SCSS/SASS", icon: "fab fa-css3" },
  //       { name: "Tailwind CSS", icon: "fas fa-palette" },
  //       { name: "Bootstrap", icon: "fab fa-bootstrap" },
  //       { name: "Angular Material", icon: "fas fa-layer-group" },
  //       { name: "Material UI", icon: "fas fa-layer-group" },
  //     ],
  //   },
  //   {
  //     title: "Backend & APIs",
  //     skills: [
  //       { name: "Django", icon: "fab fa-python" },
  //       { name: "Django REST Framework", icon: "fas fa-server" },
  //     ],
  //   },
  //   {
  //     title: "State Management",
  //     skills: [
  //       { name: "NgRx", icon: "fas fa-exchange-alt" },
  //       { name: "RxJS", icon: "fas fa-stream" },
  //       { name: "Redux", icon: "fas fa-sync-alt" },
  //       { name: "Context API", icon: "fas fa-brain" },
  //     ],
  //   },
  //   {
  //     title: "Tools & DevOps",
  //     skills: [
  //       { name: "Git", icon: "fab fa-git-alt" },
  //       { name: "GitHub", icon: "fab fa-github" },
  //       { name: "Bitbucket", icon: "fab fa-bitbucket" },
  //       { name: "VS Code", icon: "fas fa-code" },
  //       { name: "Xcode", icon: "fab fa-apple" },
  //     ],
  //   },
  //   {
  //     title: "Specialized Skills",
  //     skills: [
  //       { name: "Electron", icon: "fas fa-desktop" },
  //       { name: "API Integration", icon: "fas fa-plug" },
  //       { name: "Performance Optimization", icon: "fas fa-tachometer-alt" },
  //       { name: "Responsive Design", icon: "fas fa-mobile-alt" },
  //       { name: "Cross-Platform Development", icon: "fas fa-laptop-code" },
  //     ],
  //   },
  // ];
}
