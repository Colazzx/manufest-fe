import {
  chromecast,
  disc02,
  facebook,
  webdev,
  file02,
  homeSmile,
  instagram,
  WhatsApp,
  email,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  snapbiz,
  mbti,
  singapore,
  sydney,
  kbc,
  costOptimization,
  smartShiftScheduling,
  timeAttendanceTracking,
  timeCalculation,
  eoq,
  searchMd,
  sliders04,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  {
    id: "2",
    title: "Our Clients",
    url: "#projects",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contact-us",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Branded web experiences",
  "Custom web applications",
  "Responsive design",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const client = [
  {
    id: "0",
    title: "Automated Audit Processes",
    text: "Empowered an accounting firm in Jakarta by automating data extraction from bank statements, saving time and improving accuracy through AI.",
    date: "November 2024",
    status: "done",
    imageUrl: snapbiz,
    colorful: true,
  },
  {
    id: "1",
    title: "MBTI and Enneagram Test Appn",
    text: "We developed a customized psychological test application featuring both MBTI and Enneagram assessments for a psychologist from Rumah Konseling LK3 Bandung.",
    date: "May 2024",
    status: "done",
    imageUrl: mbti,
    rounded: true,
  },
  {
    id: "2",
    title: "Singapore Government Owned Factory",
    text: "Delivered AI-driven manufacturing and procurement planning for a government-owned company in Singapore, streamlining operations across its factories maximizing profit.",
    date: "February 2024",
    status: "done",
    imageUrl: singapore,
    rounded: true,
  },
  {
    id: "3",
    title: "Sydney Airport Australia",
    text: "Revolutionizing human resource planning for airport lanes in Sydney Airport, achieving a service level exceeding 98%.",
    date: "June 2024",
    status: "done",
    imageUrl: sydney,
    rounded: true,
  },
  {
    id: "4",
    title: "Website as a Marketing Analytics",
    text: "For KBC, a growing business community, we built a custom website integrated with analytics to track user behavior and evaluate marketing performance. This empowers them to make data-driven decisions and improve campaign effectiveness.",
    date: "May 2025",
    status: "progress",
    imageUrl: kbc,
    rounded: true,
  },
];

export const collabText =
  "Modern, responsive websites and apps built to elevate your brand—powered by analytics for smarter decisions";

export const collabContentText1 =
  "Understand how users arrive, engage, and navigate your site";

export const collabContentText2 =
  "Measure performance across email, social media, and ad campaigns";

export const collabContentText3 =
  "Identify what drives actions like purchases or inquiries";

export const collabContent = [
  {
    id: "0",
    title: "Visitor Behavior Tracking",
    text: collabContentText1,
  },
  {
    id: "1",
    title: "Marketing Campaign Analysis",
    text: collabContentText2,
  },
  {
    id: "2",
    title: "Conversion Tracking",
    text: collabContentText3,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Website and Application Development",
    icon: webdev,
    width: 2000,
    height: 2000,
  },
];

export const keyFeatures = [
  {
    id: "0",
    title: "Automated Resource Planning",
    description: "AI-driven chatbot with tailored production insights",
    features: [
      "Generates daily MRP schedules to optimize resource allocation",
      "Ensures timely procurement and availability of materials, reducing downtime",
      "Evaluates bottleneck resources—like manpower and machine capacity—to achieve the desired service level",
    ],
    slideUp: true,
  },
  {
    id: "1",
    title: "Interactive System",
    description: "Advanced SmartBot, real-time analytics, priority support",
    features: [
      "Interact with the system to explore action recommendations",
      "Reduces excess inventory and associated holding costs",
      "AI-driven analysis reduces excess inventory and holding costs, increasing profitability",
    ],
    slideUp: false,
  },
  {
    id: "2",
    title: "Microservice Scalability",
    description: "Custom AI solutions, scalable analytics, dedicated support",
    features: [
      "Adapts to businesses of all sizes, from small enterprises to large-scale manufacturers",
      "Easily integrates with existing ERP systems for seamless operations",
      "Its microservice architecture enables rapid deployment, easy updates, and minimal downtime",
    ],
    slideUp: true,
  },
];

export const shiftScheduling = [
  {
    id: "0",
    title: "Cost Optimization",
    description:
      "Analyze labor costs across different scheduling scenarios to identify cost reduction opportunities by optimizing staffing levels based on workload, while adhering to budget constraints for maximum cost-effectiveness.",
    imageUrl: costOptimization,
  },
  {
    id: "1",
    title: "Smart Shift Scheduling",
    description:
      "Automatically generate optimized shift schedules by factoring in minimum and maximum work hours, legally mandated break times, and employee skillsets or qualifications for specific tasks.",
    imageUrl: smartShiftScheduling,
  },
  {
    id: "2",
    title: "Time & Attendance Tracking",
    description:
      "Track worker location and attendance via mobile GPS, monitor adherence to scheduled shifts and breaks, and generate reports for payroll processing and labor cost analysis.",
    imageUrl: timeAttendanceTracking,
  },
];

export const inventoryManagement = [
  {
    id: "0",
    title: "Reorder Time Calculation",
    description:
      "Automatically calculates the ideal reorder time using current inventory levels, lead times, and historical demand, while sending timely alerts to prevent stockouts and production delays.",
    imageUrl: timeCalculation,
  },
  {
    id: "1",
    title: "Economic Order Quantity (EOQ)",
    description:
      "Uses the EOQ model to minimize inventory costs by optimizing order size, while dynamically adjusting EOQ and safety stock based on shifting demand and cost patterns.",
    imageUrl: eoq,
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/manufest.id?igsh=ejJoN2VvdjNja2k=",
  },
  {
    id: "1",
    title: "WhatsApp",
    iconUrl: WhatsApp,
    url: "https://wa.me/6281993840791",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/share/1FRKvbwEW7/",
  },
  {
    id: "3",
    title: "Email",
    iconUrl: email,
    url: "mailto:hello@manufest.id",
  },
];
