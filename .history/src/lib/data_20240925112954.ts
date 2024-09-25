// TEMPORARY DATA

export let role = "admin";

export const foundersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@startup.com",
    photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Product Management", "Marketing"],
    project: "AI-driven EdTech Platform",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@techventure.com",
    photo: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["UX Design", "Frontend Development"],
    project: "Sustainable Fashion Marketplace",
  },
  {
    id: 3,
    name: "Alex Chen",
    email: "alex@innovatetech.com",
    photo: "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Data Science", "Machine Learning"],
    project: "Predictive Analytics for Healthcare",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@greenstart.com",
    photo: "https://images.pexels.com/photos/3769023/pexels-photo-3769023.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Environmental Science", "Business Development"],
    project: "Sustainable Energy Solutions",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david@finnovate.com",
    photo: "https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Financial Technology", "Blockchain"],
    project: "Decentralized Finance Platform",
  }
];

export const buildersData = [
  {
    id: 1,
    name: "Mike Johnson",
    email: "mike@devpro.com",
    photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Full-stack Development", "DevOps"],
    availability: "Part-time",
  },
  {
    id: 2,
    name: "Sarah Lee",
    email: "sarah@designstudio.com",
    photo: "https://images.pexels.com/photos/3769022/pexels-photo-3769022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["UI Design", "Branding"],
    availability: "Full-time",
  },
  {
    id: 3,
    name: "Alex Rodriguez",
    email: "alex@techsolutions.com",
    photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Backend Development", "Cloud Architecture"],
    availability: "Full-time",
  },
  {
    id: 4,
    name: "Emily Chen",
    email: "emily@datainsights.com",
    photo: "https://images.pexels.com/photos/3769024/pexels-photo-3769024.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Data Science", "Machine Learning"],
    availability: "Contract",
  },
  {
    id: 5,
    name: "David Park",
    email: "david@mobiledev.com",
    photo: "https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Mobile Development", "UX Design"],
    availability: "Part-time",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    email: "sophia@airesearch.com",
    photo: "https://images.pexels.com/photos/3769025/pexels-photo-3769025.jpeg?auto=compress&cs=tinysrgb&w=1200",
    skills: ["Artificial Intelligence", "Natural Language Processing"],
    availability: "Full-time",
  }
];

export const projectsData = [
  {
    id: 1,
    name: "EcoTrack",
    description: "A mobile app for tracking personal carbon footprint",
    founder: "John Doe",
    skills_needed: ["Mobile Development", "Data Analysis"],
    equity_offered: "5-10%",
  },
  {
    id: 2,
    name: "MindfulAI",
    description: "AI-powered mental health chatbot",
    founder: "Jane Smith",
    skills_needed: ["Machine Learning", "Psychology", "Backend Development"],
    equity_offered: "7-12%",
  },
  {
    id: 3,
    name: "HealthHub",
    description: "A platform connecting patients with healthcare providers for telemedicine",
    founder: "Emily Chen",
    skills_needed: ["Full-stack Development", "Healthcare IT", "UI/UX Design"],
    equity_offered: "8-15%",
  },
  {
    id: 4,
    name: "EduTech",
    description: "An AI-powered personalized learning platform for K-12 students",
    founder: "David Park",
    skills_needed: ["Machine Learning", "Education Technology", "Frontend Development"],
    equity_offered: "6-11%",
  },
  {
    id: 5,
    name: "GreenEnergy",
    description: "IoT solution for optimizing energy consumption in smart homes",
    founder: "Sophia Martinez",
    skills_needed: ["IoT Development", "Data Analysis", "Mobile Development"],
    equity_offered: "9-14%",
  },
  {
    id: 6,
    name: "CryptoSafe",
    description: "Blockchain-based secure digital identity management system",
    founder: "Alex Rodriguez",
    skills_needed: ["Blockchain Development", "Cybersecurity", "Backend Development"],
    equity_offered: "10-18%",
  }
];

export const matchesData = [
  {
    id: 1,
    founder: "John Doe",
    builder: "Mike Johnson",
    project: "EcoTrack",
    status: "Pending",
  },
  {
    id: 2,
    founder: "Jane Smith",
    builder: "Sarah Lee",
    project: "MindfulAI",
    status: "Accepted",
  },
  {
    id: 3,
    founder: "Emily Chen",
    builder: "Tom Wilson",
    project: "HealthHub",
    status: "Pending",
  },
  {
    id: 4,
    founder: "David Park",
    builder: "Lisa Brown",
    project: "EduTech",
    status: "Accepted",
  },
  {
    id: 5,
    founder: "Sophia Martinez",
    builder: "Chris Taylor",
    project: "GreenEnergy",
    status: "Rejected",
  },
  {
    id: 6,
    founder: "Alex Rodriguez",
    builder: "Emma Davis",
    project: "CryptoSafe",
    status: "Pending",
  },
];

export const skillsData = [
  "Full-stack Development",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "UI/UX Design",
  "Product Management",
  "Data Science",
  "Machine Learning",
  "DevOps",
  "Marketing",
  "Content Writing",
  "Digital Marketing",
  "SEO Optimization",
  "Blockchain Development",
  "Cloud Computing",
  "Cybersecurity",
  "Data Analytics",
  "Artificial Intelligence",
  "Internet of Things (IoT)",
  "Augmented Reality (AR)",
  "Virtual Reality (VR)",
  "3D Modeling",
  "Game Development",
  "Project Management",
  "Business Development",
  "Financial Analysis",
  "Legal Expertise",
  "Human Resources",
  "Customer Service",
  "Sales",
];

export const eventsData = [
  {
    id: 1,
    title: "Startup Pitch Night",
    date: "2023-10-15",
    startTime: "18:00",
    endTime: "21:00",
    description: "Founders pitch their ideas to potential builders and investors",
  },
  {
    id: 2,
    title: "Tech Meetup: AI in Startups",
    date: "2023-10-20",
    startTime: "19:00",
    endTime: "22:00",
    description: "Discussing the latest AI trends and applications in startups",
  },
  {
    id: 3,
    title: "Blockchain Workshop",
    date: "2023-10-25",
    startTime: "14:00",
    endTime: "17:00",
    description: "Hands-on workshop on implementing blockchain in startups",
  },
  {
    id: 4,
    title: "Funding Strategies Panel",
    date: "2023-11-05",
    startTime: "10:00",
    endTime: "12:00",
    description: "Expert panel discussing various funding strategies for early-stage startups",
  },
  {
    id: 5,
    title: "Product Launch Masterclass",
    date: "2023-11-15",
    startTime: "09:00",
    endTime: "13:00",
    description: "Learn effective strategies for launching your startup's product",
  },
  {
    id: 6,
    title: "Equity Allocation Workshop",
    date: "2023-11-22",
    startTime: "15:00",
    endTime: "18:00",
    description: "Interactive session on fair equity allocation for founders and early employees",
  },
  {
    id: 7,
    title: "Startup Legal Clinic",
    date: "2023-12-01",
    startTime: "11:00",
    endTime: "14:00",
    description: "Free legal advice for startups on common issues like incorporation and contracts",
  },
];

export const announcementsData = [
  {
    id: 1,
    title: "New Feature: AI Matching Algorithm",
    date: "2023-09-15",
    content: "We've launched a new AI-powered matching algorithm to help founders find the perfect collaborators for their projects.",
  },
  {
    id: 2,
    title: "Upcoming Webinar: Equity Structuring for Startups",
    date: "2023-09-10",
    content: "Join us on Sept 20th for a webinar on structuring sweat equity agreements. Learn best practices from experienced founders and legal experts.",
  },
  {
    id: 3,
    title: "Success Story: TechNova Startup",
    date: "2023-09-05",
    content: "TechNova, formed through our platform, just secured $2M in seed funding! Read about how they built their team and product using sweat equity.",
  },
  {
    id: 4,
    title: "Platform Update: Enhanced Project Management Tools",
    date: "2023-08-28",
    content: "We've rolled out new project management features to help teams track progress and manage tasks more efficiently.",
  },
  {
    id: 5,
    title: "Milestone: 1000+ Startups Launched",
    date: "2023-08-20",
    content: "We're thrilled to announce that over 1000 startups have now been launched through our platform. Congratulations to all our users!",
  },
  {
    id: 6,
    title: "New Partnership: Venture Capital Firm XYZ",
    date: "2023-08-15",
    content: "We've partnered with VC firm XYZ to provide exclusive funding opportunities for startups on our platform. Stay tuned for more details.",
  },
  {
    id: 7,
    title: "Upcoming Feature: Skill-Based Matching",
    date: "2023-08-10",
    content: "Next month, we'll be launching a new feature that matches founders with builders based on specific skill sets and project requirements.",
  },
];

// You can keep the calendarEvents if they're relevant, or modify them to fit startup events
export const calendarEvents = [
  {
    title: "Pitch Practice",
    allDay: false,
    start: new Date(2023, 9, 12, 14, 0),
    end: new Date(2023, 9, 12, 16, 0),
  },
  {
    title: "Networking Mixer",
    allDay: false,
    start: new Date(2023, 9, 15, 18, 0),
    end: new Date(2023, 9, 15, 21, 0),
  },
  {
    title: "Investor Pitch Day",
    allDay: true,
    start: new Date(2023, 9, 20),
    end: new Date(2023, 9, 20),
  },
  {
    title: "Startup Workshop: Legal Basics",
    allDay: false,
    start: new Date(2023, 9, 25, 10, 0),
    end: new Date(2023, 9, 25, 12, 0),
  },
  {
    title: "Tech Meetup",
    allDay: false,
    start: new Date(2023, 10, 5, 18, 30),
    end: new Date(2023, 10, 5, 20, 30),
  },
  {
    title: "Funding Application Deadline",
    allDay: true,
    start: new Date(2023, 10, 15),
    end: new Date(2023, 10, 15),
  },
  {
    title: "Product Launch Webinar",
    allDay: false,
    start: new Date(2023, 10, 22, 14, 0),
    end: new Date(2023, 10, 22, 15, 30),
  },
  {
    title: "Project Meeting",
    allDay: false,
    start: new Date(2023, 10, 25, 10, 0),
    end: new Date(2023, 10, 25, 12, 0),
  }
];