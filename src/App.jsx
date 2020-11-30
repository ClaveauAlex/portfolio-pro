import "./App.scss";
import {FaFacebook, FaGithub, FaInstagram} from "react-icons/fa";
import {FiMail} from "react-icons/fi";

function App() {
  return (
    <div>
      <div className="nav-container">
        <nav>
          <img
            src="./images/logo_black.svg"
            alt="logo"
            style={{ width: "40px" }}
          />
          <ul>
            <li>
              <a href="/">À propos</a>
            </li>
            <li>
              <a href="/">Compétences</a>
            </li>
            <li>
              <a href="/">Expériences</a>
            </li>
            <li>
              <a href="/">Témoignages</a>
            </li>
          </ul>
          <button>Me contacter</button>
        </nav>
      </div>
      <div className="hero">
        <header>
          <h1>Freelance Developer | React</h1>
          <p>Je code des interfaces et j'aime ce que je fais.</p>
          <img src="../images/image-1.svg" alt="hero"></img>
        </header>
      </div>
      <div className="about-container">
        <section>
          <h2>Qui suis-je ?</h2>
          <p>Je m’appelle Alexandre Claveau et je suis domicilié en France.</p>
          <p>
            Je suis passionné par le développement et le design. C’est pourquoi,
            j’ai fait le choix de m’orienté dans la programmation Web.
            J’affectionne tout particulièrement les belles interfaces afin de
            rendre l’expérience plus agréable à l’utilisateur. Je suis très
            intéressé dans les recherches d’UX/UI avant de concevoir un projet.
            Ce qui est très important selon moi notamment dans l’application de
            la méthode Agile.
          </p>

          <p>
            Mes anciennes expériences professionnels m’ont permis de gagner en
            rigueur mais aussi de faire preuve d’autonomie et de curiosité. La
            communication est pour moi une notion très importante également dans
            notre domaine d’activité.
          </p>

          <p>
            C’est pourquoi, je peux être un élément intéressant pour vous dans
            la conception de votre projet. Aujourd’hui, je peux très bien
            intégrer vos équipes (Startups, TPE, PME, Grande Entreprise) afin de
            réaliser des projets ambitieux.
          </p>
        </section>
      </div>
      <div className="skills-container">
        <section>
          <h2>Compétences</h2>
          <div className="skills">
            <div>
              <img src="" alt="" />
              <h3>Web</h3>
              <p>Expertise front-end et back-end.</p>
              <h5>Technologies :</h5>
              <ul>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <img src="" alt="" />
              <h3>Design</h3>
              <p>Création de votre imagination.</p>
              <h5>Services :</h5>
              <ul>
                <li>Maquette Web</li>
                <li>Logos</li>
              </ul>
              <h5>Outils :</h5>
              <ul>
                <li>Figma</li>
                <li>Affinity Designer</li>
                <li>Affinity Photo</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="experiences-container">
        <h2>Expériences</h2>
        <div>
          <h3>Développeur Front-end</h3>
          {/* TODO: Faire la partie Expériences */}
        </div>
      </div>
      <div className="testimonials-container">
        <h2>Témoignages</h2>
        {/* TODO: Faire la partie témoignage */}
      </div>
      <div className="cta">
        <section>
          <h2>Vous souhaitez collaborer ?</h2>
          <p>
            Je suis toujours ouvert pour discuter des opportunités de projet ou
            de partenariat.
          </p>
          <button>Contactez moi</button>
        </section>
      </div>
      <div className="footer-container">
        <footer>
          <img
            src="./images/logo_white.svg"
            alt="logo"
            style={{ width: "40px" }}
          ></img>
          <p>Vivre, apprendre et progresser un jour à la fois.</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/alexandre-claveau/">
                <FaFacebook/>
              </a>
            </li>
            <li>
              <a href="https://github.com/ClaveauAlex">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alexandre_claveau.me/">
                <FaInstagram />
              </a>
            </li>
            <li>
              {/* Redirection vers la page Contact */}
              <a href="/">
                <FiMail />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
