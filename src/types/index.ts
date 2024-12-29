export interface TeamMemberType {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  modelUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}