import { Experience, Skill } from './types';
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