# **CSI606-2021-01 - Remoto - Atividade Prática 01**
## *Aluno: Mateus Ferreira Martins - 17.2.8082

--------------
### Calculadora

  Para o primeiro exercício da atividade prática 01, foi implementada uma calculadora utilizando Javascript, HTML e CSS.

### 1. Funcionamento

  Basicamente, a aplicação funciona da seguinte maneira:

  * Ao clicar em uma botão que representa um número (0 a 9) ou operador (+ - * /), o "textContent" daquela tecla é
  automaticamente capturado e inserido no "textContent" do elemento que representa a tela da calculadora.

  * Para apagar o último número ou operador que foi digitado, basta clicar na tecla com o símbolo "<<", ou "CE" para apagar
  todos os números e operadores presentes na tela da calculadora. Isso é feito no backend simplesmente retirando a última
  posição da string do "textContent" da tela da calculadora ou definindo seu valor como uma string vazia.

  * Para processar o resultado de uma operação, basta clicar na tecla "=" (igual), e o resultado será mostrado na tela. Toda a operação
  é processada capturando o conteúdo do "textContent" da tela da calculadora, e então chama-se a função eval, que fica responsável por 
  executar os cálculos e retornar o valor correto da operação. Essa função também cuida da precedência de operações da matemática de maneira
  automática.

  * Uma vez que uma operação foi realizada, o valor dos números e operadores fica salvo  no campo "Última Operação", logo acima da tela principal
  da calculadora. Essa inspiração foi retirada da calculadora do Windows, que também apresenta essa função. Isso é feito simplesmente capturando
  o "textContent" da tela da calculadora no momento de processar uma operação e atualizando o campo "Última Operação".

### 2. Restrições

  A única restrição identificada foi o fato de a calculadora realizar somente as operações de soma (+), subtração (-), multiplicação (*) e divisão (/). 

### 3. Referências

  Como Criar uma SIMPLES CALCULADORA com HTML, CSS e JAVASCRIPT. Disponível em https://www.youtube.com/watch?v=42TShjXR0m0&ab_channel=GustavoNeitzke. Acesso em 27/10/2021.

  Mini projetos javascript (Iniciantes) - 06 Calculadora. Disponível em https://www.youtube.com/watch?v=oRZQ5EZOrQk&t=3304s&ab_channel=FernandoLeonid. Acesso em 27/10/2021.

  Flexbox. Disponível em https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox. Acesso em 26/10/2021.

  JavaScript: Programando na linguagem da web. Disponível em https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web. Acesso em 25/10/2021. Conteúdo exclusivo para assinantes da plataforma.
