import ItemMenu from "../../layout/ItemMenu";
import styles from "./Game.module.css";
import React from "react";
import ReactDOM from "react-dom";

function Game() {
  var qntJog;
  var divJog;
  var divNome;
  var divPlacar;
  var nomeJog = [];
  var pontosJog = [];
  var idPontos = [];
  var idInput = [];
  var pontos = [];
  var soma = [];
  var eliminado = [];
  var contador = 0;
  var muda = 0;
  var div;

  var c = 0;

  function jogador() {
    divJog = document.getElementById("divJog");
    qntJog = document.getElementById("jogadores").value;
    divNome = document.getElementById("divNome");
    divJog.style.display = "none";
    divNome.style.display = "flex";
  }

  function loopNome() {
    nomeJog[c] = document.getElementById("nome").value;
    pontosJog[c] = 0;
    idPontos[c] = c;
    idInput[c] = c;
    eliminado[c] = 0;

    if (c + 1 < qntJog) {
      c = c + 1;
      div = document.getElementById("labelNome").innerText =
        "Digite o nome do jogador n°" + (c + 1);
    } else {
      divNome.style.display = "none";
      exibirPlayers();
    }
  }

  function exibirPlayers() {
    for (c = 0; c < qntJog; c++) {
      ReactDOM.render(
        <ItemMenu
          nome={nomeJog[c]}
          pontos={pontosJog[c]}
          idinput={idInput[c]}
          idpontos={idPontos[c]}
        />,
        (divPlacar = document.getElementById(`placar${c}`))
      );
    }
    document.getElementById("imgRodada0").style.visibility = "visible";
    document.getElementById("divPlacar").style.display = "flex";
  }

  function somarPontos() {
    for (var y = 0; y < document.getElementById("jogadores").value; y++) {
      pontos[y] = document.getElementById(`p${y}`);
      soma[y] = document.getElementById(`input${y}`);
      if (soma[y].value == "") {
        soma[y].value = "0";
      }
      pontos[y].textContent =
        parseInt(pontos[y].innerText) + parseInt(soma[y].value);
      soma[y].value = "";

      //verifica se alguem foi eliminado
      if (pontos[y].innerText >= 500) {
        elimina(soma[y]);
        eliminado[y] = 1;
      }

      //Determina quem da as cartas
      if (contador == y) {
        document.getElementById(`imgRodada${contador}`).style.visibility =
          "hidden";
      }
    }
    if (contador >= document.getElementById("jogadores").value - 1) {
      contador = 0;
      document.getElementById(`imgRodada${contador}`).style.visibility =
        "visible";
    } else {
      contador = contador + 1;
      document.getElementById(`imgRodada${contador}`).style.visibility =
        "visible";
    }
    console.log(contador);
    for (c = 0; c < 2; c--) {
      if (eliminado[contador] == 0) {
        break;
      } else {
        document.getElementById(`imgRodada${contador}`).style.visibility =
          "hidden";
        if (contador >= document.getElementById("jogadores").value - 1) {
          contador = 0;
          document.getElementById(`imgRodada${contador}`).style.visibility =
            "visible";
        } else {
          contador = contador + 1;
          document.getElementById(`imgRodada${contador}`).style.visibility =
            "visible";
        }
      }
    }
    console.log(contador);
    var Rodada = document.getElementById("nRodada");
    Rodada.textContent = parseInt(Rodada.innerText) + 1;
  }

  function elimina(input) {
    input.readOnly = true;
    input.style.background = "red";
  }

  return (
    <div className={styles.Game}>
      <div className={styles.Jogador} id="divJog">
        <label>Quantos jogadores ?</label>
        <input type="number" id="jogadores" />
        <button onClick={jogador}>OK</button>
      </div>

      <div className={styles.Nome} id="divNome">
        <label id="labelNome">Digite o nome do jogador n°{c + 1}</label>
        <input type="text" id="nome" />
        <button onClick={loopNome}>OK</button>
      </div>

      <div className={styles.PlacarPontos} id="divPlacar">
        <div className={styles.Rodada}>
          <h1>Rodada:</h1>
          <h1 id="nRodada">1</h1>
        </div>
        <div className={styles.Placar}>
          <div id="placar0"></div>
          <div id="placar1"></div>
          <div id="placar2"></div>
          <div id="placar3"></div>
          <div id="placar4"></div>
          <div id="placar5"></div>
          <div id="placar6"></div>
          <div id="placar7"></div>
          <button onClick={somarPontos}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
