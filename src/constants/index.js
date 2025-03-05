import {
  frontend,
  backend,
  cpp,
  c,
  pythonicon,
  sqlicon,
  vsicon,
  mlicon,
  githubicon,
  awsicon,
  ux,
  prototyping,
  javascript,
  awsfoundation,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'Education',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  
];

const services = [
  {
    title: 'IT Specialist - HTML and CSS ',
    icon: frontend,
  },
  {
    title: 'IT Specialist - Java',
    icon: backend,
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    icon: ux,
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    icon: prototyping,
  },
  {
    title: 'AWS Academy Cloud Foundations',
    icon: awsfoundation,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'CPP',
    icon: cpp,
  },
  {
    name: 'c',
    icon: c,
  },
  {
    name: 'aws',
    icon: awsicon,
  },
  {
    name: 'Python',
    icon: pythonicon,
  },
  {
    name: 'SQL',
    icon: sqlicon,
  },
  {
    name: 'ML',
    icon: mlicon,
  },
  {
    name: 'GitHub',
    icon: githubicon,
  },
  {
    name: 'visual studio code',
    icon: vsicon,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'SSC',
    company_name: '90%',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2019 - April 2020',
  },
  {
    title: 'Inter',
    company_name: 'Narayana JR College',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2020 - April 2022',
  },
  {
    title: 'Engineering',
    company_name: 'Aditya College of Engineering And Technology',
    icon: kelhel,
    iconBg: '#333333',
    date: 'September 2022 - Present',
  },
  {
    title: 'AWS-Summer-Intern',
    company_name: 'Technical Hub',
    icon: dcc,
    iconBg: '#333333',
    date: 'may 2024 - june 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'AWS-Language-Translator',
    description: 'Developed a language translator website using aws servies and front end developments tools.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'AWS-Image-Recognization',
    description:
      'Developed an AWS-Image-Recognization website using aws servies and front end developments tools.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Portfolio',
    description: 'Developed an Portfolio website using Front end developments, tools and React js.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Java-Teachers-DB',
    description: `Created an application using java and used backend services like Mysql and managed and stored teachers.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  } ,
];

export { services, technologies, experiences, projects };
