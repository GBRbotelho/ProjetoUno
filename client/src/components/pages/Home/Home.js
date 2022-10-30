import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.inicio}>
      <label>Vamos iniciar o jogo?</label>
      <a href="/game">
        <button>Começar</button>
      </a>
    </div>
  );
}

export default Home;
