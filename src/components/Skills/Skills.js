import "./Skills.css";

const Skills = () => {
  return (
    <ul id="skill">
      <div className="skill_title technical">
        <h2 className="technical-skill" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">Technical Skills</h2>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar graphic-design"></span>
          <h3>Html</h3>
        </li>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar html-css"></span>
          <h3>Bootstrap, Css</h3>
        </li>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar jquery"></span>
          <h3>jQuery</h3>
        </li>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar wordpress"></span>
          <h3>JavaScript</h3>
        </li>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar react"></span>
          <h3>React, Redux Toolkit, React Router Dom</h3>
        </li>
      </div>
      <div className="skill_title soft">
        <h2 className="soft-skill" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">Soft Skills</h2>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar communication"></span>
          <h3>Communication</h3>
        </li>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar teamplayer"></span>
          <h3>Team Player</h3>
        </li>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar hardworking"></span>
          <h3>Hard Working</h3>
        </li>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar adaptability"></span>
          <h3>Adaptability</h3>
        </li>
        <li data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <span className="bar accountability"></span>
          <h3>Accountability</h3>
        </li>
      </div>
    </ul>
  );
};

export default Skills;
