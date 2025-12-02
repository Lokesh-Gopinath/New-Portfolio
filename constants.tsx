import { TimelineItem, Skill, Project, Achievement, SocialLink } from './types';
import { 
  GraduationCap, School, BookOpen, 
  Cpu, Code, Cloud, Database, 
  Terminal, Shield, Wifi, Battery, 
  Trophy, Medal, Award,
  Github, Linkedin, Mail, Layers,
  Droplets, Sprout, Brain, Clock, RefreshCw, Users, Zap, Rocket, Briefcase, Smartphone
} from 'lucide-react';

export const EDUCATION: TimelineItem[] = [
  {
    id: 1,
    title: "Panimalar Engineering College",
    subtitle: "B.E Electronics & Communication Engineering",
    year: "2021-2025",
    description: "CGPA: 7.85 | Graduated: 2025"
  },
  {
    id: 2,
    title: "Sri Vidya Mandir Mat. Hr. Sec. School",
    subtitle: "Higher Secondary Education (STATEBOARD)",
    year: "2021",
    description: "Percentage: 76.78%"
  },
  {
    id: 3,
    title: "Sri Vidya Mandir Mat. Hr. Sec. School",
    subtitle: "Secondary Education (STATEBOARD)",
    year: "2019",
    description: "Percentage: 67.8%"
  }
];

export const INTERNSHIPS: TimelineItem[] = [
  {
    id: 1,
    title: "SIEMENS (TANSAM)",
    subtitle: "IIoT Solution Developer",
    year: "2024", 
    description: "Developed an IIoT solution using MindSphere, ranked in top 3 projects.",
    icon: "siemens"
  },
  {
    id: 2,
    title: "PANTECH E-LEARNING",
    subtitle: "Robotics Intern",
    year: "2023",
    description: "1 Month Internship on Robotics, designed & programmed a basic robot.",
    icon: "robot"
  }
];

export const SKILLS: Skill[] = [
  // Technical
  { name: "Node-RED", icon: "Layers", category: "technical", color: "#8f0000" },
  { name: "MindSphere", icon: "Cloud", category: "technical", color: "#009999" },
  { name: "Java", icon: "Code", category: "technical", color: "#f89820" },
  { name: "Rust", icon: "Terminal", category: "technical", color: "#dea584" },
  { name: "C++", icon: "Terminal", category: "technical", color: "#00599C" },
  { name: "Embedded Systems", icon: "Cpu", category: "technical", color: "#2E7D32" },
  // Soft
  { name: "Logical Thinking", icon: "Brain", category: "soft" },
  { name: "Time Management", icon: "Clock", category: "soft" },
  { name: "Adaptability", icon: "RefreshCw", category: "soft" },
  { name: "Collaborative", icon: "Users", category: "soft" },
  { name: "Work Ethic", icon: "Briefcase", category: "soft" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Remote Controlled Liquid Pump",
    description: "Energy-efficient liquid pump controlled via Node-MCU and monitored through Blynk IoT.",
    tech: ["Node-MCU", "Blynk IoT", "C++"],
    link: "#",
    icon: "Droplets",
    modelType: "sphere"
  },
  {
    id: 2,
    title: "WeatherNet",
    description: "Microcontroller-based weather monitoring system with Firebase integration and custom app.",
    tech: ["Microcontroller", "Firebase", "App/Web"],
    link: "#",
    icon: "Cloud",
    modelType: "octahedron"
  },
  {
    id: 3,
    title: "Agriculture Automation",
    description: "Water-efficient greenhouse automation system using Node-MCU for remote monitoring.",
    tech: ["Node-MCU", "IoT", "Sensors"],
    link: "#",
    icon: "Sprout",
    modelType: "cube"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 1, title: "Best Internship Project (Top 3)", icon: "Trophy" },
  { id: 2, title: "NASSCOM (Data-Science Beginner)", icon: "Award" },
  { id: 3, title: "Energy Literacy Trainee (Energy Swaraj Foundation)", icon: "Zap" },
];

export const HOBBIES = [
  { name: "Programming", icon: "Code" },
  { name: "Designing circuits", icon: "Cpu" },
  { name: "Learning about space", icon: "Rocket" }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Lokesh-Gopinath", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/lokesh-gopinath-k", icon: "Linkedin" },
  { platform: "Email", url: "mailto:lokeshgopinath75@gmail.com", icon: "Mail" },
];
