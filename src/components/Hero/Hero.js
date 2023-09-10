import "./Hero.css";
import profile from "../../assets/profile.png";
import cv from "../../assets/cv.pdf";
import Tilt from "react-parallax-tilt";
const Hero = () => {
  return (
    <section className="form-box">
      <div className="box">
        <section className="fm">
          <div className="hero_intro">
            <h1 className=" animate__animated animate__backInUp animate__slower">
              Hi, I am <br />
              <span className="spaceX"> NEERAJ SINGH RAJPUT</span>
              <br />
            </h1>
            <h2 className="job_title animate__animated animate__backInDown animate__slower">
              Front End Developer
            </h2>
            <p className="intro animate__animated animate__backInLeft animate__slower">
              A creative Front End Web Developer, and I'm very passionate to my
              work.I am skilled in React and equipped with a solid coding
              foundation. Eager to contribute my quick learning abilites and
              innovative mindset to a frontend web developement role
            </p>
            <div className="cv">
              <a href={cv} download>
                <button className="animate__animated animate__heartBeat animate__slower animate__infinite">
                  Download CV
                </button>
              </a>
              <a href="#contact">
                <button className="animate__animated animate__heartBeat animate__slower animate__infinite">
                  Lets Talk
                </button>
              </a>
            </div>
          </div>
          <Tilt>
            <div className="hero_image">
              <img src={profile} width={240} alt="" />
            </div>
          </Tilt>
        </section>
      </div>
    </section>
  );
};

export default Hero;
