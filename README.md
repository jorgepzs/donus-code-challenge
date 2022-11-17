# Donus Code Challeng

[x] Para abrir uma conta é necessário apenas o nome completo e CPF da pessoa, mas só é permitido uma conta por pessoa;

[x] Com essa conta é possível realizar transferências para outras contas e depositar;

[x] Não aceitamos valores negativos nas contas;

[x] Por questão de segurança cada transação de depósito não pode ser maior do que R$2.000;

[x] As transferências entre contas são gratuitas e ilimitadas;

# Primeiros passos

<ol>
  <li>Clone essse repositório <strong>git clone https://github.com/jorgepzs/donus-code-challenge.git</strong></li>
  <li>Instale as dependências <strong>npm install</strong></li>
  <li>Crie um arquivo .env **na raíz do projeto** contento da variavel MONGO_URL para desenvolvimento. 
</strong></li>
  <li>Rode o Projeto <strong>npm run start</strong></li>
</ol>
<li>OBS foi criado um cluster em nuvem, portanto não é necessário configurar banco de bados,foi enviado no conteudo do email o usuario. Esse usuário inspira no dia 23/11/2022.</li>

# Rodar os testes de integração

  <li>Crie um arquivo .env.test **na raíz do projeto** contento a variável de ambiente MONGO_URL para testes.
</li>
  <li>Rode os testes <strong>npm run test</strong></li>
