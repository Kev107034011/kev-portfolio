export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Employee Burnout Rate Prediction',
    desc: "Exploring how the shift to remote work during the pandemic affects employee Burn Rate, considering both the advantages and challenges of working from home across different conditions.",
    subdesc:
      'Featured Algorithm: #Optuna #Bayesian Optimization #XGBoost #CatBoost #LightGBM #MLP #Stacking #RandomForest',
    href: 'https://github.com/Kev107034011/burnout-rate-prediction/tree/main',
    texture: '/textures/project/grid1_burnout_rate.mp4',
    // logo: '/assets/project-logo1.png',
    // logoStyle: {
    //   backgroundColor: '#2A1816',
    //   border: '0.2px solid #36201D',
    //   boxShadow: '0px 0px 60px 0px #AA3C304D',
    // },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'Optuna',
        path: '/assets/optuna.png',
      },
      {
        id: 3,
        name: 'Tensorflow',
        path: '/assets/tensorflow.svg',
      },
      {
        id: 4,
        name: 'Scikit-Learn',
        path: '/assets/sklearn.png',
      },
    ],
  },
  {
    title: 'Personal Portfolio',
    desc: 'An interactive 3D portfolio to effectively introduce yourself and showcase the programming skills. With the dynamic structure within template code, users can fork this repo and customize their own portfolio.',
    subdesc:
      'Featured Language & Framework: #React.js #Tailwind CSS #JavaScript #Three.js #React Three Fiber',
    href: 'https://github.com/Kev107034011/kev-portfolio',
    texture: '/textures/project/grid2_kev_portfolio.mp4',
    // logo: '/assets/project-logo2.png',
    // logoStyle: {
    //   backgroundColor: '#13202F',
    //   border: '0.2px solid #17293E',
    //   boxShadow: '0px 0px 60px 0px #2F6DB54D',
    // },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Three.js',
        path: '/assets/three_js.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet, isShortScreen) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : isShortScreen ? [0.25, -8.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    pythonPosition: isSmall ? [-2, 7, 0] : isMobile ? [-2, 5, 0] : isTablet ? [-2, 10, 0] : [-6, 1, 4],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    catPosition: isMobile ? [0.5, -4.5, 0] : isShortScreen ? [0.25, -8.5, 0] : [0.25, -5.5, 0],
    smallCatPosition: isMobile ? [0.5, -4.5, 0] : isShortScreen ? [0.25, -8.5, 0] : [-0.3, -5.8, 1.1],
    coffeeMachinePosition: isSmall ? [-12, -6, 5.3] : isMobile ? [-6, -6, 5.3] : isTablet ? [-12, -6, 5.3] : [-7, -6, 5.3],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Intel Corporation',
    pos: 'Software Engineer',
    duration: 'Oct. 2024 - Present',
    title: ["Web tools develpment with Flask and Dash featuring interactive querying and poka-yoke safeguards to ensure accurate data entry and data integrity maintenance within SQL database.",
      "ETL/ELT pipeline setup with on-premise servers and Azure infrastructure, including Azure Data Factory (ADF), Azure Databricks, SQL Server, and Python web scraping scripts.",
      "Early Warning System (EWS) research on time-series data analysis regarding Assembly/Test process data stream."
    ],
    icon: '/assets/intel.svg',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Intel Corporation',
    pos: 'Packaging Engineer Intern',
    duration: 'Jul. 2023 - Jul. 2024',
    title: ["Enhanced productivity and operational quality through the establishment of ETL/ELT pipeline and CRUD of SQL Database.",
      "Constructed product library & systematic analytic struture through Flask Web App Deployment and Statistic Algorithm.",
      "Developed PowerBI dashboards to assist in outsourcing decisions and yield monitoring."
    ],
    icon: '/assets/intel.svg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'AUO Corporation',
    pos: 'WMA CD BIAS Prediction (Contractor)',
    duration: 'Jun. 2022 - Oct. 2023',
    title: ["Led data science team and negotiated with the company to define and solve problems in production data.",
      "Built virtual metrology (VM) models to reduce time and cost for etching to achieve advanced process control (APC).",
      "Evaluated Concept Drift and Small Sample issues within data stream."
    ],
    icon: '/assets/auo.svg',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'KINIK Company',
    pos: 'Grinding Wheel Spec Recommendation System (Contractor)',
    duration: 'Jun. 2022 - Jun. 2023',
    title: ["Customized AutoML modules to build, deploy and manage prediction models.",
      "Responsible for Backend Development by using Django(Python) to construct web system."
    ],
    icon: '/assets/kinik.png',
    animation: 'clapping',
  },
  {
    id: 5,
    name: 'Taiwan High Speed Rail Corporation',
    pos: 'Insulator Contamination Research (Contractor)',
    duration: 'Jan. 2022 - Aug. 2022',
    title: ["Quantitative and qualitative research to evaluate the severance of insulator contamination and establish sampling plan based on Statistics",
      "Visualized risky patterns of insulators in different areas of Taiwan to improve original maintenance measure."
    ],
    icon: '/assets/thsr.jpg',
    animation: 'clapping',
  },
  {
    id: 6,
    name: 'Artificial Intelligence for Intelligent Manufacturing Systems Research Center (AIMS)',
    pos: 'Data Scientist Intern',
    duration: 'Jul. 2021 - Aug. 2022',
    title: ["Decreased troubleshooting time from weeks to minutes by extracting experts’ knowledge in recovering abnormal probe card.",
      "Increased one-shot troubleshooting chance from 10% to 37%, compared with traditional Bayesian Method by developing “Multi-Label Bayesian Network” algorithm."
    ],
    icon: '/assets/aims.jpg',
    animation: 'clapping',
  },
];

export const educationBackground = [
  {
    id: 1,
    name: 'National Tsing Hua University',
    pos: "Master's Degree, Industrial Engineering and Engineering Management",
    duration: 'Sep. 2022 - Aug. 2024',
    title: ["GPA: 4.30 / 4.30",
      "Honorary Member of the Phi Tau Phi Scholastic Honor Society"
    ],
    icon: '/assets/nthu.jpg',
  },
  {
    id: 2,
    name: 'National Tsing Hua University',
    pos: "Master's Degree, Industrial Engineering and Engineering Management",
    duration: 'Sept. 2018 - Jun. 2022',
    title: ["GPA: 3.71 / 4.30",
      'Circular Economy Club & Coffee Club'
    ],
    icon: '/assets/nthu.jpg',
  },
  {
    id: 3,
    name: 'Nanyang Technological University Singapore',
    pos: "Bachelor Exchange Program , Computer Science, Business",
    duration: 'Jan. 2022 - May. 2022',
    title: [],
    icon: '/assets/ntu.svg',
  },
];