# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão distribuídos 
na tela

## Normal flow

Ou Flow Layout é a maneira que os elementos `block` e `inline`
ficam na página

```html
<p> Texto block com <strong>inline</strong> dentro </p>
```

## Tables 

É a maneira de tabelas onde a tag `table` recebe um display `table`
fazendo com que os elementos internos como `td` e `tr` possam ser usados
para montar uma tabela


É a maneira de tabelas onde a tag `table` recebe um display `table`
fazendo com que os elementos internos como `td` e `tr` possam ser usados para 
montar uma tabela

```html
<table>
  <tr>
    <td> Hora </td>
    <td> 08:21 </td>
  </tr>
  <tr>
    <td> Hora </td>
    <td> 08:59 </td>
  </tr>
</table>
```

## Tabless

Uso das propriedades `float` e `clear` para que os elementos possam mudar de 
posição na tela.

```html
<div style="float: left">
  esquerda
</div>

<div style="float: right">
  direita
</div>

<div style="clear: both">
  normal
</div>
```

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber
melhor:

- Alinhamento
- Ordenação
- Tamanhos flexíveis

```css
.flebox{
  display: flex;
  justify-content: space-around;
}
```

- Com display flex os itens ficam um ao lado do outro e com justify-content
  eles ficam com espaçamento um do outro ocupando toda a tela. 

```html
<div class="flexbox">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

## flex-direction: column

```css
.flebox{
  display: flex;
  flex-direction: column;
}

.item:nth-child(1){
  order: 1;
}
```

- Com display flex os itens ficam um ao lado do outro e com flex-direction
  column eles voltam a se ordenar um abaixo do outro.

- Já o .item:nth-child(1){
  order: 1;
}

Faz com que o primeiro elemento fique com ordenação de 1, e os outros dois com 0
sendo assim a sequência se altera para B=0 C=0 e A=1. Por isso o A é o ultimo elemento.  

```html
<div class="flexbox">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

## Termologia 

- Flex Container
  Flex item
- Nesting
- Axis
  - main
    - start, end
  - cross
    - start, end
- Flex sizing
  - flexível
  - altera width/dos itens para preenchimento dos espaços do flex container

```css
{
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
  }
}
```

- Flex container é uma caixa utilizando display flex já os elementos dentro dela são os flex itens. 
- Já o Nesting são elementos que vivem dentro de outros elementos, muito utilizado no html
- Eixo cruzado é quando mudamos o eixo utilizando o flex direction, conforme
o exemplo de código acima. 

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

## Flex sizing

- Altera a largura e altura dos intens para preenchimento dos espaços do flex container.

```css
 .container {
  display: flex;
  border: 1px solid red;
  height: 200px;
 }

 .item{
  background-color: gray;
  border: 1px solid;
  flex: 1;
 }
```

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

# Propriedades do flex container

* Direção dos itens 
* Multi linhas
* alinhamento
  * principal
  * cruzado
* espaços entre os itens
