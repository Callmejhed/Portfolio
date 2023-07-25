import { Wrapper } from "./elements";
import Convert from "../Convert";

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container">
          <h2>Hello.</h2>
          <h3>I'm Jedidiah Ehimah.</h3>
          <p>
            I'm a Fullstack web developer. My expertise lies in building
            scalable and user-friendly web applications that harmoniously blend
            aesthetics with functionality. I'd like to work with you!
          </p>
        </div>
        <Convert />
      </div>
    </Wrapper>
  );
};

export default Hero;
