# Box Model

- Fundamentos para fazer layouts para a web
- Maior facilidade para aplicar CSS

## O que é?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- width | height
- content
- border
- padding
- margin

*Cada elemento na sua página, será considerado uma caixa.*

## Box Sizing

Como será calculado o tamanho total da caixa?


Content-box
- Por padrão o tamanho é definido ao conteúdo(Content-box), então por exemplo, caso crie uma caixa com 10.0rem de largura e altura e depois um padding de 
0.1rem, a caixa no total vai ficar com 12rem de tamanho. 

border-box
```css
div{
  box-sizing: border-box;
}
```

- Já com o border-box será feito um calculo para que aplique o padding e permaneça com tamanho definido de 10rem de largura e altura. 

## Configuração para definir box-sizing a todos elementos.

- Com isso para definir box-sizing a todos elementos utilizamos o selector * 

```css
* {
  box-sizing: border-box;
}
```

## display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

| **block**                       | **inline**                     |
|---------------------------------|--------------------------------|
| Ocupa toda a linha, colocando o | Elemento ao lado do outro      | 
| próximo elemento abaixo desse   |                                |
|---------------------------------|--------------------------------|
| width e height são respeitados  | width e height não funcionam   |
|---------------------------------|--------------------------------| 
| padding, margin, border irão    | Somente valores horizontais de |
| funcionar normalmente.          | margin, padding e border       |
|---------------------------------|--------------------------------|

exemplos de tag: 
block: `<p> <div> <section>` todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>

## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length> | `<percentage>` | auto

```css
div{
  /*shorthand*/
  margin: 12px 16px 10px 4px;
  margin: 12px 16px 0;
  margin: 8px 16px;
  margin: 8px;
}
```
  * Cuidado com margin collapsing (top se ajunta ao bottom), caso tenha duas div, uma com margin-bottom e outra com margin-top, ambas com 8px na distância. Invés de somar e colocar 16px, elas vão ficar com 8px devido ao margin collapsing.

  Já em elementos inline ele soma os dois valores. 
  
  Cuidado também com USER AGENT, o navegador coloca 8px de margin por padrão

  Normalmente no Chrome.

reset
```css
{
  margin: 0;
}
```

## padding 

Preenchimento interno da caixa 

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length> | `<percentage>` | auto

```css
div{
  /*shorthand*/
  padding: 12px 16px 10px 4px;
  padding: 12px 16px 0;
  padding: 8px 16px;
  padding: 8px;
}
```
* Padding poderá causar diferenças na largura de um elemento

## border ( e outline)

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`
  - styled: solid | dotted | dashed | double | groove | ridge | inset | outset
  - width: `<length>`
  - color: `<color>`

```css
div {
  /*shorthand*/
  border-top: solid 2px; /* top | right | bottom | left */

  /* style */
  border: solid;

  /* width <length> | style */
  border: 2px dotted;

  /* style | color */
  border: outset #f33;

  /* width | style | color */
  border: medium dashed green;
}
```

## Exemplo 

```css
*{
  margin: 0;
}

div, section{
  width: 100px;
  height: 100px;
  margin: 20% auto;

  border: 20px solid red;
  border-top: double green 4px;
}
```

### E outline?

- difere em 4 sentidos:
  - Não modifica o tamanho da caixa, pois não é parte do Box Model
  - Poderá ser diferente de retangular 
  - Não permite ajuste individuais
  - Mais usado pelo user agent para acessibilidade



