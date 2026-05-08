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

# 1.
O valor muda iternamente, sem o react perceber, pois variaves normais nao renderizam novamente a interface.

# 2.
O numero total ficou no app.jsx, pois ele é o componente pai.

# 3.
pai envia uma função para o filho através das props, quando houver o clique o filho executa a função recebida, essa função pertence ao pai e o pai atualiza o estado.