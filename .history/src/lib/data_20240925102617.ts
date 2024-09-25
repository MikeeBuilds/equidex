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
  // ... Add more builders as needed
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
  // ... Add more projects as needed
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
  // ... Add more matches as needed
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
  // ... Add more skills as needed
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
  // ... Add more events as needed
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
  // ... Add more announcements as needed
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
  // ... Add more relevant events
];