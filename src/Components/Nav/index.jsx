import { Wrapper, MWrapper } from "./elements";
import Convert from "../Convert";

const Nav = () => {
  return (
    <Wrapper>
        <div className='logo'>Jhed</div>
        <nav>
            <div className="nav-logo">Jhed</div>
            <ul className="nav-list">
                <li className="nav-link"><a href="">About</a></li>
                <li className="nav-link"><a href="">Projects</a></li>
                <li className="nav-link"><a href="">Contact</a></li>
            </ul>
            <div id="convertBtn"><Convert /></div>
        </nav>
    </Wrapper>

    // <MWrapper>
    //   <nav>
    //     <div className="menu-btn">=</div>
    //     <div className="logo">Jhed</div>
    //     <Convert />
    //   </nav>
    //   <div className="drawer">
    //     <ul className="nav-links">
    //       <li id="close-btn">X</li>
    //       <li className="link">
    //         <a href="#">About</a>
    //       </li>
    //       <li className="link">
    //         <a href="#">Project</a>
    //       </li>
    //       <li className="link">
    //         <a href="#">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    // </MWrapper>
  );
};

export default Nav;
