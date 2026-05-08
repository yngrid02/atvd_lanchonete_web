function ItemCardapio(props) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        color: "#000",
      }}
    >
      <h2>{props.nome}</h2>

      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        R$ {props.preco.toFixed(2)}
      </p>

      <button
        onClick={props.adicionarPedido}
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Adicionar ao pedido
      </button>
    </div>
  );
}

export default ItemCardapio;