import ItemCardapio from "./ItemCardapio.jsx";

function App() {
  const cardapio = [
    { id: 1, nome: "X-Burguer", preco: 18.90 },
    { id: 2, nome: "X-Salada", preco: 20.50 },
    { id: 3, nome: "Batata Frita", preco: 15.00 },
    { id: 4, nome: "Àgua", preco: 7.00 },
    { id: 5, nome: "Milk Shake", preco: 14.50 },
  ];

  const estiloCard = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    color: "#000",
  };

  const estiloTitulo = {
    color: "#000",
  };

  const estiloPreco = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000",
  };

  return (
    <div
      style={{
        backgroundColor: "#fff9c4",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
        color: "#000",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#000",
        }}
      >
        Cardápio da Lanchonete
      </h1>

      <div
        style={{
          display: "grid",
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
            estiloCard={estiloCard}
            estiloTitulo={estiloTitulo}
            estiloPreco={estiloPreco}
          />
        ))}
      </div>
    </div>
  );
}

export default App;