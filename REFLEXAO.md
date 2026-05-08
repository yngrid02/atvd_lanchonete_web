# 1. 
Se repete muitos estilos inline, como color e style em todos os elementos, o app está muito grande por er tudo em uma arquivo só.
# 2. 
Se tivesse 30 itens o const cardápio ficaria enorme, mas mesmo assim com o map() rodaria/funcionaria tranquilo, com ele eu não preciso criar 30 < div >.


# 1.
O código ficou menor, ficou mais estilizado com apenas a chamada de estilização no app e mais simples.
# 2. 
Muda só no  backgroundColor: "#fff9c4", dentro de div style.
# 3. 
Os dados chegaram no componente através das props, que chama o itemCardapio, no app eu ja enviei as informações.