import './Hero.css';
import profile from '../../assets/profile.png'
const Hero = () =>{
    return <section className='hero_section'>
        <div className='hero_intro'>
            <h1 className="animate__animated animate__backInUp animate__delay-1s"> Hi, I am <br/>NEERAJ SINGH RAJPUT<br/></h1>
            <h2 className='job_title animate__animated animate__backInDown animate__delay-1s'>Front End Developer</h2>
            <p className='intro animate__animated animate__backInLeft animate__delay-1s'>A creative Front End Web Developer, and I'm very passionate to my work.I am skilled
                in React and equipped with a solid coding foundation. Eager to contribute my quick 
                learning abilites and innovative mindset to a frontend web developement role</p>
            <div className='cv'>
                <a href='#'><button>Download CV</button></a>
                <a href='#contact'><button>Lets Talk</button></a>
            </div>
        </div>
        <div className='hero_image'>
            <img src={profile} width={240} alt=''/>
        </div>
    </section>
}

export default Hero;