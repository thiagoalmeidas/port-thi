import Socials from '../socials';
import Menu from '../menu';
import Logo from '../logo';

function Nav() {
    return (
        <nav className="navbar navbar-default bootsnav bg-transparent navbar-top nav-box-width navbar-transparent-no-sticky">
            <div className="container-fluid nav-header-container h-100px sm-h-70px">
                <Socials />
                <Logo />
                <Menu />
            </div>
        </nav>
    );
}

export default Nav;