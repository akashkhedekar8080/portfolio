export interface Project {
  title: string;
  description: string;
  githubLink?: string;
  livelink?: string;
  image: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  title: string;
  skills: Array<{ name: string; icon: string }>;
}
export interface SocialLink {
  url: string;
  icon: string;
  label: string;
}
