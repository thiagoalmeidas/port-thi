import { FaCertificate } from 'react-icons/fa';

function Socials() {
    return (
            <div className="col d-md-block text-start ps-0">
                <div className="social-icon">
                    <a href="https://ead.recode.org.br/mod/simplecertificate/verify.php?code=62534e2a-aff4-475c-9ad2-37e80a010068" rel="noreferrer" title="Certificado" target="_blank">
                        <FaCertificate className="fa-lg"/> {/*<i className="fab fa-lg fa-facebook-f"></i>*/}
                    </a>
                    <a href="https://www.github.com/thiagoalmeidas" rel="noreferrer" title="GitHub" target="_blank">
                        <i className="fab fa-lg fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/thiago-almeida-76b72b142/" rel="noreferrer" title="LinkedIn" target="_blank">
                        <i className="fab fa-lg fa-linkedin "></i>
                    </a>
                </div>
            </div>
    );
}
export default Socials;