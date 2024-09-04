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
  Building,
  ShieldCheck,
} from "lucide-react";

const sidebarRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Building,
    label: "Organisation",
    href: "/",
  },
  {
    icon: Users,
    label: "Users",
    href: "/users",
  },
  {
    icon: ShieldCheck,
    label: "Roles & Access",
    href: "/roles",
  },

  {
    icon: School,
    label: "Universities",
    href: "/universities",
  },
  // {
  //   icon: Compass,
  //   label: "Browse",
  //   href: "/search",
  // },
  // {
  //   icon: Folders,
  //   label: "Courses",
  //   href: "/courses",
  // },
  // {
  //   icon: SquareUser,
  //   label: "Interns",
  //   href: "/interns",
  // },

  // {
  //   icon: Settings,
  //   label: "Settings",
  //   href: "/settings",
  // },

  // {
  //   icon: MessagesSquare,
  //   label: "Messages",
  //   href: "/messages",
  // },

  // {
  //   icon: BanknoteIcon,
  //   label: "Audit Trail",
  //   href: "/audit-trail",
  // },

  {
    icon: LogOut,
    label: "Logout",
    href: "/",
  },
];

export { sidebarRoutes };
