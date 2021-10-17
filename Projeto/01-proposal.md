# **CSI606-2021-01 - Remoto - Proposta de Trabalho Final**
## *Aluno: Mateus Ferreira Martins

--------------
### CRV (Controle de Revisão Veicular)

  Um veículo moderno é composto por milhares de peças, que mais cedo ou mais tarde,
  precisarão de algum tipo de reparo ou até mesmo reposição. Pensando em toda essa
  complexidade, foi idealizado o CRV, a fim de ajudar proprietários de veículos a 
  gerenciarem seu(s) automóvel(eis) de maneira mais eficiente, prezando sempre pela
  manutenção preventiva, em detrimento da manutenção corretiva. O sistema conta
  com CRUD completo de veículos de um único dono, registro de revisões às quais um
  veículo foi submetido, além de fornecer dados acerca de próximas revisões a serem realizadas.
  Como bônus, este sistema pode ser usado por donos de oficinas, como um histórico de todas as
  revisões que determinado veículo realizou em seu estabelecimento.

### 1. Tema

  O trabalho final tem como tema o desenvolvimento de uma aplicação Web, na qual proprietários 
  de veículos (e donos de oficinas) conseguem ter controle acerca de dados relativos à revisões passadas e futuras 
  realizadas em seus automóveis.

<!-- Descrever e limitar o escopo da aplicação. -->
### 2. Escopo

  Este projeto terá as seguintes funcionalidades:

  * CRUD Completo de Veículos: Além de fornecer dados básicos para os proprietários e donos de oficinas acerca 
  dos veículos, o cadastro dos automóveis é de extrema importância para que cada revisão possa ser associada a
  somente um veículo. Cada automóvel possui dados como: Modelo, Marca, Placa, Ano de Fabricação, N° de Chassi, etc.

  * CRUD de Revisões: Essa funcionalidade ajuda a fornecer um histórico de revisões de um determinado automóvel.
  Para cada revisão, são registrados dados como: Data, Local, Valor total, Automóvel que realizou a revisão,
  KM do automóvel, Peças (além de suas respectivas quantidades e valores) substituídas, serviços executados, etc.

  * Tabela de Controle: Essa tabela informa qual o intervalo (em KM ou tempo) para a checagem ou substituição de
  determinado componente do automóvel. Os dados acerca do serviço ou peça, assim como a data e km da checagem/substituição
  serão inseridos pelo usuário, e com base nesses dados, será informado a data ou KM da próxima checagem/substituição, assim
  como o status relativo à manutenção do componente ("OK" ou "ATRASADO").

<!-- Apresentar restrições de funcionalidades e de escopo. -->
### 3. Restrições

  Neste trabalho não será considerada a possibilidade de múltiplos usuários, ou seja, login. Outra restrição importante é que
  os dados da Tabela de Controle terão que ser preenchidos e atualizados manualmente pelo usuário. Tendo em vista que a atualização
  automática desses dados acrescentaria uma camada extra de complexidade, no momento, isso é apenas uma vaga possibilidade, mas que 
  será reavaliada a medida que o trabalho for sendo desenvolvido. 

<!-- Construir alguns protótipos para a aplicação, disponibilizá-los no Github e descrever o que foi considerado. //-->
### 4. Protótipo

  Protótipos para as páginas (Principal, CRUD de Veículos, CRUD de revisões e Tabela de Controle) foram elaborados, e podem ser encontrados
  em https://www.figma.com/file/f5nQwGTYMKSlRydv8EI3Bw/Trabalho-Pr%C3%A1tico---Web-I?node-id=6%3A7

### 5. Referências

  Até o momento, não existem referências.
