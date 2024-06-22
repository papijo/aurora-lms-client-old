import {
  BarChart,
  Compass,
  Layout,
  List,
  Folders,
  Users,
  Settings,
  MessagesSquare,
  BanknoteIcon,
  LogOut,
  SquareUser,
  School,
} from "lucide-react";

const sidebarRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  // {
  //   icon: Compass,
  //   label: "Browse",
  //   href: "/search",
  // },
  {
    icon: Folders,
    label: "Courses",
    href: "/courses",
  },
  {
    icon: Users,
    label: "Users",
    href: "/users",
  },
  {
    icon: SquareUser,
    label: "Interns",
    href: "/interns",
  },

  {
    icon: School,
    label: "Universities",
    href: "/universities",
  },

  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },

  {
    icon: MessagesSquare,
    label: "Messages",
    href: "/messages",
  },

  {
    icon: BanknoteIcon,
    label: "Audit Trail",
    href: "/audit-trail",
  },

  {
    icon: LogOut,
    label: "Logout",
    href: "/",
  },
];

export { sidebarRoutes };
