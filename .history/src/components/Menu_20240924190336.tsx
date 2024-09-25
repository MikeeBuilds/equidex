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
        visible: ["admin", "founder", "teamLead", "contributor"],
      },
      {
        icon: "/founder.png",
        label: "Founders",
        href: "/list/founders",
        visible: ["admin"],
      },
      {
        icon: "/team.png",
        label: "Teams",
        href: "/list/teams",
        visible: ["admin", "founder", "teamLead"],
      },
      {
        icon: "/cofounder.png",
        label: "Co-Founders",
        href: "/list/cofounders",
        visible: ["admin", "founder"],
      },
      {
        icon: "/project.png",
        label: "Projects",
        href: "/list/projects",
        visible: ["admin", "founder", "teamLead", "contributor"],
      },
      {
        icon: "/task.png",
        label: "Tasks",
        href: "/list/tasks",
        visible: ["admin", "founder", "teamLead", "contributor"],
      },
      {
        icon: "/milestone.png",
        label: "Milestones",
        href: "/list/milestones",
        visible: ["admin", "founder", "teamLead"],
      },
      {
        icon: "/equity.png",
        label: "Equity Allocation",
        href: "/list/equity-allocation",
        visible: ["admin", "founder"],
      },
      {
        icon: "/performance.png",
        label: "Performance Reports",
        href: "/list/performance-reports",
        visible: ["admin", "founder", "teamLead"],
      },
      {
        icon: "/engagement.png",
        label: "Engagement",
        href: "/list/engagement",
        visible: ["admin", "founder", "teamLead", "contributor"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "founder", "teamLead", "contributor"],
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
        visible: ["admin", "founder", "teamLead", "contributor"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "founder", "teamLead", "contributor"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "founder", "teamLead", "contributor"],
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