export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'cloud' | 'ai' | 'tools';
  proficiency: number;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  published: boolean;
}