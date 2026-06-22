import gan from "@/assets/service-gan.jpg";
import sic from "@/assets/service-sic.jpg";
import rf from "@/assets/service-rf.jpg";

export const SITE = {
  name: "TEKSYS",
  tagline: "Innovate · Train · Transform",
  description:
    "Semiconductor, Defence & Advanced Technology Solutions — GaN/SiC consulting, fabless MMIC design, and a semiconductor skill training academy.",
  phone: "+91 86004 18168",
  phoneHref: "tel:+918600418168",
  email: "admin@teksys-services.com",
  locations: ["India", "Singapore", "USA"],
  legalName: "Teksys Services Pvt. Ltd.",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/training", label: "Training Academy" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const SERVICES = [
  {
    slug: "gan",
    title: "GaN Technology Consulting",
    icon: "Cpu",
    image: gan,
    summary:
      "End-to-end Gallium Nitride consulting — device physics, RF power amplifier design, qualification and tech transfer for defence, telecom and power applications.",
    bullets: [
      "GaN HEMT device & process consulting",
      "RF / radar power amplifier architecture",
      "Reliability, qualification & tech transfer",
    ],
  },
  {
    slug: "sic",
    title: "SiC Power Electronics",
    icon: "Zap",
    image: sic,
    summary:
      "Silicon Carbide solutions for EV, renewable and high-voltage industrial systems — from device selection to packaged power module design.",
    bullets: [
      "SiC MOSFET / diode application engineering",
      "EV traction inverter & on-board charger design",
      "Thermal & power module packaging",
    ],
  },
  {
    slug: "mmic",
    title: "Fabless MMIC Design & Development",
    icon: "Layers",
    image: rf,
    summary:
      "Full fabless flow for GaN/GaAs MMICs — from specification and schematic to layout, foundry tape-out and on-wafer characterization.",
    bullets: [
      "RF / microwave PA, LNA and switch design",
      "Layout, DRC/LVS and foundry tape-out",
      "On-wafer measurement & model extraction",
    ],
  },
  {
    slug: "training",
    title: "Semiconductor Skill Training",
    icon: "GraduationCap",
    image: gan,
    summary:
      "Industry-led semiconductor workforce development on GaN, SiC, RF, sensors, materials and advanced systems — delivered globally with TechDataX certification.",
    bullets: [
      "8 specialised programs across the value chain",
      "Hands-on labs, projects and mentorship",
      "Global certification & placement assistance",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering & Technology Services",
    icon: "Wrench",
    image: rf,
    summary:
      "Technology computing, device simulation, characterization and engineering support for industry, academia, startups and government programs.",
    bullets: [
      "TCAD / device simulation & modelling",
      "Test, measurement & characterization",
      "Defence & strategic electronics programs",
    ],
  },
  {
    slug: "osat",
    title: "OSAT Lab & Process Lab Partnerships",
    icon: "Microscope",
    image: sic,
    summary:
      "Access to OSAT, packaging and process labs through our partner ecosystem — for prototyping, qualification and small-volume builds.",
    bullets: [
      "Wafer-level & advanced packaging access",
      "Reliability and qualification labs",
      "Pilot-line & low-volume fabrication",
    ],
  },
];

export type Course = {
  slug: string;
  number: string;
  title: string;
  overview: string;
  outcomes: string[];
  curriculum: string[];
  prerequisites: string;
  keyLearningAreas: string[];
};

export const COURSES: Course[] = [
  {
    slug: "semiconductor-foundation",
    number: "01",
    title: "Semiconductor Foundation",
    overview:
      "Build a strong understanding of semiconductor materials, devices, fabrication processes, testing and industry fundamentals.",
    outcomes: [
      "Explain semiconductor device physics confidently",
      "Navigate wafer fab and cleanroom process flows",
      "Understand test, measurement and reliability basics",
      "Map career paths across the semiconductor industry",
    ],
    curriculum: [
      "Semiconductor materials & device physics",
      "Wafer fabrication & cleanroom processes",
      "Testing, measurement & reliability",
      "Semiconductor industry & career opportunities",
    ],
    prerequisites: "Basic electronics or physics background. Suitable for students and early-career engineers.",
    keyLearningAreas: [
      "Semiconductor Materials & Device Physics",
      "Wafer Fabrication & Cleanroom Processes",
      "Testing, Measurement & Reliability",
      "Semiconductor Industry & Career Opportunities",
    ],
  },
  {
    slug: "gan-technology",
    number: "02",
    title: "GaN Technology",
    overview:
      "Learn Gallium Nitride device technology for next-generation RF, radar, telecom, defence and power electronics applications.",
    outcomes: [
      "Understand GaN HEMT operation and limits",
      "Design RF power amplifiers and radar front-ends",
      "Apply GaN devices in power conversion",
      "Assess fabrication, characterization & reliability",
    ],
    curriculum: [
      "GaN HEMT device fundamentals",
      "RF power amplifiers & radar systems",
      "GaN power electronics applications",
      "Device fabrication, characterization & reliability",
    ],
    prerequisites: "Working knowledge of electronic devices and basic RF/power concepts.",
    keyLearningAreas: [
      "GaN HEMT Device Fundamentals",
      "RF Power Amplifiers & Radar Systems",
      "GaN Power Electronics Applications",
      "Device Fabrication, Characterization & Reliability",
    ],
  },
  {
    slug: "sic-technology",
    number: "03",
    title: "SiC Technology",
    overview:
      "Master Silicon Carbide materials, devices and power systems used in EVs, renewable energy and high-voltage applications.",
    outcomes: [
      "Specify SiC devices for high-voltage systems",
      "Design EV, solar and industrial power stages",
      "Address packaging and thermal trade-offs",
      "Evaluate SiC reliability & qualification data",
    ],
    curriculum: [
      "SiC materials & wafer technology",
      "SiC power devices & device physics",
      "EV, solar & industrial power systems",
      "Packaging, thermal management & reliability",
    ],
    prerequisites: "Familiarity with power electronics and semiconductor basics.",
    keyLearningAreas: [
      "SiC Materials & Wafer Technology",
      "SiC Power Devices & Device Physics",
      "EV, Solar & Industrial Power Systems",
      "Packaging, Thermal Management & Reliability",
    ],
  },
  {
    slug: "rf-microwave",
    number: "04",
    title: "RF & Microwave Technology",
    overview:
      "Explore RF circuits, antennas, power amplifiers, radar systems and wireless communication technologies.",
    outcomes: [
      "Apply RF/microwave engineering fundamentals",
      "Perform antenna design and RF measurements",
      "Architect radar and communication links",
      "Design GaN-based RF power amplifiers",
    ],
    curriculum: [
      "RF & microwave engineering fundamentals",
      "Antenna design & RF measurements",
      "Radar & communication systems",
      "GaN RF power amplifier design",
    ],
    prerequisites: "Undergraduate electromagnetics and circuits.",
    keyLearningAreas: [
      "RF & Microwave Engineering Fundamentals",
      "Antenna Design & RF Measurements",
      "Radar & Communication Systems",
      "GaN RF Power Amplifier Design",
    ],
  },
  {
    slug: "sensors-iot",
    number: "05",
    title: "Sensors & IoT Technology",
    overview:
      "Develop expertise in semiconductor sensors, MEMS, IoT systems, industrial monitoring and smart applications.",
    outcomes: [
      "Select and interface semiconductor sensors",
      "Architect IoT-based sensing systems",
      "Apply signal conditioning & data acquisition",
      "Build solutions for industry and agriculture",
    ],
    curriculum: [
      "Semiconductor & MEMS sensors",
      "IoT-based sensor system design",
      "Signal conditioning & data acquisition",
      "Industrial, environmental & smart agriculture applications",
    ],
    prerequisites: "Basic electronics and any one of C / Python.",
    keyLearningAreas: [
      "Semiconductor & MEMS Sensors",
      "IoT-Based Sensor System Design",
      "Signal Conditioning & Data Acquisition",
      "Industrial, Environmental & Smart Agriculture Applications",
    ],
  },
  {
    slug: "power-electronics",
    number: "06",
    title: "Power Electronics",
    overview:
      "Understand modern power conversion systems using Silicon, GaN and SiC technologies for energy-efficient applications.",
    outcomes: [
      "Compare Si, GaN and SiC power devices",
      "Design DC-DC converters and inverters",
      "Build EV chargers and renewable systems",
      "Plan thermal and packaging strategy",
    ],
    curriculum: [
      "Power semiconductor devices",
      "DC-DC converters & inverters",
      "EV chargers & renewable energy systems",
      "Thermal management & power module packaging",
    ],
    prerequisites: "Power electronics or analog circuits exposure.",
    keyLearningAreas: [
      "Power Semiconductor Devices",
      "DC-DC Converters & Inverters",
      "EV Chargers & Renewable Energy Systems",
      "Thermal Management & Power Module Packaging",
    ],
  },
  {
    slug: "materials-process",
    number: "07",
    title: "Materials Science & Process Technology",
    overview:
      "Study semiconductor materials, thin films, fabrication processes, characterization techniques and emerging electronic materials.",
    outcomes: [
      "Understand crystal growth & wafer flows",
      "Apply thin-film and lithography processes",
      "Use materials characterization techniques",
      "Track emerging semiconductor materials",
    ],
    curriculum: [
      "Crystal growth & wafer technology",
      "Thin film deposition & lithography",
      "Materials characterization techniques",
      "Advanced semiconductor materials",
    ],
    prerequisites: "Undergraduate physics / materials / electronics.",
    keyLearningAreas: [
      "Crystal Growth & Wafer Technology",
      "Thin Film Deposition & Lithography",
      "Materials Characterization Techniques",
      "Advanced Semiconductor Materials",
    ],
  },
  {
    slug: "advanced-systems",
    number: "08",
    title: "Advanced Semiconductor Systems",
    overview:
      "Gain system-level knowledge covering packaging, testing, reliability, RF systems, power systems and semiconductor product development.",
    outcomes: [
      "Architect semiconductor systems end-to-end",
      "Apply packaging, assembly & validation flows",
      "Use reliability & qualification standards",
      "Plan products in the semiconductor ecosystem",
    ],
    curriculum: [
      "Semiconductor system architecture",
      "Packaging, assembly & validation",
      "Reliability & qualification standards",
      "Product development & semiconductor business ecosystem",
    ],
    prerequisites: "Working engineers or final-year students in ECE/EEE.",
    keyLearningAreas: [
      "Semiconductor System Architecture",
      "Packaging, Assembly & Validation",
      "Reliability & Qualification Standards",
      "Product Development & Semiconductor Business Ecosystem",
    ],
  },
];

export const HIGHLIGHT_PILLARS = [
  "Semiconductor Fundamentals",
  "GaN & SiC Technologies",
  "Device Simulation",
  "RF & GaN Applications",
  "SiC / GaN Power Electronics",
  "Fabless Design Flow",
  "Mini Project & Presentation",
  "Fabless GaN MMIC",
  "GaN Technology Partner",
  "OSAT Lab and Process Lab",
];