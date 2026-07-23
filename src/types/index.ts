export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'all' | 'fullstack' | 'ai' | 'mobile' | 'frontend';
  image: string;
  tags: string[];
  featured: boolean;
  demoUrl: string;
  githubUrl: string;
  keyFeatures: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    iconName?: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  type: 'work' | 'education';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}
