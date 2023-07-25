import { Wrapper } from "./elements";

const Projects = () => {
  return (
    <Wrapper>
      <div className="container">
        <h4>Here's Some Work I've done</h4>
        <hr />
        <div className="project-list">
          <div className="project-card">
            <div className="project-image">
              <img src="./vite.svg" />
            </div>
            <div className="project-info">
              <h5 className="project-title">Project Title</h5>
              <p className="project-description">
                A Short description saying what the project is, What it does and
                how it does it
              </p>
              <div className="project-tech">
                <div className="tech">HTML</div>
                <div className="tech">CSS</div>
                <div className="tech">JAVASCRIPT</div>
              </div>
            </div>
          </div>
          {/* <div className="project-card">
                <div className="project-image"></div>
                <div className="project-info">
                    <h5 className="project-title"></h5>
                    <p className="project-description"></p>
                    <div className="project-tech">
                        <div className="tech"></div>
                        <div className="tech"></div>
                        <div className="tech"></div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="project-image"></div>
                <div className="project-info">
                    <h5 className="project-title"></h5>
                    <p className="project-description"></p>
                    <div className="project-tech">
                        <div className="tech"></div>
                        <div className="tech"></div>
                        <div className="tech"></div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
