import styles from "./Navbar.module.css";
import Logo from "../imgs/Logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={Logo} />

      <ul className={styles.nav_links}>
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className={styles.hamburger}>
          &#9776;
        </label>

        <div className={styles.menu}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">SOBRE</a>
          </li>
          <li className={styles.services}>
            <a href="/">PROJETOS</a>

            <ul className={styles.dropdown}>
              <li>
                <a href="/">Menu suspenso 1 </a>
              </li>
              <li>
                <a href="/">Menu suspenso 2</a>
              </li>
              <li>
                <a href="/">Menu suspenso 2</a>
              </li>
              <li>
                <a href="/">Menu suspenso 3</a>
              </li>
              <li>
                <a href="/">Menu suspenso 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">CONTATO</a>
          </li>
          <li>
            <a href="/">LOGIN</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
