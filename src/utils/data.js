import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { HiPlay } from "react-icons/hi";

export const linksData = [
  { id: 1, icon: <GoHome />, linkName: "Home", linkTo: "/" },
  { id: 2, icon: <BiCameraMovie />, linkName: "Movies", selected: "selected" },
  { id: 3, icon: <MdOndemandVideo />, linkName: "TV Series" },
  { id: 4, icon: <SlCalender />, linkName: "Upcoming" },
];
