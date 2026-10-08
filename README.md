# Projeto NovaWeb Studio

Repositório inicial estruturado durante o treinamento de versionamento.

## Requisitos do Sistema 


# Projeto Nova-Web - Especificacoes de UI/UX

## 1. Usabilidade em Formularios

### Labels vs. Placeholders
As labels identificam permanentemente cada campo, enquanto os placeholders servem apenas como exemplos ou instrucoes. Na tela da NexTech, foram utilizadas labels como "E-mail" e "Senha", mantendo os placeholders apenas como orientacao.

### Hierarquia Visual
O botao principal "Entrar" possui maior destaque visual por ser a acao principal da tela. Acoes secundarias, como "Esqueci minha senha" e "Cadastre-se aqui", possuem menor destaque para nao competir com a acao principal.

## 2. Estados dos Campos

- **Default:** borda neutra e label visivel.
- **Focus:** destaque na borda para indicar que o campo esta selecionado.
- **Error:** borda vermelha acompanhada de uma mensagem explicando o problema.
- **Success:** indicador visual mostrando que o preenchimento esta correto.
- **Disabled:** contraste reduzido para indicar que o campo esta indisponivel.

## 3. Acessibilidade

- Utilizacao de contraste adequado entre textos e fundos.
- Navegacao dos campos por teclado utilizando a tecla Tab.
- Indicacao visual do campo que esta em foco.
- Labels associadas corretamente aos campos para facilitar o uso por leitores de tela.
- Mensagens de erro claras, sem depender somente de cores ou icones.

## Conclusao

A interface de login da NexTech foi desenvolvida buscando simplicidade, organizacao, usabilidade e acessibilidade, utilizando uma hierarquia visual clara e diferentes estados para orientar o usuario durante a autenticacao.

## Aula 09: UX de Tabelas de Dados e Telas de Perfil

### 1. Pesquisa Teórica - UX para Tabelas Corporativas

- **Alinhamento de Dados:**
  - Textos devem ser alinhados à esquerda.
  - Números e valores monetários devem ser alinhados à direita.
  - Status e ações rápidas podem ser centralizados.

- **Filtros e Busca:**
  - O campo de pesquisa principal deve ficar no topo da tabela para facilitar o acesso.
  - Filtros avançados podem ser agrupados em menus suspensos (dropdowns) para economizar espaço.

- **Hierarquia Visual:**
  - Utilização de cabeçalhos fixos (sticky header) em tabelas extensas.
  - Uso de zebra striping ou bordas sutis para facilitar a leitura das linhas.