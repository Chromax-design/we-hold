import job from "../assets/icons/info_icons/job.svg";
import development from "../assets/icons/info_icons/development.svg";
import career from "../assets/icons/info_icons/career.svg";
import role from "../assets/icons/info_icons/role.svg";
import business from "../assets/icons/info_icons/business.svg";
import balance from "../assets/icons/info_icons/balance.svg";
import obstacle from "../assets/icons/info_icons/obstacle.svg";
import perspective from "../assets/icons/info_icons/perspective.svg";
import relationship from "../assets/icons/info_icons/relationship.svg";
import skill from "../assets/icons/info_icons/skill.svg";

// learners
import visual from "../assets/icons/info_icons/visual_learners.svg";
import audio from "../assets/icons/info_icons/audio_learners.svg";
import kinesthetic from "../assets/icons/info_icons/kinesthetic_learners.svg";
import readers from "../assets/icons/info_icons/reading_learners.svg";

// personality test
import self_awareness from "../assets/icons/info_icons/self_awareness.svg";
import career_development from "../assets/icons/info_icons/career_development.svg";
import team_building from "../assets/icons/info_icons/team_building.svg";
import diagnosis_treatment from "../assets/icons/info_icons/diagnosis_treatment.svg";

export const information = [
  {
    id: 1,
    title: "Starting a new job or career",
    info: "A mentee who is starting a new job or career may need a mentor to provide guidance on navigating the workplace and industry, understanding expectations and requirements, and developing the necessary skills to succeed.",
    img: `${job}`,
  },
  {
    id: 2,
    title: "Personal development",
    info: "A mentee who is looking to develop their personal skills and abilities may need a mentor to provide guidance on how to improve their communication, leadership, or other soft skills.",
    img: `${development}`,
  },
  {
    id: 3,
    title: "Career advancement",
    info: "A mentee who is looking to advance their career may need a mentor to provide guidance on how to develop new skills, network, and take advantage of opportunities for growth within their organization or industry.",
    img: `${career}`,
  },
  {
    id: 4,
    title: "Transitioning to a new role",
    info: "A mentee who is transitioning to a new role within their organization may need a mentor to provide guidance on how to manage the transition, build new relationships, and succeed in the new position.",
    img: `${role}`,
  },
  {
    id: 5,
    title: "Starting a business",
    info: "A mentee who is starting a new business may need a mentor to provide guidance on how to develop a business plan, secure funding, and navigate the complexities of starting and growing a successful business.",
    img: `${business}`,
  },
  {
    id: 6,
    title: "Work-life balance",
    info: "A mentee who is struggling with balancing their work and personal life may need a mentor to provide guidance on how to prioritize their time, set boundaries, and manage stress.",
    img: `${balance}`,
  },
  {
    id: 7,
    title: "Overcoming obstacles",
    info: "A mentee who is facing obstacles in their personal or professional life may need a mentor to provide guidance and support in overcoming these challenges and finding a path forward.",
    img: `${obstacle}`,
  },
  {
    id: 8,
    title: "Developing new perspectives",
    info: "A mentee who is looking to develop new perspectives and expand their worldview may need a mentor to provide guidance on how to explore new ideas and challenge their assumptions.",
    img: `${perspective}`,
  },
  {
    id: 9,
    title: "Building relationships",
    info: "A mentee who is looking to build new relationships within their industry or community may need a mentor to provide guidance on how to network, make connections, and establish meaningful relationships.",
    img: `${relationship}`,
  },
  {
    id: 10,
    title: "Skill development",
    info: "A mentee who is looking to develop new technical or industry-specific skills may need a mentor to provide guidance on how to learn and master these skills, as well as how to apply them in real-world situations.",
    img: `${skill}`,
  },
];

export const learningStyleInfo = [
  {
    id: 1,
    title: "Visual learners",
    info: "These learners prefer to use visual aids, such as charts, diagrams, and images, to understand and remember information. They may benefit from seeing information in a visual format, such as through videos, infographics, or written notes with visual elements.",
    img: `${visual}`,
  },
  {
    id: 2,
    title: "Auditory learners",
    info: "These learners prefer to learn through listening and speaking. They may benefit from listening to lectures, discussions, or podcasts, and may also enjoy engaging in verbal discussions or debates to solidify their understanding.",
    img: `${audio}`,
  },
  {
    id: 3,
    title: "Kinesthetic learners",
    info: "These learners prefer to learn through physical activities and movement. They may benefit from hands-on experiences, such as experiments, simulations, or role-playing, and may find it helpful to take breaks and engage in physical activities while studying",
    img: `${kinesthetic}`,
  },
  {
    id: 4,
    title: "Reading/Writing learners",
    info: "These learners prefer to learn through reading and writing. They may benefit from reading textbooks, articles, and written materials, and may find it helpful to take notes, create outlines, or write summaries to reinforce their learning.",
    img: `${readers}`,
  },
];

export const personality_test = [
  {
    id: 1,
    title: "Self-awareness",
    info: "Personality tests can help individuals gain a better understanding of their own personality traits, strengths, and weaknesses. This self-awareness can help individuals make better decisions, develop stronger relationships, and achieve their goals.",
    img: `${self_awareness}`,
  },
  {
    id: 2,
    title: "Career development",
    info: "Personality tests are commonly used in the workplace to help individuals identify their strengths and weaknesses and determine which careers may be a good fit for them. By understanding their own personality traits, individuals can make informed decisions about their career paths and make adjustments as needed.",
    img: `${career_development}`,
  },
  {
    id: 3,
    title: "Team building",
    info: "Personality tests can also be useful for team building. By understanding the personalities of team members, managers can create teams that are balanced and complementary, leading to more effective collaboration and better results.",
    img: `${team_building}`,
  },
  {
    id: 4,
    title: "Diagnosis and treatment",
    info: "Personality tests are also used in clinical settings to help diagnose and treat mental health conditions. For example, certain personality tests can help identify individuals who may be at risk for depression or anxiety, allowing for early intervention and treatment.",
    img: `${diagnosis_treatment}`,
  },
];
