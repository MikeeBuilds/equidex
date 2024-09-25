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
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
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
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
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