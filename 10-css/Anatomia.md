# Anatomia

```css
h1{
  color: blue;
  font-size: 60px;
  background: gray;
}
```
* Selector
* Declaration
* Properties
* Property Value

# Selectors 

Conecta um elemento HTML com o CSS

## Tipos 

* Global selector `*`
* Element/Type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4
* Attribute selector, Pseudo-class, Pseudo-element, e outros

# Caixas 

* Você irá perceber que (quase) tudo são caixas do CSS
* Posicionamentos, tamanhos, espaçamentos, bordas, cores
* Caixa pode ficar ao lado uma da outra, ou cima
* Elementos HTML são caixas

# Adicionando CSS

## inline

* atributo na tag HTML 
<div style="background-color: red; color: #FFFFFF;">

## <style> dentro do HTML, normalmente é colocado dentro da tag <head>

* tag html que irá conter o css

## <link>

* arquivo de css externo

## @import

* arquivo css externo

# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento. 

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline > tag style > tag link

### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

### A regra !important

* cuidado, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata

# At-rules

* Está relacionado ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns 

- @import /* incluir um CSS externo */
- @media /* regras condicionais para dispositivos */
- @font-face /* fontes externas */
- @keyframes /* Animation */

@import url("http://fonts.googleapis");

@media (min-width: 500px){
  /* rules here */
}

@font-face{
  /* rules here */
}

@keyframes nameofanimation{
  /* rules here */
} 

```

