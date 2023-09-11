import "./Projects.css";
import mailbox from "../../assets/mailbox.jpg";
import portfolio from "../../assets/portfolio.jpg";
import todo from "../../assets/todo.jpg";
import medicine from "../../assets/medicine.jpg";
import expense from "../../assets/expense.jpg";
import meals from "../../assets/meals.jpg";
import booking from "../../assets/booking.png";
import jobfair from "../../assets/jobfair.png";

const Projects = () => {
  return (
    <section className="skills">
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">MailBox Client</h4>
          <p>
            This is a simple clone of gmail made with React. In this Web app you
            can send and recieve mails
          </p>
          <img src={mailbox} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://mailbox-lcntzloat-nsinghrajput.vercel.app/">
              Live
            </a>
          </button>
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/mailbox">Source Code</a>
          </button>
        </div>
      </div>
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">Portfolio</h4>
          <p>
            This is the first Portfolio which i have created with pure HTML, CSS
            and JavaScript
          </p>
          <img src={portfolio} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://nsinghrajput.github.io/personalportfolio/">Live</a>
          </button>
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/personalportfolio">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">To Do app</h4>
          <p>
            A simple and basic to do app made with HTML, CSS and JavaScript. In
            this todo app you can add, edit and can delete a to do task.
          </p>
          <img src={todo} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://nsinghrajput.github.io/domPractice1/">Live</a>
          </button>
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/domPractice1">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">Expense Tracker</h4>
          <p>
            Expense Tracker is made with the idea of managing the expenses and
            see the expenses. This web app made with React, JavaScript ,Css and
            HTML.
          </p>
          <img src={expense} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://reactfromscratch-bh6gvskbs-nsinghrajput.vercel.app/">
              Live
            </a>
          </button>
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/reactfromscratch">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">Medicine Inventry</h4>
          <p>
            In this Medicine Inventry web app you can add a medicine to the list
            of available medicines and you can add medicine to your cart edit
            the medicine in you cart.
          </p>
          <img src={medicine} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://medicine-inventry-project-nh9p18k5s-nsinghrajput.vercel.app/">
              Live
            </a>
          </button>
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/medicineInventryProject">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">Food Order App</h4>
          <p>
            This is a simple food order web app in which you can add items to
            your cart, remove items from your cart etc.
          </p>
          <img src={meals} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://food-order-3379cd83d-nsinghrajput.vercel.app/">
              Live
            </a>
          </button>
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/food-order-app">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">Node JS Group Chat App</h4>
          <p>
            It's a basic app which offers group chatting made with node js
          </p>
          <img src={meals} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/nodeJS-groupChatApp">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">Booking Appointment App</h4>
          <p>
            This a fullstack app made with express js, html, css and JavaScript in which you can book appointment.
          </p>
          <img src={booking} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/booking-appointment-app-fullstack-">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="projects_cont" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <span></span>
        <div className="content">
          <h4 className="project_title">WellFound's Home Page Clone</h4>
          <p>
            This is a simple clone of WellFound's jobFair site home page
          </p>
          <img src={jobfair} width={240} alt="" />
          <button type="link" className="project-link">
            <a href="https://job-fair-bwezibxju-nsinghrajput.vercel.app/">
              Live
            </a>
          </button>
          <button type="link" className="project-link">
            <a href="https://github.com/NSINGHRAJPUT/jobFair">
              Source Code
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
