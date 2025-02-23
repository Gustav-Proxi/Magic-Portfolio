import { InlineCode } from "@/once-ui/components";


const person = {
  firstName: "Vaishak",
  lastName: "G Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI/ML Engineer, LLM Enthusiast",
  avatar: "/images/avatarog.jpg",
  location: "Asia/Bengaluru", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi","Kannada"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Gustav-Proxi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vaishakgkumar/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:vaishakgkumar@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>AI/ML Engineer and Researcher</>,
  subline: (
    <>
      I'm Vaishak, a Machine Learning Engineer specializing in AI research and development.
      <br /> I build innovative AI solutions and contribute to open-source projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://drive.google.com/file/d/1t5esO8V7uG2k6M_X4RYQcWL6pRGpXEs5/view?usp=sharing",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Vaishak G Kumar is a Bengaluru-based AI/ML Engineer passionate about solving complex
        problems through artificial intelligence. His expertise spans machine learning, deep
        learning, NLP, and computer vision.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Scitonic (Tonic AI - Open Source)",
        timeframe: "2024 - Present",
        role: "Contributor",
        achievements: [
          <>
            Contributed to the development and testing of Scitonic, an open-source AI research
            platform by Tonic AI.
          </>,
        ],
        images: [],
      },
      {
        company: "Personal AI/ML Projects",
        timeframe: "Ongoing",
        role: "Independent Researcher & Developer",
        achievements: [
          <>
            Developed AI-DxMH, an AI-powered mental health diagnostic system.
          </>,
          <>
            Built an LSTM-based real-time weather prediction model with Streamlit integration.
          </>,
          <>
            Implemented GAN-based enhanced image realism models.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Presidency University, Bangalore",
        description: <>B.Tech in Computer Science and Engineering (AI & ML Specialization).</>,
      },
      {
        name: "Independent Learning",
        description: <>Certified in AWS Cloud Foundations, Supervised ML, and AI Research.</>,
      },
    ],
  },
  research: {
    display: true, // Ensure this is true
    title: "Research Publications",
    papers: [
      {
        title: "AI-DxMH - Artificial Intelligence Diagnosis for Modern Health",
        journal: "International Journal of Creative Research Thoughts (IJCRT)",
        publicationDate: "2024",
        description: (
          <>
            This paper presents an AI-based diagnostic system integrating NLP and deep learning to
            assess mental health conditions.
          </>
        ),
        link: "https://www.ijcrt.org/papers/IJCRT2401211.pdf",
      },
      {
        title: "On-the-fly-Prompt-Optimization in Multi-Agent Systems: A Comparative Study",
        journal: "International Journal of Creative Research Thoughts (IJCRT)",
        publicationDate: "2024",
        description: (
          <>
            This research explores On-the-fly-Prompt-Optimization (OPO) techniques for dynamic
            multi-agent systems.
          </>
        ),
        link: "http://www.ijcrt.org/papers/IJCRT2405721.pdf",
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "💻 Programming Languages",
        description: (
          <div className="badge-container">
            <img
              src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
              alt="C"
              className="badge" />
            <img
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
              alt="Python"
              className="badge" />
            <img
              src="https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white"
              alt="R"
              className="badge" />
            <img
              src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
              alt="Java"
              className="badge" />
          </div>
        ),
      },
      {
        title: "📊 Data Science & ML",
        description: (
          <div className="badge-container">
            <img
              src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white"
              alt="TensorFlow"
              className="badge" />
            <img
              src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"
              alt="PyTorch"
              className="badge" />
            <img
              src="https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white"
              alt="Keras"
              className="badge" />
            <img
              src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white"
              alt="scikit-learn"
              className="badge" />
            <img
              src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"
              alt="NumPy"
              className="badge" />
          </div>
        ),
      },
      {
        title: "🛋️ Databases & Storage",
        description: (
          <div className="badge-container">
            <img
              src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
              className="badge" />
            <img
              src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white"
              alt="Microsoft SQL Server"
              className="badge" />
            <img
              src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
              alt="Redis"
              className="badge" />
          </div>
        ),
      },
      {
        title: "☁️ Cloud & DevOps",
        description: (
          <div className="badge-container">
            <img
              src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
              alt="AWS"
              className="badge" />
            <img
              src="https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white"
              alt="DigitalOcean"
              className="badge" />
            <img
              src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
              alt="Google Cloud"
              className="badge" />
            <img
              src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white"
              alt="Kubernetes"
              className="badge" />
          </div>
        ),
      },
    ],
  },
};


const blog = {
  display: false,
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  display: false,
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, };
