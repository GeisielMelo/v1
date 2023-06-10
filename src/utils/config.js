const config = {
  // Navbar configuration.
  // If your want to create a new section, add it here.
  nav: {
    menu: [
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Featured",
        link: "#featured",
      },
      {
        name: "Projects",
        link: "#projects",
      },
      {
        name: "Contact",
        link: "#contact",
      },
    ],
    button: {
      name: "Resume",
      link: "#",
    },
  },

  // Hero section configuration.
  hero: {
    title: "Hi, my name is",
    name: "Geisiel Melo",
    job: "I build web applications.",
    introduction:
      "I'm a software engineer with experience in web application development. I'm currently seeking new opportunities to apply my skills and knowledge. With a special focus on creating accessible and user-centric solutions, I am committed to building products that stand out and provide amazing experiences for users.",
  },

  // About section configuration.
  about: {
    title: "About Me",
    bio: "Hello, I'm Geisiel Melo, and I love coding and problem-solving. My programming journey began with configuring custom mods and servers for online games, bringing enjoyment to my friends and me. Over time, I ventured into creating scripts to automate tasks and eventually developed full-fledged applications for complex challenges.",
    experience:
      "As I delved into app development, I discovered my passion for creating solutions that benefit others. This led me to focus on web application development, aiming to provide accessible and user-friendly experiences to a broader audience.",
    conclusion:
      "Sharing my applications and witnessing how they simplify people's lives motivates me greatly. I firmly believe in the positive impact of technology on society, and I'm dedicated to crafting intuitive, efficient, and enjoyable web applications.",
    image:
      "https://img.freepik.com/vector-premium/icono-doodle-logo-dibujo-perfil-masculino-aislado-sobre-fondo-oscuro_159242-392.jpg",
    imageDescription: "a male person",
  },

  // Tech configuration.
  // Put your tech stack in the tech array(tech: []).
  technologies: {
    title: "Here are some of the technologies I've worked with:",
    tech: [
      "JavaScript",
      "NodeJS",
      "Python",
      "React",
      "Express",
      "MongoDB",
      "MySQL",
    ],
  },

  // Featured projects texts.
  featured: {
    title: "Featured Projects",
  },

  // Projects section texts.
  projects: {
    title: "Other Noteworthy Projects",
    subtitle: "Take a look!",
    button: "See More",
  },

  // Contact section text.
  contact: {
    title: "Contact Me",
    subtitle: "Let's work together!",
    message:
      "Hey there! As a junior developer, I'm on the lookout for exciting new opportunities. If you have any questions, inquiries, or if you're interested in collaborating on a project, don't hesitate to reach out. My inbox is always open, and I'd love to chat and explore how we can work together!",
    email: "geisiel.nascimento@gmail.com",
    button: "Say Hello!",
  },

  // Dynamic bottom button creation.
  // Add here more buttons if you want to add more.
  // Each button should have a name, link.
  // You have to add a new switch case in "Button.jsx" to change the icon.
  bottomButtons: [
    {
      name: "GitHub",
      link: "https://github.com/geisielmelo",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      name: "Email",
      link: "mailto:geisiel.nascimento@gmail.com",
    },
  ],
};

export default config;
