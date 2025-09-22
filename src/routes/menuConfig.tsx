import {
  FaHospital,
  FaMicroscope,
  FaVials,
  FaMale,
  FaBaby,
  FaChild,
  FaFemale,
  FaTachometerAlt,
  FaTv,
} from "react-icons/fa";
import { GiClothes, GiHighHeel } from "react-icons/gi";
import { MdAcUnit, MdBusiness, MdDashboard, MdPhoneIphone } from "react-icons/md";

export const baseMenuConfig = [
  {
    label: "Dashboard", icon: <MdDashboard  />,
items:[{path: "/",icon:<MdDashboard  />,label:"Dashboard"}] 
  },
  {
    label: "Fashion",
    icon: <GiClothes   />,
    items: [
      {
        label: "Mens",
        path: "",
        icon: <FaMale  />,
      },
      {
        label: "Kids",
        path: "",
        icon: <FaChild  />,
      },
      {
        label: "Womens",
        path: "",
        icon: <FaFemale  />,
      },
      {
        label: "Baby",
        path: "",
        icon: <FaBaby  />,
      },
    ],
  },
  {
    label: "Electronics",
    icon: <FaTv  />,
    items: [
      {
        label: "Mobiles",
        path: "",
        icon: <MdPhoneIphone  />,
      },
      {
        label: "Air Conditioner",
        path: "",
        icon: <MdAcUnit  />,
      },
    ],
  },
];
