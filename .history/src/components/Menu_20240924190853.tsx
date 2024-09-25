import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/teacher.png",
        label: "Founders",
        href: "/list/founders",
        visible: ["admin", "founder"],
      },
      {
        icon: "/student.png",
        label: "Builders",
        href: "/list/builders",
        visible: ["admin", "founder", "teamLead"],
      },
      {
        icon: "/parent.png",
        label: "Team Leads",
        href: "/list/team-leads",
        visible: ["admin", "founder"],
      },
      {
        icon: "/subject.png",
        label: "Projects",
        href: "/list/projects",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/class.png",
        label: "Tasks",
        href: "/list/tasks",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/lesson.png",
        label: "Milestones",
        href: "/list/milestones",
        visible: ["admin", "founder", "teamLead"],
      },
      {
        icon: "/exam.png",
        label: "Progress",
        href: "/list/progress",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "founder", "teamLead"],
      },
      {
        icon: "/attendance.png",
        label: "Activity",
        href: "/list/activity",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "founder", "teamLead", "builder"],
      },
    ],
  },
];


const Menu = () => {
  return (
    <div className=" mt-4 text-sm">
      {menuItems.map(i=> (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map(item => (
            <Link className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 hover:text-black" href={item.href} key={item.label}>
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu;