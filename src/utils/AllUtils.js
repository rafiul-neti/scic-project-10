import Haircut from "../../public/images/haircut.png";
import BeardTrim from "../../public/images/beard-trim.png";
import MansShave from "../../public/images/mans-shave.png";
import HairDyeing from "../../public/images/hair-dyeing.png";
import Mustache from "../../public/images/mustache.png";
import Stacking from "../../public/images/stacking.png";
import Barber1 from "../../public/images/team-1.jpg";
import Barber2 from "../../public/images/team-2.jpg";
import Barber3 from "../../public/images/team-3.jpg";
import Barber4 from "../../public/images/team-4.jpg";
import user1 from "../../public/images/testimonial-1.jpg";
import user2 from "../../public/images/testimonial-2.jpg";
import user3 from "../../public/images/testimonial-3.jpg";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

export const subSections = [
  {
    title: "Since 1990",
    subTitle:
      "Bringing style and confidence for over 30 years. Every cut crafted with care and passion.",
  },
  {
    title: "1000+ clients",
    subTitle:
      "Trusted by thousands of happy clients. We create looks that make everyone feel amazing.",
  },
];

export const services = [
  {
    title: "Haircut",
    description:
      "Precision haircut tailored to your style. Clean fades sharp lines time confidence.",
    image: Haircut,
  },
  {
    title: "Beard Trim",
    description:
      "Expert beard trimming for balanced shape. Smooth edges refined look time.",
    image: BeardTrim,
  },
  {
    title: "Mans Shave",
    description:
      "Classic men shave with hot towels. Relaxing finish smooth skin confidence.",
    image: MansShave,
  },
  {
    title: "Hair Dyeing",
    description:
      "Premium hair coloring using safe products. Rich tones lasting shine finish.",
    image: HairDyeing,
  },
  {
    title: "Mustache",
    description:
      "Detailed mustache grooming for neat shape. Defined style clean bold presence.",
    image: Mustache,
  },
  {
    title: "Stacking",
    description:
      "Modern hair stacking for volume control. Structured layers strong lasting hold.",
    image: Stacking,
  },
];

export const prices = [
  {
    title: "Haircut",
    price: "$39.00",
  },
  {
    title: "Beard Trim",
    price: "$15.00",
  },
  {
    title: "Mans Shave",
    price: "$19.00",
  },
  {
    title: "Hair Dyeing",
    price: "$23.00",
  },
  {
    title: "Mustache",
    price: "$35.00",
  },
  {
    title: "Stacking",
    price: "$29.00",
  },
];

export const barbers = [
  {
    name: "Jake Thompson",
    image: Barber1,
    designation: "Master Barber",
  },
  {
    name: "Sophia Rivera",
    image: Barber2,
    designation: "Stylist",
  },
  {
    name: "Liam Carter",
    image: Barber3,
    designation: "Color Specialist",
  },
  {
    name: "Mia Brooks",
    image: Barber4,
    designation: "Senior Barber",
  },
];

export const workingDays = [
  {
    title: "Monday",
    price: "09 AM - 09 PM",
  },
  {
    title: "Tuesday",
    price: "09 AM - 09 PM",
  },
  {
    title: "Wednesday",
    price: "09 AM - 09 PM",
  },
  {
    title: "Thursday",
    price: "09 AM - 09 PM",
  },
  {
    title: "Friday",
    price: "09 AM - 09 PM",
  },
  {
    title: "Sat/Sun",
    price: "Closed",
  },
];

export const reviews = [
  {
    id: 1,
    userName: "John Doe",
    user_photoURL: user1,
    comment:
      "Professional barbers and relaxing service made my visit perfect. Clean cuts smooth shave and great care throughout. Friendly staff quality tools calm vibe worth every minute spent here again!",
  },
  {
    id: 2,
    userName: "John Cena",
    user_photoURL: user2,
    comment:
      "Great experience from start to finish. Barber listened carefully delivered sharp style and precise beard work. Comfortable chairs clean space and respectful service made this place my choice!",
  },
  {
    id: 3,
    userName: "John Wick",
    user_photoURL: user3,
    comment:
      "I always leave confident and refreshed after visiting this salon. Skilled hands premium products and attention to detail create a consistent result that keeps me coming back every time again.",
  },
  {
    id: 4,
    userName: "John Doe",
    user_photoURL: user1,
    comment:
      "Professional barbers and relaxing service made my visit perfect. Clean cuts smooth shave and great care throughout. Friendly staff quality tools calm vibe worth every minute spent here again!",
  },
  {
    id: 5,
    userName: "John Cena",
    user_photoURL: user2,
    comment:
      "Great experience from start to finish. Barber listened carefully delivered sharp style and precise beard work. Comfortable chairs clean space and respectful service made this place my choice!",
  },
  {
    id: 6,
    userName: "John Wick",
    user_photoURL: user3,
    comment:
      "I always leave confident and refreshed after visiting this salon. Skilled hands premium products and attention to detail create a consistent result that keeps me coming back every time again.",
  },
];

export const iconDetails = [
  {
    icon: FaLocationDot,
    details: "123 Street, Dhaka, Bangladesh",
  },
  {
    icon: FaPhone,
    details: "+012 345 67890",
  },
  {
    icon: FaEnvelope,
    details: "info@cutcraft.com",
  },
];

export const quickFooterLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/",
  },
  {
    name: "Our Services",
    href: "/",
  },
  {
    name: "Contact Us",
    href: "/",
  },
];
