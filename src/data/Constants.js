import airbnb from "../assets/companies/airbnb-color.svg";
import amazon from "../assets/companies/amazon-color.svg";
import meta from "../assets/companies/meta-color.svg";
import netflix from "../assets/companies/netflix-color.svg";
import spotify from "../assets/companies/spotify-color.svg";
import stripe from "../assets/companies/stripe-color.svg";
import Facebook from "../assets/socials/facebook.png";
import Instagram from "../assets/socials/instagram.png";
import Tiktok from "../assets/socials/tik-tok.png";

import Phone from "../assets/icons/phone.png";
import Mail from "../assets/icons/mail.png";
// import Fax from "../assets/icons/fax.png";
// import Map from "../assets/icons/map.png";




export const company_img = [
  `${airbnb}`,
  `${amazon}`,
  `${meta}`,
  `${netflix}`,
  `${spotify}`,
  `${stripe}`,
];

export const socials = [
  {
    id: 1,
    location: "https://web.facebook.com/weholdahand",
    icon: `${Facebook}`,
  },
  {
    id: 2,
    location: "https://www.instagram.com/weholdahand/",
    icon: `${Instagram}`,
  },
  { id: 3, location: "https://www.tiktok.com/@weholdahand", icon: `${Tiktok}` },
];

export const address = [
  {
    id: 1,
    location: "tel: +44 7436974171",
    icon: `${Phone}`,
    title: "phone number",
    desc: "+44 7436974171",
  },
  {
    id: 2,
    location: "mailto: hr@weholdahand.com",
    icon: `${Mail}`,
    desc: "hr@weholdahand.com",
  },
  {
    id: 3,
    location: "mailto: enquiry@weholdahand.com",
    icon: `${Mail}`,
    desc: "enquiry@weholdahand.com",
  },
  {
    id: 4,
    location: "mailto: info@weholdahand.com",
    icon: `${Mail}`,
    desc: "info@weholdahand.com",
  },
];


