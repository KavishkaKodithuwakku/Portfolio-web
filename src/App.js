import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import { Education } from './components/Education';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import { MailchimpForm } from './components/MailchimpForm';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <MailchimpForm />
      <Footer />
    </div>
  );
}

export default App;
