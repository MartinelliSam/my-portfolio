import "./Skills.css";
import Icons from "components/Icons.js";
import HeartIco from 'assets/heart-svgrepo-com.svg';

export default function Skills() {
  return (
    <div id="skills">
      <h2>Mes compétences</h2>
      <div id="skills-container">
        <div>
          <h3>Front</h3>
          <div id="front-skills">
            <div className="skill-icon">
              <Icons name="HTML" />
              HTML
            </div>
            <div className="skill-icon">
              <Icons name="CSS" />
              CSS3
            </div>
            <div className="skill-icon">
              <Icons name="JS" />
              JavaScript
            </div>
            <div className="skill-icon relative-ico">
              <img src={HeartIco} alt="heart-ico" className="heart-ico"/>
              <Icons name="React" />
              React.js
            </div>
            <div className="skill-icon">
              <Icons name="Bootstrap" />
              Bootstrap
            </div>
          </div>
        </div>
        <div>
          <h3>Back</h3>
          <div id="back-skills">
            <div className="skill-icon">
              <Icons name="PHP" />
              PHP
            </div>
            <div className="skill-icon relative-ico">
              <img src={HeartIco} alt="heart-ico" className="heart-ico"/>
              <Icons name="Symfony" />
              Symfony
            </div>
          </div>
        </div>
        <div>
          <h3>Bases de données</h3>
          <div id="database-skills">
            <div className="skill-icon">
              <Icons name="MariaDB" />
              MariaDB
            </div>
            <div className="skill-icon">
              <Icons name="MySQL" />
              MySQL
            </div>
          </div>
        </div>
        <div>
          <h3>Outils</h3>
          <div id="tools-skills">
            <div className="skill-icon">
              <Icons name="Git" />
              Git
            </div>
            <div className="skill-icon">
              <Icons name="NPM" />
              NPM
            </div>
            <div className="skill-icon">
              <Icons name="Composer" />
              Composer
            </div>
            <div className="skill-icon">
              <Icons name="Jira" />
              Jira
            </div>
            <div className="skill-icon">
              <Icons name="Figma" />
              Figma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
