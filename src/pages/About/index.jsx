import './style.css';

const About = () => {
  return (
    <section className="about">
      <h2>About</h2>
      <img
        className="about__img"
        src="https://avatars.githubusercontent.com/u/16729348?v=4"
        alt=""
      />
      <h3>Jilson Thomas Jimenez Caicedo</h3>
      <p>
        I am a FullStack JavaScript developer mainly on React, MongoDB, Express
        and Nodejs technologies. Additionally, I have extensive experience in
        graphic design and administration.
      </p>
      <h4 className="about__titleList">I learn in Make It Real:</h4>
      <ul className="about__lista">
        <li>
          Many things about React, Hooks, print data from other servers with
          fetch
        </li>
        <li>To use Scrum agile methodology for the proyects</li>
        <li>Git and Github and Eslint</li>
      </ul>
      <p />
      <a
        className="about__button"
        target="_blank"
        href="mailto:jilsonjimenez@gmail.com"
        rel="noreferrer"
      >
        Send me a email
      </a>
      <a
        className="about__button about__button--github"
        target="_blank"
        href="https://github.com/jilson23"
        rel="noreferrer"
      >
        Go to my Github
      </a>
    </section>
  );
};
export default About;
