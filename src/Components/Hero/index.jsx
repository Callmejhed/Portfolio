import { Wrapper } from "./elements";
import Convert from '../Convert'

const Hero = () => {
  return (
    <Wrapper>
      <div className="text-container">
        <pre>
          Hello I'm Jedidiah Ehimah but you can call me <span>Jhed</span>. 
          I'm a Fullstack web developer and <span>I'd like to work with you</span>.
        </pre>
        <Convert />
      </div>
      <div className="image-container"></div>
    </Wrapper>
  );
};

export default Hero;
