# Cota Real – Aplicação Web

Cota Real é a aplicação web desenvolvida com **Next.js (React)** que consome a API Cota Real para exibição e gerenciamento de moedas.

A aplicação permite visualizar a cotação do dólar em tempo real, favoritar moedas e autenticar usuários para acesso às funcionalidades protegidas.

---

## Tecnologias Utilizadas

- React
- TypeScript
- API Cota Real (NestJS)

---

## Funcionalidades

### Home

- Exibição do gráfico da cotação do dólar (USD → BRL) em tempo real.
- Listagem de moedas.
- Sistema de favoritos:
  - O usuário pode clicar na estrela para favoritar uma moeda.
  - Moedas favoritadas são movidas automaticamente para o topo da listagem.

---

### Autenticação

#### Cadastro
- Nome
- Email
- Senha

#### Login
- Email
- Senha

Após autenticação, o usuário recebe um token JWT utilizado para acessar rotas protegidas da API.

---

## Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- API Cota Real em execução

### Clone o repositório

### Configure as variáveis de ambiente
Crie um arquivo .env.local na raiz do projeto:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_COINS=https://economia.awesomeapi.com.br/json/daily/USD-BRL/30
```
### Execute o projeto
   ```bash
   docker compose up --build -d
   ```


