import {
  MdOutlineDashboard,
  MdLogin,
  MdOutlineForum,
  MdOutlineSettings,
} from "react-icons/all";

const data2 = [
  {
    id: 1,
    title: "Connexion",
    path: "/connexion/login",
    icon: <MdLogin />,
  },
  {
    id: 2,
    title: "Dashboard",
    path: "/home/dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    id: 3,
    title: "Forum",
    path: "/home/forum",
    icon: <MdOutlineForum />,
  },
  {
    id: 4,
    title: "Mon compte",
    path: "/home/compte",
    icon: <MdOutlineSettings />,
  },
];

export default data2;
