import {
  backend,
  creator,
  web,
  reactjs,
  nodejs,
  docker,
  mainframe,
  aws,
  cobol,
  cpp,
  db2,
  golang,
  java,
  mysql,
  postgresql,
  python,
  springboot,
  getgo,
  justdabao,
  bookgram,
  zoopup,
  wanderful,
  robot,
  nbadb,
  moblima,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: creator,
  },
  {
    title: "Mainframe Developer",
    icon: mainframe,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "COBOL",
    icon: cobol,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "DB2",
    icon: db2,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
];


const experiences = [
  {
    title: "Junior Developer Intern",
    company_name: "GetGo Carsharing",
    icon: getgo,
    iconBg: "#383E56",
    date: "January 2024 - August 2024",
    points: [
      "Created a Mock Service to simulate third-party vendor responses for performance testing and product validation.",
      "Developed a tool to synchronize records between MySQL and OpenSearch, eliminating inconsistencies in the production environment.",
      "Implemented a search service that reduced infrastructure costs by 10%.",
      "Developed an aggregator service to manage common services across microservices, reducing the load on other microservices.",
      "Formulated a feature flag service enabling gradual feature rollouts and simplified bug fixes without redeployment."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "ZoopUp",
    icon: zoopup,
    iconBg: "#E6DEDD",
    date: "August 2023 - December 2023",
    points: [
      "Developed and implemented a training module for the company website.",
      "Contributed to the creation of a client app that increased client satisfaction and retention by 20%.",
      "Collaborated with cross-functional teams to deliver high-quality services."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Just Dabao",
    icon: justdabao,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developed a dynamic marketplace platform, increasing user registrations by 30% and daily active users by 15%.",
      "Optimized product features and user journeys, leading to a 3x scalability potential.",
      "Reduced user complaints by 40% by enhancing the user experience."
    ],
  },
  {
    title: "Co-Founder",
    company_name: "BookGram",
    icon: bookgram,
    iconBg: "#E6DEDD",
    date: "June 2021 - June 2022",
    points: [
      "Co-founded an online marketplace facilitating the exchange of over 2,000 books.",
      "Built a thriving community of 500+ registered users promoting affordable access to literature during the pandemic."
    ],
  },  
];

const testimonials = [
  {
    testimonial:
      "Aryan has made exceptional contributions to the engineering team at GetGo, delivering outstanding work and adding tremendous value to the team through his projects.",
    name: "Malik Badaruddin",
    designation: "CTO",
    company: "GetGo Carsharing",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGhjUylNS7vKw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721789743002?e=1733356800&v=beta&t=R5gPLpOpD_zCfjnIxArVkKygTRQRtKrOndsfvn-sRuY",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Wanderful – A Carpooling Application",
    description:
      "A carpooling web platform that allows drivers to create and manage rides, and passengers to book rides, fostering seamless connections and reducing carbon emissions in Singapore.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: wanderful,
    source_code_link: "https://github.com/AryanSethi20/Backend-wanderer",
  },
  {
    name: "Algorithm Development – Multidisciplinary Design Project",
    description:
      "Developed an autonomous robot that navigates complex mazes using advanced image processing and recognition techniques, implementing A* search, ray casting, and multiprocessing optimizations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "image-processing",
        color: "green-text-gradient",
      },
      {
        name: "robotics",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    source_code_link: "https://github.com/AryanSethi20/MDP-Algorithm",
  },
  {
    name: "Database Design – NBA Games Dataset",
    description:
      "Designed and implemented an optimized database for a large NBA games dataset in C++, utilizing B+ Tree indexing and unspanned storage system for reduced disk I/O and improved performance.",
    tags: [
      {
        name: "cpp",
        color: "blue-text-gradient",
      },
      {
        name: "database-design",
        color: "green-text-gradient",
      },
      {
        name: "b+tree",
        color: "pink-text-gradient",
      },
    ],
    image: nbadb,
    source_code_link: "https://github.com/indicium15/sc3020-project-1",
  },
  {
    name: "Movie Booking and Listing Management Application",
    description:
      "A Java-based application for seamless movie ticket booking and listing management, utilizing OOP principles, ECB architecture, and SOLID design patterns for enhanced user experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "solid",
        color: "pink-text-gradient",
      },
    ],
    image: moblima,  // replace this with the actual image
    source_code_link: "https://github.com/lemousehunter/SC2002-MOBLIMA-Project",
  },  
];

export { services, technologies, experiences, testimonials, projects };
