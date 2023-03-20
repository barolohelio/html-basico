# Valores e unidades de medida

* cada propriedade possui valores `property: value`
* estudo constante a fim de entender as propriedades e seus valores

## Prática 

* como conhecer e estudar os valores na documentação.
  * <color> <length>
* os termos podem variar. `<values> ou `data types`

# Tipos numéricos 

* <integer>       Número inteiro como -10 ou 223
* <number>        Número decimal como -2.4, 64 ou 0.234
* <dimension>     É um <number> com uma unidade junto: 90deg, 2s, 8px
* <percentagem>   Representa a fração de outro número: 50%

## Unidades comuns

* <length>        Representa um valor de distâncias: px, em, vw
* <angle>         Representa um ângulo: deg, rad, turn
* <time>          Representa um tempo: s, ms
* <resolution>    Representa resoluções para dispositivos: dpi

## Distâncias absolutas <length>

São fixas e não alteram seu valor.

Unidade   Nome                  Equivalência 
cm        Centímetros           1cm = 96px/2.54
in        Inches (polegadas)    1in = 2.54cm = 96px
px        Pixels                1px = 1/96th of 1in

* o mais comum e mais utilizados é o **px**
* não recomendado usar cm

## Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

* Benefício: Maior adaptação aos diferentes tipos de tela

Unidade   Relativo a 
em        Tamanho da font do pai.
rem       Tamanho da font do elemento raiz (root/html)
vw        1% da viewport width
vh        1% da viewport height

## Percentagens %

* Em muitos casos é tratada da mesma maneira que as distâncias <length>
* Sempre será relativo a algum valor

### Exemplo

* No exemplo abaixo ele está utilizando 50% do valor guardado no browser que é de 16px -> 50% = 8px

```css
html{
  font-size: 50%;
}
```



