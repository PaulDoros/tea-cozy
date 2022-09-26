
import { bubble as Menu } from 'react-burger-menu'

const Nav = () => (
    <>
        <div className="nav-bar">
            <div><img className="logo" src="/images/tealogo.png" alt="logo" /></div>
            <div className="nav-text">
                <div> <a id="home" className="menu-item" href="/">Mission</a></div>
                <div> <a id="about" className="menu-item" href="/about">Featured Tea</a></div>
                <div> <a id="contact" className="menu-item" href="/contact">Locations</a></div>

            </div>
        </div>

        <Menu width={'100vw'} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} id='bubble'>

            <a id="home" className="menu-item" href="/"><img className="logo" src="/images/tealogo.png" alt="logo" /></a>
            <a id="home" className="menu-item" href="/">Mission</a>
            <a id="about" className="menu-item" href="/about">Featured Tea</a>
            <a id="contact" className="menu-item" href="/contact">Locations</a>

        </Menu>

    </>

);


export default Nav;
