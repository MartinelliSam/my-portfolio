import DiceGame from "assets/projectsImages/dice-game.jpg";
import SpyAgency from "assets/projectsImages/spy-agency.jpg";
import QuaiAntique from "assets/projectsImages/quai-antique.jpg";
import Portfolio from "assets/projectsImages/portfolio.jpg";

import Icons from "components/Icons.js";

const ProjectsData = [
  {
    id: "quai-antique",
    image: QuaiAntique,
    name: "Quai Antique",
    stack: [
      <Icons name="Symfony" key="SymfonyIco"/>,
      <Icons name="Bootstrap" key="BootstrapIco"/>,
      <Icons name="JS" key="JsIco"/>,
      <Icons name="MariaDB" key="MariaDbIco"/>
    ],
    github: "https://github.com/MartinelliSam/Projet-QuaiAntique",
    source: "https://restaurant-lequaiantique.herokuapp.com/",
    description:
      "Site du restaurant le Quai Antique, développé sous Symfony. Module de réservation et panneau d'administration"
  },
  {
    id: "portfolio",
    image: Portfolio,
    name: "Portfolio",
    stack: [
      <Icons name="React" key="ReactIco"/>,
      <Icons name="CSS" key="CssIco"/>
    ],
    github: "",
    source: "",
    description:
      "Portfolio de présentation de mes projets (Single Page Application). Page où vous vous trouvez actuellement"
  },
  {
    id: "spy-agency",
    image: SpyAgency,
    name: "Spy Agency",
    stack: [
      <Icons name="Bootstrap" key="BootstrapIco"/>,
      <Icons name="PHP" key="PhpIco"/>,
      <Icons name="MariaDB" key="MariaDbIco"/>,
      <Icons name="JS" key="JsIco"/>
    ],
    github: "https://github.com/MartinelliSam/Spy_agency",
    source: "https://services-secrets-d79da3f75178.herokuapp.com/",
    description:
      "Site de gestion d'une agence d'espion avec interface back-office, à l'aide de PHP."
  },
  {
    id: "dice-game",
    image: DiceGame,
    name: "Dice Game",
    stack: [
      <Icons name="HTML" key="HtmlIco"/>,
      <Icons name="CSS" key="CssIco"/>,
      <Icons name="JS" key="JsIco"/>
    ],
    github: "https://github.com/MartinelliSam/JeuDeDes",
    source: "https://great-dice-game.netlify.app/",
    description:
      "Création d'un jeu de dés dynamique sur navigateur à l'aide de Javascript"
  },
];

export default ProjectsData;