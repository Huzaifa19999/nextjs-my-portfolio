import { Project, SkillCategory, ExperienceItem, Testimonial, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: "Huzaifa Abdul Qadir",
  role: "Software Engineer",
  avatar: "/profile.jfif",
  tagline: "Building hyper-scale web applications, intuitive interfaces, and AI-driven experiences with sleek animations.",
  bio: "I'm a passionate Software Engineer with experience crafting modern digital products. Specialized in Next.js, React, Node.js, and high-performance WebGL/Framer Motion animations. Dedicated to clean code, pixel-perfect design systems, and seamless user experiences.",
  location: "Karachi, Sindh, Pakistan",
  email: "huzaifaqadir10@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  availableForHire: true,
};

export const STATS: StatItem[] = [
  { label: "Years Experience", value: "1+", subtext: "In Web & Mobile Architecture" },
  { label: "Projects Delivered", value: "5+", subtext: "Enterprise & Startup Grade" },
  { label: "Code Commits", value: "100+", subtext: "Active Open Source Contributor" },
  { label: "Client Satisfaction", value: "99%", subtext: "Based on 30+ Reviews" },
];

export const PROJECTS: Project[] = [
  {
    id: "nexus-ai-workspace",
    title: "NexusAI - Next-Gen Workspace",
    subtitle: "Real-time AI Document & Canvas Collaboration Platform",
    description: "An intelligent workspace combining generative AI text assistance, real-time node-based canvas, and instant team sync.",
    longDescription: "NexusAI reimagines modern team productivity by merging real-time canvas collaboration with contextual LLM support. Powered by Next.js 14 App Router, WebSockets, dynamic Framer Motion nodes, and edge compute serverless functions.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "OpenAI API", "Framer Motion", "WebSockets"],
    featured: true,
    demoUrl: "https://example.com/nexus-ai",
    githubUrl: "https://github.com/example/nexus-ai",
    metrics: "10k+ Monthly Active Users",
    keyFeatures: [
      "Real-time multiplayer canvas with dynamic spring layout physics",
      "Streaming markdown & code generation powered by GPT-4 Vision",
      "End-to-end encrypted document collaboration workspace",
      "Custom dark UI with glassmorphism and ambient glow shaders"
    ]
  },
  {
    id: "crypto-pulse-dashboard",
    title: "ApexPulse - Crypto & Stocks Analytics",
    subtitle: "High-Frequency Real-time Trading & Portfolio Tracker",
    description: "Ultra-fast financial analytics dashboard featuring 60fps interactive charts, order book feeds, and predictive algorithmic alerts.",
    longDescription: "ApexPulse gives traders real-time market data visualization with zero latency. Built using Next.js, Lightweight Charts, WebSockets, and Web Workers for heavy mathematical data aggregation.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "React 19", "Recharts", "Tailwind CSS", "Zustand", "FastAPI"],
    featured: true,
    demoUrl: "https://example.com/apexpulse",
    githubUrl: "https://github.com/example/apexpulse",
    metrics: "Sub-50ms Data Streaming",
    keyFeatures: [
      "Sub-50ms WebSocket orderbook and candlestick rendering",
      "Customizable widget grid with smooth drag-and-drop mechanics",
      "Automated technical indicator alerts & push notifications",
      "Multi-currency wallet tracking with automated tax calculations"
    ]
  },
  {
    id: "horizon-ecommerce-3d",
    title: "Horizon 3D Studio - Immersive E-Commerce",
    subtitle: "3D Product Customizer & Interactive Shopping Experience",
    description: "An innovative storefront enabling customers to interact with 3D product models, customize materials in real-time, and checkout seamlessly.",
    longDescription: "Horizon revolutionizes online retail through Three.js and Framer Motion integration in Next.js. Users can rotate, explode visual layers, change colors dynamically, and inspect products with photo-realistic detail.",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Node.js", "React Three Fiber", "Framer Motion", "Stripe API"],
    featured: true,
    demoUrl: "https://example.com/horizon-3d",
    githubUrl: "https://github.com/example/horizon-3d",
    metrics: "+42% Conversion Rate Boost",
    keyFeatures: [
      "Interactive 3D model customization viewport with PBR materials",
      "Fluid animated page routing and seamless shopping cart transitions",
      "Integrated Stripe dynamic checkout & invoice generation",
      "Full SEO optimization with Server-Side Rendered 3D fallback snapshots"
    ]
  },
  {
    id: "pulse-mobile-health",
    title: "Zenith Flow - Mindful Habit Tracker",
    subtitle: "Cross-Platform Wellness & Productivity App",
    description: "A beautifully animated habit building application focusing on circadian rhythms, focus timers, and micro-journaling.",
    longDescription: "Zenith Flow combines micro-animation design principles with behavioral psychology to help users build sustainable habits. Features dark and light adaptive dynamic themes, offline sync, and soundscapes.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Expo", "TypeScript", "Reanimated 3", "Node.js"],
    featured: false,
    demoUrl: "https://example.com/zenith-flow",
    githubUrl: "https://github.com/example/zenith-flow",
    metrics: "4.9 ★ Rating on App Store",
    keyFeatures: [
      "Smooth 60 FPS gestures using React Native Reanimated",
      "Biometric security authentication (FaceID / Fingerprint)",
      "Local-first SQLite storage with cloud backup integration",
      "Custom audio spatial soundscapes for deep focus sessions"
    ]
  },
  {
    id: "synergy-cloud-monitor",
    title: "SynergyCloud - DevOps & Infrastructure Monitor",
    subtitle: "Kubernetes & Multi-Cloud Observability Suite",
    description: "Enterprise infrastructure monitoring solution providing unified log telemetry, error tracking, and automated rollback workflows.",
    longDescription: "SynergyCloud simplifies cloud operations with real-time topology maps and AI anomaly detection. Features customizable alert rules, role-based access, and webhooks.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Go", "Docker", "Tailwind CSS", "GraphQL", "PostgreSQL"],
    featured: false,
    demoUrl: "https://example.com/synergy-cloud",
    githubUrl: "https://github.com/example/synergy-cloud",
    metrics: "Monitors 5,000+ Active Nodes",
    keyFeatures: [
      "Interactive node graph topology visualization",
      "Real-time log stream filtering with regex support",
      "Automated incident alert notifications via Slack & PagerDuty",
      "Dark mode aesthetic with customizable color themes"
    ]
  },
  {
    id: "neural-synthesizer",
    title: "Aura Audio - AI Music & Voice Synthesizer",
    subtitle: "Browser-based Algorithmic Sound Generation",
    description: "Generative audio workstation leveraging Web Audio API and neural synth models to create ambient soundscapes in real-time.",
    longDescription: "Aura Audio brings generative audio synthesis directly into the browser. Users can tune parameters, visually modulate waveforms with interactive canvas elements, and export lossless audio files.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Web Audio API", "TensorFlow.js", "Canvas API", "Tailwind CSS"],
    featured: false,
    demoUrl: "https://example.com/aura-audio",
    githubUrl: "https://github.com/example/aura-audio",
    metrics: "1M+ Audio Clips Synthesized",
    keyFeatures: [
      "Real-time FFT audio visualizer rendered at 60 FPS",
      "Browser-side neural inference using TensorFlow.js",
      "Multi-track audio export to WAV/MP3 formats",
      "Presets sharing community hub with instant preview"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "Next.js 14 / React 19", level: 96, description: "App Router, Server Components, SSR, Streaming & Edge API" },
      { name: "TypeScript", level: 94, description: "Strict type safety, generics, utility types, clean interfaces" },
      { name: "Tailwind CSS & Styling", level: 98, description: "Custom design systems, responsive layouts, Tailwind v4, CSS Modules" },
      { name: "Framer Motion & Animations", level: 92, description: "Layout animations, scroll triggers, gesture controls, morphing" },
      { name: "Three.js & WebGL", level: 82, description: "React Three Fiber, 3D product viewports, particle shaders" },
    ]
  },
  {
    title: "Backend & Cloud Architecture",
    skills: [
      { name: "Node.js & Express / NestJS", level: 90, description: "RESTful APIs, Microservices, Event-driven architecture" },
      { name: "PostgreSQL & Prisma / Drizzle", level: 88, description: "Database design, indexing, ORMs, dynamic queries" },
      { name: "GraphQL & WebSockets", level: 85, description: "Real-time subscriptions, Apollo, Socket.io" },
      { name: "Redis & Caching", level: 84, description: "In-memory caching, rate limiting, session stores" },
      { name: "AWS & Vercel Serverless", level: 86, description: "Lambda, S3, CloudFront, Edge Network configuration" },
    ]
  },
  {
    title: "AI Integration & Tools",
    skills: [
      { name: "OpenAI & Anthropic APIs", level: 90, description: "Structured outputs, function calling, streaming completions" },
      { name: "Vector Databases (Pinecone/Qdrant)", level: 82, description: "RAG architectures, semantic embeddings, similarity search" },
      { name: "Git & CI/CD Pipelines", level: 92, description: "GitHub Actions, automated testing, deployment workflows" },
      { name: "Figma to Code", level: 95, description: "Pixel-perfect translation, design tokens, responsive component specs" },
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Engineer",
    company: "Technyx Systems",
    period: "2025 - Present",
    location: "Onsite-Karachi, Sindh, Pakistan",
    description: [
      "Designed and implemented interactive, user-friendly web applications using React.js and Next.js in collaboration with cross functional teams",
      "Specialized in building reusable components and optimizing frontend performance to improve scalability and maintainability",
      "Worked with a team to develop cross-platform mobile applications using React Native, ensuring seamless performance across iOS and Android.",
      "Collaborated with designers, backend developers, and QA engineers to deliver high-quality software solutions within deadlines"
    ],
    skills: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS", "React.js", "Node.js","Express.js","React-Native"],
    type: "work"
  },
  {
    id: "exp-2",
    role: "Software Engineer Intern",
    company: "360XpertSolutions",
    period: "2024 - 2025",
    location: "Onsite-Karachi, Sindh, Pakistan",
    description: [
      "Designed and implemented interactive, user-friendly web applications using React.js and Next.js in collaboration with cross functional teams",
      "Specialized in building reusable components and optimizing frontend performance to improve scalability and maintainability",
      "Worked with a team to develop cross-platform mobile applications using React Native, ensuring seamless performance across iOS and Android.",
    ],
    skills: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS", "React.js", "Node.js","Express.js","React-Native"],
    type: "work"
  },
  // {
  //   id: "exp-3",
  //   role: "Full-Stack Web Developer",
  //   company: "Nexus Interactive Agency",
  //   period: "2019 - 2021",
  //   location: "Austin, TX",
  //   description: [
  //     "Developed 20+ bespoke web experiences for high-profile tech clients and startups.",
  //     "Integrated payment processing (Stripe), authentication (OAuth, NextAuth), and headless CMS platforms."
  //   ],
  //   skills: ["React", "Node.js", "PostgreSQL", "Express", "Sass", "REST APIs"],
  //   type: "work"
  // },
  {
    id: "edu-1",
    role: "BS in Software Engineering",
    company: "University of Karachi, Karachi",
    period: "2020 - 2024",
    location: "Karachi, Sindh",
    description: [
      "Graduated with Honors (Magna Cum Laude). Focus on Distributed Systems and Human-Computer Interaction.",
      "President of the Web Development Student Association & Hackathon Lead."
    ],
    skills: ["Algorithms", "Data Structures", "System Design", "RDMBS", "Deep Learning"],
    type: "education"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Abuzar Thanvi",
    role: "Software Engineer",
    company: "Technyx Systems",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    content: "Huzaifa is an extraordinary developer who balances technical depth with a refined eye for design. The animations and responsiveness he delivered on our flagship portal left our board and users thoroughly impressed.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Muhammad Bilal Haneef",
    role: "Founder & CEO",
    company: "Hyperion AI",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    content: "Working with Alex was seamless. He took our rough wireframes and turned them into a lightning-fast, beautifully animated Next.js platform in record time. Highly recommended for any serious web project!",
    rating: 5
  },
  {
    id: "test-3",
    name: "Syed Hasan Raza",
    role: "Head of Engineering",
    company: "Orbit Systems",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    content: "Alex's mastery of Next.js performance and Framer Motion micro-interactions made our application feel alive. He is one of those rare engineers who elevates every project he touches.",
    rating: 5
  }
];
