import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const title = "¡Bienvenidos!";

  function hacerAlgo() {
    alert("Hacenos tu pedido");
  }

  const miEstilo = {
    backgroundColor: "#f7bd56",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <div>
      <NavBar />
      <div style={miEstilo} className="catalogo">
        <Card
          img="/img/letras.jpg"
          title="Letras"
          price={35000}
          detail="Letras Coorporeas"
        />
        <Card
          img="/img/lona.jpg"
          title="Lona"
          price={17000}
          detail="Carteles de lona"
        />
        <Card
          img="/img/vinilo.jpg"
          title="Vinilos"
          price={12000}
          detail="Vinilos para vidrios"
        />
      </div>

      <button onClick={hacerAlgo}>Hace tu pedido</button>

          </div>
  );
}

export default App;
