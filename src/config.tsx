// Create interfaces for your object structure
export interface SocialMedia {
    name: string;
    url: string;
  }
  
  export interface NavLink {
    name: string;
    url: string;
  }
  
  // Create an interface for the exported object
  export interface Config {
    email: string;
    socialMedia: SocialMedia[];
    navLinks: NavLink[];
  }

  export interface Email{
    email: string;
  }
  
  // Define your exported object and its type
  const config: Config = {
    email: "keithloh99@gmail.com",
  
    socialMedia: [
      {
        name: "GitHub",
        url: "https://github.com/k3ithloh",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/k3ithloh",
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/",
      },
    ],
  
    navLinks: [
      {
        name: "About",
        url: "#about",
      },
      {
        name: "Experience",
        url: "#experience",
      },
      {
        name: "Projects",
        url: "#projects",
      },
      // {
      //   name: "Contact",
      //   url: "#contact",
      // },
    ],
  };
  
  // Export the typed object
  export default config;
  