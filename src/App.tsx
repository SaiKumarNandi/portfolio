import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationTimeline from "./components/EducationTimeline";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const experienceItems = [
  {
    title: ".Net Developer",
    organization: "BNY Mellon",
    date: "August 2023 - Present",
    description:
      "At BNY Mellon, I contributed to internal financial applications by developing user interfaces, integrating services, and optimizing workflows. I focused on improving system performance, ensuring secure data handling, and supporting efficient deployments through containerization.",
    icon: "/icons/BNY Mellon.svg",
  },
  {
    title: "Software Developer",
    organization: "TCS",
    date: "May 2019 - July 2022",
    description:
      "At the National Stock Exchange of India, I played a key role in developing a real-time commodity trading platform that enhanced transaction speed, system performance, and reliability. I automated critical workflows, optimized backend efficiency, and designed intuitive dashboards to simplify complex trading operations.",
    icon: "/icons/TCS.svg",
  },
];

const educationItems = [
  {
    title: "Master of Science in Computer Science",
    organization: "University Of Central Missouri, Warrensburg",
    date: "2022 - 2023",
    description: "Specializing in Software Engineering and Web Technologies.",
    icon: "/UCM Logo.png",
  },
  {
    title: "Bachelor of Technology in Electrical And Electronics Engineering",
    organization: "CVR College Of Engineering",
    date: "2016 - 2020",
    description: "",
    icon: "/cvr.png",
  },
];

function App() {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Analytics />
      <Header />
      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline items={experienceItems} />
      <EducationTimeline items={educationItems} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
