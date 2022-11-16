**Donus Code Challeng**

[x] Para abrir uma conta é necessário apenas o nome completo e CPF da pessoa, mas só é permitido uma conta por pessoa;

[x] Com essa conta é possível realizar transferências para outras contas e depositar;

[x] Não aceitamos valores negativos nas contas;

[x] Por questão de segurança cada transação de depósito não pode ser maior do que R$2.000;

[x] As transferências entre contas são gratuitas e ilimitadas;

# Primeiros passos

<ol>
  <li>Clone essse repositório <strong>git clone https://github.com/jorgepzs/donus-code-challenge.git</strong></li>
  <li>Instale as dependências <strong>npm install</strong></li>
  <li>Crie um arquivo .env **na raíz do projeto** com o seguinte conteúdo: MONGO_URL=mongodb+srv://user_tester:1234@cluster0.nwsnovi.mongodb.net/donus_dev
**</strong></li>
  <li>Rode o Projeto <strong>npm run start</strong></li>
  <li>**OBS:** foi criado um cluster em nuvem, portanto não é necessário configurar bando de bados, esse usuário inspira no dia 23/11/2022.</li>
</ol>

# Rodar os testes de integração

  <li>Crie um arquivo .env.local **na raíz do projeto** com o seguinte conteúdo: MONGO_URL=mongodb+srv://user_tester:1234@cluster0.nwsnovi.mongodb.net/tests
</li>
  <li>Rode os testes<strong>npm run test</strong></li>
