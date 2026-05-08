import { useState } from "react";
import ItemCardapio from "./ItemCardapio";

function App() {
  const [totalPedido, setTotalPedido] = useState(0);

  const cardapio = [
    { id: 1, nome: "X-Burguer", preco: 18.90 },
    { id: 2, nome: "X-Salada", preco: 20.50 },
    { id: 3, nome: "Batata Frita", preco: 15.00 },
    { id: 4, nome: "Refrigerante", preco: 7.00 },
    { id: 5, nome: "Milk Shake", preco: 14.50 },
  ];

  function adicionarPedido() {
    setTotalPedido(totalPedido + 1);
  }

  return (
    <div
      style={{
        color: "#000",
        backgroundColor: "#fff9c4",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
        
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#000",
        }}
      >
        Cardápio da Lanchonete
      </h1>

      <h2
        style={{
          color: "#000",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Total de itens no pedido: {totalPedido}
      </h2>

      <div
        style={{
          display: "grid",
          color: "#000",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {cardapio.map((item) => (
          <ItemCardapio
            key={item.id}
            nome={item.nome}
            preco={item.preco}
            adicionarPedido={adicionarPedido}
          />
        ))}
      </div>
    </div>
  );
}

export default App;