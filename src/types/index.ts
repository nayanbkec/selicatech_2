// Product Types
export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  categoryId: string;
  dosage: string;
  releaseDate: string;
}

// News Types
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content?: string;
  image: string;
  date: string;
  category: string;
  author?: string;
}

// Team Member Types
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter: string;
  email: string;
}

// Career Types
export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements?: string[];
  postedDate: string;
}

// Research Types
export interface ResearchProject {
  id: number;
  title: string;
  description: string;
  phase: string;
  tags: string[];
  leadResearcher?: string;
  startDate?: string;
}