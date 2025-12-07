import { Project, Experience, Skill } from './types';
import { 
  Code, Cpu, Cloud, Database, Lock, Smartphone, 
  Terminal, Globe, Zap, Server, Shield, Leaf, Radio
} from 'lucide-react';

export const SOCIALS = {
  email: "lokeshgopinathk@proton.me",
  linkedin: "https://linkedin.com/in/lokesh-gopinath-k",
  github: "https://github.com/Lokesh-Gopinath",
  location: "Salem, Tamil Nadu"
};

export const PROJECTS: Project[] = [
  {
    id: "p6",
    title: "Sudoku Solver",
    description: "A fast and efficient Sudoku solver built in Rust using recursive backtracking. It solves standard 9x9 grids while enforcing all Sudoku rules, showcasing Rust’s strengths in safety and speed.",
    tech: ["Rust", "Backtracking", "Algorithms"],
    icon: "grid",
    link: "https://github.com/Lokesh-Gopinath/Sudoku-Solver"
  },
  {
    id: "p5",
    title: "Vigenère Cipher Tool",
    description: "Lightweight web tool for text encryption/decryption using the Vigenère Cipher algorithm.",
    tech: ["Web", "Cryptography", "Security"],
    icon: "lock",
    link: "https://github.com/Lokesh-Gopinath/Vigenere-Cipher"
  },
  {
    id: "p2",
    title: "WeatherNet",
    description: "Microcontroller-based weather station integrated with Firebase. Real-time monitoring via custom app/website.",
    tech: ["Microcontroller", "Firebase", "Android", "Sensors"],
    icon: "cloud-sun",
    link: "https://github.com/Lokesh-Gopinath/WeatherNet"
  },
  {
    id: "p4",
    title: "Simple Convertor",
    description: "Android application for seamless Binary / Decimal / Octal / Hex conversions built with Kotlin.",
    tech: ["Kotlin", "Android", "Algorithms"],
    icon: "smartphone",
    link: "https://github.com/Lokesh-Gopinath/Simple-Convertor"
  },
  {
    id: "p1",
    title: "Liquid Pump System",
    description: "IoT solution using ESP32 & Blynk. Reduced water usage by 20% through smart remote monitoring and control.",
    tech: ["Node-RED", "ESP32", "IoT", "C++"],
    icon: "droplet",
    link: "https://github.com/Lokesh-Gopinath/Liquid-pump-system"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "e1",
    company: "Panimalar Engineering College",
    role: "B.E Electronics & Communication",
    period: "2021 - 2025",
    description: "CGPA: 7.85. Focused on Embedded Systems and Automation.",
    type: "education"
  },
  {
    id: "e2",
    company: "Siemens (TANSAM)",
    role: "IIoT Intern",
    period: "Internship",
    description: "Developed an IIoT solution using MindSphere. Ranked in Top 3 projects.",
    type: "internship"
  },
  {
    id: "e3",
    company: "Pantech E-Learning",
    role: "Robotics Intern",
    period: "1 Month",
    description: "Designed & programmed basic robots. Hands-on robotics implementation.",
    type: "internship"
  },
  {
    id: "e4",
    company: "Sri Vidya Mandir Mat. Hr. Sec. School",
    role: "Higher Secondary",
    period: "2021",
    description: "Percentage: 76.78%",
    type: "education"
  }
];

export const SKILLS: Skill[] = [
  { name: "Node-RED", icon: <Server size={20} />, category: "technical", level: 90 },
  { name: "MindSphere", icon: <Cloud size={20} />, category: "technical", level: 85 },
  { name: "Embedded Systems", icon: <Cpu size={20} />, category: "technical", level: 88 },
  { name: "WireGuard", icon: <Radio size={20} />, category: "technical", level: 80 },
  { name: "AWS", icon: <Cloud size={20} />, category: "technical", level: 75 },
  { name: "Arduino", icon: <Cpu size={20} />, category: "technical", level: 95 },
  { name: "Java", icon: <Code size={20} />, category: "technical", level: 80 },
  { name: "Spring Boot", icon: <Leaf size={20} />, category: "technical", level: 75 },
  { name: "Rust", icon: <Shield size={20} />, category: "technical", level: 70 },
  { name: "C++", icon: <Terminal size={20} />, category: "technical", level: 85 },
  { name: "MySQL", icon: <Database size={20} />, category: "technical", level: 82 },
  { name: "MongoDB", icon: <Database size={20} />, category: "technical", level: 80 },
  { name: "IoT", icon: <Globe size={20} />, category: "technical", level: 92 },
];