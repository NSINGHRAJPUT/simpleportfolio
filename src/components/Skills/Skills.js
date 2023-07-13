import "./Skills.css";

const Skills = () => {
  return (
    <ul id="skill">
      <div className="skill_title technical">
        <h2 className="technical-skill">TECHNICAL</h2>
        <li>
          <span className="bar graphic-design"></span>
          <h3>Html</h3>
        </li>
        <li>
          <span className="bar html-css"></span>
          <h3>Bootstrap, Css</h3>
        </li>
        <li>
          <span className="bar jquery"></span>
          <h3>jQuery</h3>
        </li>
        <li>
          <span className="bar wordpress"></span>
          <h3>JavaScript</h3>
        </li>
        <li>
          <span className="bar react"></span>
          <h3>React, Redux Toolkit, React Router Dom</h3>
        </li>
      </div>
      <div className="skill_title soft">
        <h2 className="soft-skill">SOFT</h2>
        <li>
          <span className="bar communication"></span>
          <h3>Communication</h3>
        </li>
        <li>
          <span className="bar teamplayer"></span>
          <h3>Team Player</h3>
        </li>
        <li>
          <span className="bar hardworking"></span>
          <h3>Hard Working</h3>
        </li>
        <li>
          <span className="bar adaptability"></span>
          <h3>Adaptability</h3>
        </li>
        <li>
          <span className="bar accountability"></span>
          <h3>Accountability</h3>
        </li>
      </div>
    </ul>
  );
};

export default Skills;
