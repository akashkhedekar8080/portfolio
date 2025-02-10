import { Component } from "@angular/core";
import { Project } from "../../shared/models/interfaces";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "Proctortrack",
      description:
        "An advanced exam proctoring application ensuring accessibility and security. Developed the macOS installer and managed bug resolution.",
      achievements: [
        "End-to-end development of the Proctortrack installer app for macOS.",
        "Resolved critical security and accessibility issues, improving overall stability.",
        "Optimized proctoring performance by implementing robust VGA detection.",
      ],
      image: "/assets/proctortrack.jpg",
      technologies: [
        "Angular",
        "Electron",
        "TypeScript",
        "C++",
        "HTML",
        "SCSS",
        "Angular Material",
        "MacOS Installer",
      ],
    },
    {
      title: "Proctortrack Exam Browser",
      description:
        "A security-focused browser solution designed for online assessments, preventing unauthorized access and monitoring suspicious window-switching behavior.",
      achievements: [
        "Developed 'App on Top' feature, preventing unauthorized applications from overlaying the secure browser.",
        "Implemented a comprehensive window-switching detection system to monitor Ctrl+Tab, Shift+Tab, and window-focus events, ensuring exam integrity.",
        "Reduced security incidents by 75%, enhancing the reliability of online proctoring solutions.",
      ],
      image: "/assets/secure-browser.jpg",
      technologies: [
        "Angular",
        "Electron",
        "TypeScript",
        "C++",
        "HTML",
        "SCSS",
        "Angular Material",
        "Security Monitoring",
      ],
    },
    {
      title: "PT-TA",
      description:
        "An educational application designed to enhance user interactions with supplementary learning materials.",
      achievements: [
        "Designed an interactive UI popup enabling playback of audio, video, and PDF content.",
        "Implemented 'App on Top' to ensure the application remained above the browser.",
        "Streamlined user engagement by improving accessibility and interaction design.",
      ],
      image: "/assets/pt-ta.jpg",
      technologies: [
        "Angular",
        "Electron",
        "TypeScript",
        "Node.js",
        "HTML",
        "SCSS",
        "C++",
        "Angular Material",
      ],
    },
    {
      title: "Proctortrack Installer",
      description:
        "Developed a macOS installer application for Proctortrack, providing a seamless installation experience.",
      achievements: [
        "Designed and implemented a fully functional macOS installer UI.",
        "Ensured compatibility across different macOS versions, reducing installation failures by 30%.",
        "Improved setup efficiency by streamlining the onboarding process.",
      ],
      image: "/assets/proctortrack-installer.jpg",
      technologies: ["Swift"],
    },
    {
      title: "Meetarise (Freelance Project)",
      description:
        "A modern web dashboard built with React and Material UI, featuring advanced state management and real-time data visualization.",
      achievements: [
        "Implemented Redux for efficient state management, optimizing data retrieval by 40%.",
        "Developed authentication with JWT, Google, and Outlook sign-in integration.",
        "Reduced dashboard loading time by 45% using optimized rendering techniques.",
      ],
      image: "/assets/meetarise.jpg",
      technologies: [
        "React",
        "Material UI",
        "Redux",
        "JWT Auth",
        "Google & Outlook Auth",
      ],
    },
    {
      title: "Student Data Management Platform",
      description:
        "A scalable Angular application with real-time data synchronization and advanced filtering capabilities.",
      achievements: [
        "Built a high-performance state management system with NgRx.",
        "Enabled real-time data updates with optimized API calls.",
        "Designed an intuitive UI for enhanced user experience.",
      ],
      image: "/assets/student-data.jpg",
      technologies: [
        "Angular",
        "NgRx",
        "TypeScript",
        "REST API",
        "HTML",
        "SCSS",
        "Angular Material",
      ],
      githubLink: "https://github.com/akashkhedekar8080/student-entry",
    },
    {
      title: "RxJS Operator Explorer",
      description:
        "An interactive platform demonstrating reactive programming patterns with real-time data visualization.",
      achievements: [
        "Developed an interactive UI to visualize complex RxJS data streams.",
        "Implemented real-time operator filtering for an enhanced learning experience.",
        "Optimized performance for handling large-scale reactive data flows.",
      ],
      image: "/assets/rxjs-explorer.jpg",
      technologies: [
        "Angular",
        "RxJS",
        "TypeScript",
        "HTML",
        "SCSS",
        "Angular Material",
      ],
      githubLink: "https://github.com/akashkhedekar8080/rxjs",
    },
  ];
}
