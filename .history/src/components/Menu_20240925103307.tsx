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
        visible: ["admin", "founder", "builder", "cofounder"],
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
        visible: ["admin", "founder"],
      },
      {
        icon: "/parent.png",
        label: "Co-Founders",
        href: "/list/cofounder",
        visible: ["admin", "founder"],
      },
      {
        icon: "/subject.png",
        label: "Projects",
        href: "/list/projects",
        visible: ["admin", "founder", "builder", "cofounder"],
      },
      {
        icon: "/class.png",
        label: "Tasks",
        href: "/list/tasks",
        visible: ["admin", "founder", "builder", "cofounder"],
      },
      {
        icon: "/lesson.png",
        label: "Milestones",
        href: "/list/milestones",
        visible: ["admin", "founder", "cofounder"],
      },
      {
        icon: "/exam.png",
        label: "Equity allocation",
        href: "/list/equity-allocation",
        visible: ["admin", "founder"],
      },
      {
        icon: "/assignment.png",
        label: "Performance",
        href: "/list/performance",
        visible: ["admin", "founder", "cofounder"],
      },
      {
        icon: "/result.png",
        label: "Engagement",
        href: "/list/engagement",
        visible: ["admin", "founder", "builder", "cofounder"],
      },
      {
        icon: "/attendance.png",
        label: "Contributions",
        href: "/list/contributions",
        visible: ["admin", "founder", "builder", "cofounder"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "founder", "builder", "cofounder"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "founder", "builder", "cofounder"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "founder", "builder", "cofounder"],
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
        visible: ["admin", "founder", "builder", "cofounder"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "founder", "builder", "cofounder"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "founder", "builder", "cofounder"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className=" mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => ()}
        </div>
      ))}
    </div>
  );
};

export default Menu;
