import { Link } from 'react-router-dom';

function Socials() {
    return (
            <div className="col d-none d-md-block text-start ps-0">
                <div className="social-icon">
                    <Link to="/" title="Facebook" target="_blank"><i className="fab fa-facebook-f"></i></ Link>
                    <a href="https://www.github.com/thiagoalmeidas" rel="noreferrer" title="GitHub" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/thiago-almeida-76b72b142/" rel="noreferrer" title="LinkedIn" target="_blank"><i className="fab fa-linkedin "></i></a>
                </div>
            </div>
    );
}
export default Socials;