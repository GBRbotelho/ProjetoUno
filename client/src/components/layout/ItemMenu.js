import styles from "./ItemMenu.module.css";
import Imagem from "../imgs/rodada.png";

function ItemMenu(props) {
  return (
    <div className={styles.Placar}>
      <img src={Imagem} id={`imgRodada${props.idpontos}`} />
      <h1>{props.nome}</h1>
      <p id={`p${props.idpontos}`}>{props.pontos}</p>
      <input type="number" id={`input${props.idinput}`} />
    </div>
  );
}

export default ItemMenu;
