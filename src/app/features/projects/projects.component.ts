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
        "Developed 'App on Top' feature enabling secure application overlay above browser window, maintaining exam monitoring integrity",
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
      title: "TaskNova",
      description:
        "An enterprise-grade task management platform built with Angular 18 and Django REST Framework. Features JWT authentication, role-based access control, and real-time collaboration tools for teams.",
      achievements: [
        "Architected full-stack enterprise system with Angular 18 frontend and Django REST Framework backend implementing JWT authentication and role-based access control.",
        "Developed modular Angular architecture with TypeScript, RxJS, and Angular Material, featuring lazy-loaded modules and reactive forms.",
        "Reduced page load times by 35% through optimized HTTP interceptors and state management patterns.",
      ],
      image: "/assets/tasknova.jpg",
      technologies: [
        "Angular 20",
        "Django",
        "Django REST Framework",
        "TypeScript",
        "RxJS",
        "Angular Material",
        "JWT Authentication",
        "Python",
        "SQLite",
      ],
      githubLink: "https://github.com/akashkhedekar8080/tasknova",
    },
    {
      title: "Inkwell",
      description:
        "A full-featured Django blogging platform with user authentication, CRUD operations, threaded comments, and email notifications. Built with Bootstrap for responsive design.",
      achievements: [
        "Built comprehensive blogging platform with Django 5+ featuring user authentication, post management, and admin controls.",
        "Implemented threaded comment system with email notifications for post create, update, and delete operations.",
        "Designed responsive UI with Bootstrap 5, including pagination, modals, and form validation for enhanced user experience.",
      ],
      image: "/assets/inkwell.jpg",
      technologies: [
        "Django",
        "Python",
        "Bootstrap 5",
        "SQLite",
        "HTML",
        "CSS",
        "Email Integration",
        "User Authentication",
      ],
      githubLink: "https://github.com/akashkhedekar8080/Inkwell",
    },
    {
      title: "YouTube Blog Platform",
      description:
        "A dynamic full-stack blogging platform built with Node.js and Express, featuring MongoDB integration, file uploads, and comprehensive content management system.",
      achievements: [
        "Developed full-stack Node.js and Express blogging platform with MongoDB, implementing authentication, file uploads, and CRUD operations for dynamic content management.",
        "Designed responsive UI using EJS templates and Bootstrap, ensuring seamless cross-device user experience.",
        "Enabled users to create, edit, and delete blog posts with real-time content updates and optimized database queries.",
      ],
      image: "/assets/youtube-blog.jpg",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS Templates",
        "Bootstrap",
        "File Upload",
        "User Authentication",
        "CRUD Operations",
      ],
      githubLink: "https://github.com/akashkhedekar8080/youtube-blog",
    },
    {
      title: "Meetarise",
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
        "REST API Integration",
        "HTML",
        "SCSS",
        "Angular Material",
      ],
      githubLink: "https://github.com/akashkhedekar8080/student-entry",
    },
    {
      title: "Angular 19 NgRx Signals Task Manager",
      description:
        "A modern Angular 19 application demonstrating advanced state management with NgRx Signals Store. Features real-time CRUD operations, reactive charts, and signal-based architecture.",
      achievements: [
        "Built cutting-edge Angular 19 app with NgRx Signals Store for simplified state management, eliminating traditional actions/reducers boilerplate.",
        "Implemented reactive charts using computed signals for real-time task distribution and trend visualization that auto-update with store changes.",
        "Architected modular signal store with methods, effects, computed properties, and state management for optimal performance and maintainability.",
      ],
      image: "/assets/ngrx-signals-task.jpg",
      technologies: [
        "Angular 19",
        "NgRx Signals Store",
        "TypeScript",
        "Computed Signals",
        "Chart.js",
        "Reactive Forms",
        "Signal Effects",
        "Angular Material",
      ],
      githubLink: "https://github.com/akashkhedekar8080/task-signal-store",
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
