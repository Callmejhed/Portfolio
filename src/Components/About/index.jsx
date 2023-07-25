import { Wrapper } from "./elements";
import arrow from "../../assets/arrow.png";

const About = () => {
  return (
    <Wrapper image={arrow}>
      <div className="container">
        <article>
          <div className="article-title">
            <h4>Personal Info :</h4>
          </div>
          <p className="article-content">
            I'm almost completely self taught with formal training. Some time
            during the pandemic of 2020, I decided to get into into Game
            development using the Godot Engine and while using the GDScript
            (Godot's inbuilt scripting language) a friend further along in her
            journey as a Software Engineer pointed out it's similarity
            (syntax-wise)to Javascript. From there I shifted course to learning
            Javascript and then using Node.js to create console applications and
            then backends and REST api's for websites and webapps. Along the way
            I learnt Frontend development using React.js to aid my journey
          </p>
        </article>
        <article>
          <div className="article-title">
            <h4>Education & Certification :</h4>
          </div>
          <p className="article-content">
            Education-wise, I have a Bachelor's degree in Computer Science from
            the University of Benin. Along the way I joined the Deebug Institute
            boot camp to help sharpen my skills, learn some industry standards
            and best practices and provide some Certification to back up my
            skills and Degree.
          </p>
        </article>
        <article>
          <div className="article-title">
            <h4>Skillset :</h4>
          </div>
          <p className="article-content">
            Right now my still expanding set of skills include:
            <ul>
              <li>Mongo DB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.JS</li>
              <li>React Native</li>
            </ul>
          </p>
        </article>
        <a href="http://#" target="_blank" rel="noopener noreferrer">
          Veiw full Resumé →
        </a>
      </div>
    </Wrapper>
  );
};

export default About;
