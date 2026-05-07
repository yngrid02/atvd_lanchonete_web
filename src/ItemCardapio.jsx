function ItemCardapio(props) {
  return (
    <div style={props.estiloCard}>
      <h2 style={props.estiloTitulo}>{props.nome}</h2>

      <p style={props.estiloPreco}>
        R$ {props.preco.toFixed(2)}
      </p>
    </div>
  );
}

export default ItemCardapio;