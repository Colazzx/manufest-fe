import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  webdev,
  file02,
  homeSmile,
  instagram,
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
  searchMd,
  sliders04,
  telegram,
  twitter,
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
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Our Clients",
    url: "#our-clients",
  },
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
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

export const pricing = [
  {
    id: "0",
    title: "Automated Resource Planning",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Interactive System",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Microservice Scalability",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
