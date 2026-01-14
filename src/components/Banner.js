import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["AI/ML Engineer", "Data Analyst", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    
    useEffect(() => {
        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(prevLoopNum => prevLoopNum + 1);
                setDelta(500);
            }
        };

        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => clearInterval(ticker);
    }, [text, delta, loopNum, isDeleting, toRotate]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="banner-content">
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>
                                <span>Hi! I'm Kavishka Kodithuwakku</span>
                                <br />
                                <span className="wrap">{text}</span>
                            </h1>
                            <p>I'm a passionate Software Engineering undergraduate with strong interests in Full-Stack Development, AI, and Machine Learning. I love turning ideas into real-world applications by building web, mobile, and data-driven solutions. Always curious, always learning, and always improving my craft.</p>
                            <button className="banner-button" onClick={() => console.log('connect')}>
                                <span>Let's Connect</span>
                                <ArrowRightCircle size={25} />
                            </button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="banner-image">
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;