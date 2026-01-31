import { useState, useEffect} from 'react';
import { Navbar as BSNavbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import downloadIcon from '../assets/img/download_icon.png';
import CV from '../assets/CV/KavishkaKodithuwakku_CV.pdf';

export const NavBar = () => {
    const [activelink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <BSNavbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <BSNavbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </BSNavbar.Toggle>

        <BSNavbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="navbar-nav-center">
            <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#education" className={activelink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kavishkakodithuwakku" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/KavishkaKodithuwakku" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://www.instagram.com/kavish_kodithuwakku" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
              <a href={CV} download><img src={downloadIcon} alt="Download CV" /></a>
            </div>

            <button
              className="contact-btn"
              onClick={() => {
                onUpdateActiveLink('connect');
                const el = document.getElementById('connect');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Get In Touch</span>
            </button>
          </span>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default NavBar;
