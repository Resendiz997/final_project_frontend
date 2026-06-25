import "./About.css";

import placeHolder from "../../images/placeholder.png";

function About() {
  return (
    <div className="about__content">
      <img src={placeHolder} alt="Author picture" className="about__image" />
      <div className="about__info">
        <h2 className="about__header">About the Author</h2>
        <p className="about__description">
          Hi, my name is Oscar Resendiz, and I’m an aspiring software developer
          with a passion for building dynamic and user-friendly applications. I
          have experience working with technologies like SQL, React, and
          JavaScript, along with strong foundations in both front-end and
          back-end development. My skill set also includes HTML, CSS, MongoDB,
          Git, the terminal, and tools like Postman. I enjoy continuously
          learning and improving my craft while creating efficient and scalable
          solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
