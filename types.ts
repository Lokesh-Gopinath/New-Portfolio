export interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  description?: string;
  icon?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'technical' | 'soft';
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  icon: string;
  modelType: 'cube' | 'sphere' | 'torus' | 'octahedron';
}

export interface Achievement {
  id: number;
  title: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}