import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../Icons/index'
import {
  faDiagramProject,
  faEnvelope,
  faHome,
  faTent,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <Icon.duckLogo className="logoSvg" />
      </Link>
      <nav>
        <NavLink
          to="/"
          className={(navData) =>
            'home-link' + (!navData.isActive ? '' : ' active')
          }
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          end={true}
          to="/about"
          className={(navData) =>
            'about-link' + (!navData.isActive ? '' : ' active')
          }
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          end={true}
          to="/projects"
          className={(navData) =>
            'projects-link' + (!navData.isActive ? '' : ' active')
          }
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
        </NavLink>

        <NavLink
          end={true}
          to="/contact"
          className={(navData) =>
            'contact-link' + (!navData.isActive ? '' : ' active')
          }
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/benpferreira/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JeffJeffery"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
