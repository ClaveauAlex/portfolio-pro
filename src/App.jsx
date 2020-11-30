import "./App.scss";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function App() {
  return (
    <div>
      <div className="navbar-container">
        <nav>
          <a href="/">
            <img
              src="./images/logo_white.svg"
              alt="logo"
              className="logo"
            />
          </a>
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
              <h4>Technologies :</h4>
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
              <h4>Services :</h4>
              <ul>
                <li>Maquette Web</li>
                <li>Logos</li>
              </ul>
              <h4>Outils :</h4>
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
          <img src="../images/olympp.svg" alt="Olympp" />
          <h4>Développeur Front-end</h4>
          <p>2019-2020</p>
          <p>9 mois</p>
          <p>Levallois-Perret (92)</p>
          <p>
            J'ai intégré une équipe au sein de la DSIRH de L’Oréal afin de
            développer un outil interne. Celui-ci permet de gérer les
            différentes formations proposées aux collaborateurs de chez L’Oréal.
          </p>
        </div>
        <div>
          <img src="../images/it-ce.png" alt="ITCE" />
          <h4>Alternant Développeur Front-end</h4>
          <p>2018-2019</p>
          <p>1 an</p>
          <p>Rennes (35)</p>
          <p>
            Maintenance et évolutions sur un outil dédié aux professionnels du
            groupe BPCE. De plus j'ai pu également développer un outil de
            démonstration afin de promouvoir l'étendu de CE net aux différents
            clients du groupe.
          </p>
        </div>
        <div>
          <img src="../images/arkea.svg" alt="ARKEA" />
          <h4>Alternant Développeur Front-end</h4>
          <p>2016-2017</p>
          <p>1 an</p>
          <p>Brest (29)</p>
          <p>
            J'ai réalisé le développement de solutions innovantes à usage
            interne et à destination des clients finaux du Crédit Mutuel ARKEA
            (des outils de monitoring, des outils utilisés par des
            téléopérateurs, une solution de génération automatique de tests et
            des nouvelles fonctionnalités à destination des clients finaux).
          </p>
        </div>
        <div>
          <img src="../images/arkea.svg" alt="ARKEA" />
          <h4>Stage Développeur Service Banque à Distance</h4>
          <p>2016</p>
          <p>7 semaines</p>
          <p>Brest (29)</p>
          <p>
            J’ai travaillé sur une application web de gestion des formulaires
            remplis par des clients ou des prospects.
          </p>
        </div>
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
                <FaFacebook />
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
          <p>
            Alexandre Claveau © {new Date().getFullYear()} tous droits réservés.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
