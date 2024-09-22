import frontEnd from "./images/front-end.png";
import figmaToCode from "./images/figma-code.png";
import webRedesign from "./images/web-redesign.png";
import gyme from "./images/gyme-web.png"
import ecormerce from "./images/ecormerce-website.png"
import weather from "./images/weather.png"


import sample1 from "./images/nail-Polish-website.png"


export const service = [
    {
        id: 1, 
        image: frontEnd,
        title: 'Front End Development',
        description: "I create beautiful, user-friendly websites with a focus on responsiveness, performance, and clean code. Specializing in HTML, CSS, JavaScript, and ReactJS, I bring your design ideas to life and ensure they work seamlessly across all devices",
    },
    {
        id: 2,
        image: figmaToCode,
        title: 'Figma to Code Conversion',
        description: "Got a design on Figma? I convert your static designs into fully responsive and interactive websites. Whether it's a landing page or a multi-page website, I ensure pixel-perfect accuracy and optimized performance using HTML, CSS, and JavaScript."
    },
    {
        id: 3,
        image: webRedesign,
        title: 'Website Redesign',
        description: "Whether you're starting an online store or upgrading an existing one, I create e-commerce websites that are easy to manage and user-friendly. From product pages to shopping carts and payment gateways, I make sure everything is seamless for your customers."
    }
]


export const projects = [
    {
        id: 1,
        image: sample1,
        link:  'https://nail-polish-den.vercel.app/',
        codeLink: 'https://github.com/ruttogit/Nail-polish.git'
    },
    {
        id: 2,
        image: ecormerce,
        link: 'https://e-commerce-shoe-web.vercel.app/',
        codeLink: 'https://github.com/ruttogit/E-commerce-shoe-web.git'
    },
    {
        id: 3,
        image: gyme,
        link: 'https://fitness-web-omega.vercel.app/',
        codeLink: 'https://github.com/ruttogit/Fitness-web.git'

    },
    {
        id: 4,
        image: weather,
        link: '#',
        codeLink: '#'
    }
]