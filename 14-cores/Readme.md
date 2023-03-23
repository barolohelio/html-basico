# Cores

Usamos o CSS para alterar cores do nosso documento.

## Tipos - PRESTA ATENÇÃO ZÉ

* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros...

## Valores

Podemos definir os valores por

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```css
{
 element {
  /* Keyword values */
  color: currentcolor;

  /* <named-color> values */
  color: red;
  color: blue;
  color: green;
  color: yellow;

  /* <hex-color> values 0-F */
  color: #090; /* RED GREEN BLUE */
  color: #009900;
  color: #090a;
  color: #009900aa;

  /* <rgb()> values 0-F */
  color: rgb(34,12,64,0.6); /* 0-255 */
  color: rgb(34,12,64,0.6);
  color: rgb(34 12 64 / 0.6);
  color: rgb(34 12 64 / 0.3);
  color: rgb(34.0 12 64 / 60%);
  color: rgb(34.6 12 64 / 30%);

  /* <hsl()>  values*/
  color: hsl(30, 100%, 50%, 0.6); /* Hue - Saturation - Lumiance */
  color: hsla(30, 100%, 50%, 0.6);
  color: hsl(30 100% 50% / 0.6);
  color: hsla(30 100% 50% / 0.6);
  color: hsl(30 100% 50% / 60%);
  color: hsla(30.2 100% 50% / 60%);
 } 
}
```

## Valores Globais

Pesquisar 

* color: initial; - Volta para a cor inicial - normalmente é preto
* color: inherit; - Herda a cor do elemento anterior 
* color: currentcolor; - Pega a cor do contexto, por exemplo a cor definida
  em uma <div></div>
* color: unset; - Não define a cor, nesse caso pega do contexto também

## REFERÊNCIA

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
