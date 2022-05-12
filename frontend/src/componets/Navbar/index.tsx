import {ReactComponent as GitjubIcon} from 'assets/img/github.svg';
import './styles.css';

function NavBar() {

    return (
        <header>
        <nav className='container'>
          <div className='dsmovie-nav-content'>
            <h1>G7 Academia</h1>
            <a href="https://github.com/Renan-Paiva93">
              <div className='dsmovie-contact-container'>
                <GitjubIcon />
                <p className='dsmovie-contact-link'>/devsuperior</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;