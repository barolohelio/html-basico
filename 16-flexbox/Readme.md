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

## Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)

```css
.container {
  display: flex;
  flex-direction: column;
}
```
- Display flex tem por padrão sua direção em linha row | flex-direction: row;
- Linha reversa que é lida da direita pra esquerda igual Árabe ou Manga né |      flex-direction: row-reverse;
- Podemos mudar para coluna | flex-direction: column;
- Já em coluna reversa de baixo para cima | flex-direction: column-reverse;

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

## flex-wrap

- Podemos usar multi linhas
- Cada nova linha, um novo elemento flex container

```css
.box {
  display: flex;
  flex-wrap: wrap;
  border: 1px dashed red;
}
.box div{
  border: 1px solid;

  width: 90px;
}
```

- Com o flex wrap, caso não tenha espaço na linha para todos os conteúdos, ele vai criar uma nova linha. Como se fosse um novo eixo main(Horizontal)

- Podendo inverter a ordem dos conteúdos com o flex-wrap: wrap-reverse;

```html
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
</div>
```

# flew-flow 

- shorthand
- flex-direction || flex-wrap

```html
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
</div>
```

- Posso colocar uma ou mais propriedades no flex flow
  - flex-flow: column; - Ele está fazendo a função do flex-direction
  - flex-flow: wrap; - função do flex-wrap; 
- Com mais de uma propriedade:
  - flex-flow: column wrap;
  - flex-flow: row wrap;

```css
.box{
  display: flex;
  flex-flow: column;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  width: 80px;
}
```

## justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

## valores

- flex-start
  - Inicio do eixo
- flex-end
  - Final do eixo
- center
  - Centralizado do eixo
- space-around
  - espaço por igual ao redor dos itens
- space-between
  - espaço entre eles, o primeiro fica colado a esq e ultimo colado a direita
- space-evenly
  - espaço por igual entre os conteúdos

* Observação caso o flex-direction esteja configurado com column o eixo vai estar na vertical e não no padrão main(Horizontal)

```css
.box{
  display: flex;
  border: 1px dashed red;
  justify-content: flex-start;
}

.box div{
  border: 1px solid;
}

```

```html
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```

## align-items

- Alinhamento dos elementos no eixo cruzado

### valores

- stretch
  - Os filhos esticados no eixo cruzado(Vertical) 
- flex-start
  - Deixa os elementos no começo do eixo cruzado(Vertical)
- flex-end
  - Deixa os elementos no final do eixo cruzado(Vertical)
- center
  - Deixa os elementos no 

* OBS: caso coloque flex-direction: column;  o eixo cruzado será na Horizontal. 

```css
.box{
  display: flex; 
  align-items: stretch;

  border: 1px dashed red;
  height: 150px;
}

.box div{
  border: 1px solid;
}
```

```html
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D </div> 
</div>
```

## gap

- Espaços entre os elementos.

### valores

Unidade de medidas
fixas: px, pt
flexíveis: %, em, rem

```css
.box{
  display: flex; 
  border: 1px dashed red; 
  gap: 2px;
}

.box div{
  border: 1px solid;
}
```

```html
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```