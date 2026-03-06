import "./About.css";

import placeHolder from "../../images/placeholder.png";


function About() {
    return(
        <div className="about__content">
            <img src={placeHolder} alt="Author picture" className="about__image" />
            <div className="about__info">
            <h2 className="about__header">About the Author</h2>
            <p className="about__description">Will come back .....</p>
            </div>
        </div>
    )
}


export default About;