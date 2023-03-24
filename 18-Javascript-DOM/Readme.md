# DOM (Document Object Model)

* É o HTML convertido para um Objeto Javascript
* API que representa e interage com o HTML
* Estrutura de dados do tipo árvore, criada pelo browser
* Propriedades e métodos

# Para que?
* Javascript usa a DOM para se conectar ao HTML
* Manipular o HTML com o javascript
* Você só programa pra WEB porque existe a DOM

* Exemplo 

## Estrutura

O DOM é como uma árvore genealógica, porém, de forma invertida. O elemento que antecede o document é o window, que nada mais é que a janela do navegador. Em sua estrutura, o document está no topo como objeto global e tem como elemento raiz a tag html e todas as outras descendem dela através das suas ramificações (branchs).

A tag html, objeto pai, apresenta dois objetos filhos: o head e o body (o cabeçalho e o corpo). Os objetos que seguem nas ramificações de baixo são denominados como child, e os de cima, parent. A tag head é parent da tag title, e a body é parent das tags a e h1, e assim sucessivamente, de acordo com a hierarquia. Das tags, derivam os atributos, e destes, seus valores.

