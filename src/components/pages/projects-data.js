import BootstrapPortfImg from '../assets/Bootstrap-portfolio.png';
import TeamProfileImg from '../assets/Team-Profile-Generator.png';
import TravelXpImg from '../assets/Travel-Xperience.jpg';
import weatherDashImg from '../assets/Weather dashboard.png';

const projects = [
  {
    id: 0,
    name: 'Bootstrap-portfolio',
    desc:
      'Portfolio displayed using Bootstrap',
    img: BootstrapPortfImg,
    href: "https://ramaz-didi.github.io/Bootstrap-Portfolio/",
    github: "https://github.com/Ramaz-Didi/Bootstrap-Portfolio"
  },
  {
    id: 1,
    name: 'Team-Profile-Generator',
    desc:
    'Team Profile Generator, helps user to organize own team profile',
    img: TeamProfileImg,
    href: "https://ramaz-didi.github.io/week12-Team-Profile-Generator/",
    github: "https://github.com/Ramaz-Didi/week12-Team-Profile-Generator"
  },
  {
    id: 2,
    name: 'Travel-Xperience',
    desc:
    'API based app, that offers great travel experience',
    img: TravelXpImg,
    href: "https://chloehill3.github.io/TravelXperience/",
    github: "https://github.com/ChloeHill3/TravelXperience",
  },
  {
    id: 3,
    name: "Weather dashboard",
    desc:
      'Weather app that indicates 5 day forecast',
    img: weatherDashImg,
    href: "https://ramaz-didi.github.io/Weather-forecast-week8/",
    github: "https://github.com/ramaz-didi/Weather-forecast-week8/",
  },
];

export default projects;
