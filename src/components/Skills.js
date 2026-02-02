import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I’m a passionate Software Engineering student with a strong interest in web and mobile application development, Machine Learning, and Data Analytics.<br></br> I enjoy building user-friendly, intelligent solutions using modern technologies and data-driven approaches.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={meter1} alt="Full-Stack Development" />
                            <h5>Full-Stack Software Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Mobile Development" />
                            <h5>Mobile App Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Machine Learning" />
                            <h5>Machine Learning & AI</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Data Analytics" />
                            <h5>Data Analytics & Engineering</h5>
                        </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;