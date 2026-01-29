export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate";
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "⚡",
    skills: [
      { name: "TypeScript", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "Go", level: "advanced" },
      { name: "PHP", level: "advanced" },
      { name: "Java", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "C#", level: "intermediate" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "🚀",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "Vue.js", level: "advanced" },
      { name: "Nuxt.js", level: "advanced" },
      { name: "Flutter", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "🔧",
    skills: [
      { name: "NestJS", level: "expert" },
      { name: "Hono", level: "advanced" },
      { name: "Laravel", level: "advanced" },
      { name: "Gin", level: "advanced" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "☁️",
    skills: [
      { name: "AWS", level: "expert" },
      { name: "Docker", level: "advanced" },
      { name: "GitHub Actions", level: "advanced" },
      { name: "Kafka", level: "intermediate" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MySQL", level: "advanced" },
      { name: "DynamoDB", level: "advanced" },
      { name: "Firestore", level: "intermediate" },
    ],
  },
];
