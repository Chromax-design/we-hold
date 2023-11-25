import dashimg from "../assets/icons/dashboards/dashboard.png";
import history from "../assets/icons/dashboards/history.png";
import messages from "../assets/icons/dashboards/messages.png";
import notification from "../assets/icons/dashboards/notification.png";
import payment from "../assets/icons/dashboards/payment.png";
import setting from "../assets/icons/dashboards/setting.png";

export const community = [
  { title: "Collaborate", location: "Collaborate" },
  { title: "Remote Jobs", location: "Remote-Jobs" },
  {
    title: "Equip Youth Initiative",
    location: "Equip-Youth-Initiative",
  },
  {
    title: "Free online training",
    location: "Free-online-training",
  },
  {
    title: "Personality Test",
    location: "Personality-Test",
  },
  {
    title: "Learning Style Test",
    location: "Learning-Style-Test",
  },
];

export const company = [
  { title: "about us", location: "about" },
  // { title: "blog", location: "blog" },
  { title: "contact us", location: "contact-us" },
  { title: "become a mentor", location: "auth/signup-as-a-mentor" },
];

export const footLinks = [
  {
    title: "platform",
    links: [
      { title: "become a mentor", location: "auth/signup-as-a-mentor" },
      { title: "find a mentor", location: "info" },
      // { title: "testimonials", location: "testimonials" },
      { title: "browse mentors", location: "mentors" },
    ],
  },
  // {
  //   title: "resources",
  //   links: [
  //     { title: "blog", location: "blog" },
  //     { title: "podcasts", location: "podcasts" },
  //     { title: "newsletters", location: "newsletters" },
  //     { title: "video library", location: "video-library" },
  //   ],
  // },
  {
    title: "company",
    links: [
      { title: "About Us", location: "about" },
      // { title: "Customer Stories", location: "customers" },
      { title: "terms of service", location: "terms" },
      { title: "privacy policy", location: "privacy-policy" },
    ],
  },
  {
    title: "support",
    links: [
      { title: "faqs", location: "faqs" },
      { title: "contact us", location: "contact-us" },
    ],
  },
];

export const dashboard = [
  { id: "1", title: "dashboard", icon: `${dashimg}`, link: "" },
  { id: "2", title: "history", icon: `${history}`, link: "history" },
  { id: "3", title: "chat room", icon: `${messages}`, link: "chat" },
  // {
  //   id: "4",
  //   title: "notifications",
  //   icon: `${notification}`,
  //   link: "notifications",
  // },
  { id: "5", title: "payments", icon: `${payment}`, link: "payments" },
  { id: "6", title: "settings", icon: `${setting}`, link: "settings" },
];
