import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  icon: string;
}

export interface Experience {
  id: string;
  role?: string;
  company: string;
  period: string;
  description: string;
  type: "education" | "internship";
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "technical" | "soft";
  level: number;
}