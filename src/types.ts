export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  thumbnail: string;
  images: string[];
  problem: string;
  process: string;
  outcome: string;
  tools: string[];
}

export interface Service {
  title: string;
  description: string;
  outcome: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}
