<table align="right">
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![luk4x-repo-status](https://img.shields.io/badge/status-developing-lightgrey?style=for-the-badge&logo=headspace&logoColor=yellow&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/apple-store?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
## Plataforma de cobrança 

<br>
<p align="center">
  <a href="#-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-etapas">Etapas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-páginas-e-rotas">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-demais-componentes">Componentes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  
</p>
<br>




## 🚀 Tecnologias Utilizadas

> Abaixo estão as 8 tecnologias utilizadas no desenvolvimento do projeto, e o motivo de usá-las.

<table align="center">
  <tr>
     <td align="center">
      <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-O-B%C3%A1sico-do-Git">
        <img src="https://skillicons.dev/icons?i=git" width="65px" alt="NodeJs icon"/><br>
        <sub>
          <b>
            <pre>GIT</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Facilidade no controle de versões e trabalho em equipe.</i>
        </details>
      </h6>
    </td>
     <td align="center">
      <a href="https://mui.com/material-ui/getting-started/">
        <img src="https://skillicons.dev/icons?i=materialui" width="65px" alt="NodeJs icon"/><br>
        <sub>
          <b>
            <pre>MaterialUI</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Agilidade na construção de designs limpos.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://www.postgresql.org/docs/">
        <img src="https://skillicons.dev/icons?i=postgres" width="65px" alt="NodeJs icon"/><br>
        <sub>
          <b>
            <pre>postgres</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Confiabilidade, desempenho e durabilidade.</i>
        </details>
      </h6>
    </td>
     <td align="center">
      <a href="https://docs.npmjs.com/">
        <img src="https://skillicons.dev/icons?i=nodejs" width="65px" alt="NodeJs icon"/><br>
        <sub>
          <b>
            <pre>Node</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Como ele usamos o javascript no servidor.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/">
        <img src="https://skillicons.dev/icons?i=js" width="65px" alt="Javascript icon"/><br>
        <sub>
          <b>
            <pre>Javascript</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Ele é a base do React.js.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/">
        <img src="https://skillicons.dev/icons?i=css" width="65px" alt="CSS3 icon"/><br>
        <sub>
          <b>
            <pre>CSS3</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Usado para deixar as páginas estilizadas.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/">
        <img src="https://skillicons.dev/icons?i=html" width="65px" alt="HTML5 icon"/><br>
        <sub>
          <b>
            <pre>HTML5</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Usado para estruturar as páginas.</i>
        </details>
      </h6>
    </td>
     <td align="center">
      <a href="https://pt-br.reactjs.org/">
        <img src="https://skillicons.dev/icons?i=react" width="65px" alt="React icon"/><br>
        <sub>
          <b>
            <pre>ReactJS</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Performace e agilidade na construção das páginas</i>
        </details>
      </h6>
    </td>
  </tr>
</table>

## 🗓️ Etapas
<details open="">
<summary><h1> 1ª Sprint</h1></summary>
<br>

<details>
<summary><b>[Usuário] Cadastro do usuário</b></summary>
<br>
<h3 >Nessa etapa, o usuário realizará o cadastro para obter acesso ao sistema</h3>
<hr>
    <ul>
        <li>
            <h4>Campos necessários para o cadastro inicial:</h4>
            <ul>
                <li>Nome do usuário (obrigatório)</li>
                <li>Email (obrigatório)</li>
                <li>Senha (obrigatório)</li>
            </ul>
        </li>
        <li>
            <h4>Serão informadas mensagens de erro em casos de:</h4>
            <ul>
                <li>Campos obrigatórios em branco</li>
                <li>E-mail informado já existir cadastrado</li>
            </ul>
        </li>
        <li>
            <h4>Será informada mensagem de sucesso:</h4>
            <ul>
                <li>Após realizado o cadastro com sucesso o usuário receberá uma mensagem de confirmação e um botão para ser redirecionado para a página de Login.</li>
            </ul>
        </li>
    </ul>
</details>

<details>
<summary><b>[Usuário] Login do usuário</b></summary>
<h3>Nessa etapa, o usuário será capaz de realizar login no Dashboard, afim de acessar o sistema.</h3>
<hr>
<ul>
    <li>
        <h4>Campos obrigatórios para o login:</h4>
        <ul dir="auto">
            <li>E-mail</li>
            <li>Senha</li>
        </ul>
    </li>
    <li>
        <h4>Será informadas mensagens de erro em casos de:</h4>
        <ul>
            <li>Campos obrigatórios em branco</li>
            <li>E-mail não existe no cadastro</li>
            <li>Senha incorreta para o e-mail</li>
        </ul>
    </li>
    <li>
        <h4>Após realização de login com sucesso:</h4>
        <ul>
            <li>Criação de token de autenticação após validação dos dados (credenciais) de acesso (e-mail e senha).</li>
            <li>
            Será ser retornado ao navegador o token de autenticação de forma que possa ser utilizado em outras funcionalidades que exigem autenticação. O usuário deverá ser redirecionado para a home do sistema
            </li>
        </ul>
    </li>
</ul>
</details>

<details>
<summary><b>[Dashboard] Home e Menu</b></summary>
<h3>Nessa seção do sistema, será exibida ao usúario uma tela inicial, afim de poder navegar através do menu.</h3>
<hr>
    <ul>
        <li>
        <h4 dir="auto">Critérios de aceite</h4>
            <ul>
                <li>Apenas usuários autenticados deverão conseguir acessar esta página</li>
            </ul>
        </li>
        <li>
            <h4 dir="auto">Esta tela tem uma imagem padrão de usuário e o primeiro nome do usuário no canto superior direito, que ao clicar, abrirá um menu com dois botões:</h4>
            <ul dir="auto">
                <li>O primeiro é o "Editar", que abre um modal de atualização do cadastro do usuário logado.</li>
                <li>O segundo é o botão "Sair", que desloga o usuário do sistema</li>
            </ul>
            </li>
        <li>
            <h4 dir="auto">Do lado esquerdo, há um Menu lateral contendo os links que permitirá o usuário navegar pelos módulos do sistema:</h4>
            <ul dir="auto">
                <li>Home</li>
                <li>Clientes</li>
                <li>Cobranças</li>
            </ul>
        </li>
        <li>
            <h4 dir="auto">Esta tela tem 8 cards com as seguintes informações:</h4>
            <ul dir="auto">
                <h5 dir="auto">Resumo do Valor Total das Cobranças</h5>
                <li>
                    <p dir="auto">Pagas</p>
                </li>
                <li>
                    <p dir="auto">Vencidas</p>
                </li>
                <li>
                    <p dir="auto">Previstas</p>
                </li>
                <h5 dir="auto">Prévia de categorioas</h5>
                <li>
                    <p dir="auto">Cobranças Vencidas</p>
                </li>
                <li>
                    <p dir="auto">Cobranças Previstas</p>
                </li>
                <li>
                    <p dir="auto">Cobranças Pagas</p>
                </li>
                <li>
                    <p dir="auto">Clientes Inadimplentes</p>
                </li>
                <li>
                    <p dir="auto">Clientes Em dia</p>
                </li>
            </ul>
        </li>
    </ul>
</details>

<details>
<summary><b>[Usuário] Edição do usuário logado</b></summary>
<h3 tabindex="-1" dir="auto">Quando logado, o usuário poderá editar seus dados no sistema.</h3>
<hr/>
    <ul dir="auto">
        <li>
            <h4 dir="auto">Critérios de aceite</h4>
            <ul dir="auto">
                <li>Para acessar este formulário de cadastro é exigido autenticação.</li>
                <li>Através de um clique no perfil da Dashboard serão abertos dois botões:
                <ul dir="auto">
                    <li>Editar</li>
                    <li>Sair</li>
                </ul>
                </li>
                <li>Ao clicar em "Editar" o formulário de edição dos dados do usuário será aberto.</li>
                <li>Ao abrir o formulário, os dados do usuário logado serão carregados nos respectivos campos</li>
           </ul>
        <li>
            <h4 dir="auto">O usuário poderá atualizar os respectivos dados a seguir:</h4>
            <ul dir="auto">
                <li>Nome do usuário (obrigatório)</li>
                <li>E-mail (obrigatório)</li>
                <li>Senha (obrigatório - apenas se for alterar a senha)</li>
                <li>CPF</li>
                <li>Telefone</li>
            </ul>
        <li>
            <h4 dir="auto">Serão informadas mensagens de erro em casos de:</h4>
            <ul dir="auto">
                <li>Campos obrigatórios passados em branco</li>
                <li>E-mail informado for diferente do usuário logado e já existir cadastrado para outro usuário</li>
            </ul>
        </li>
        <li>
        <h4 dir="auto">Após realizado a atualização com sucesso o usuário receberá uma mensagem de confirmação</h4>
        </li>
    </ul>
</details>

<details>
<summary><b>[Cliente] Cadastro do cliente</b></summary>
<h3 tabindex="-1" dir="auto">Nessa seção o usário poderá cadastrar clientes, afim de acessar suas informações no futuro.</h3>
<hr />
<ul dir="auto">
    <li>
        <h4 dir="auto">Critérios de aceite</h4>
        <ul dir="auto">
            <li>
            <p dir="auto">Para acessar este formulário de cadastro deverá ser exigida autenticação</p>
            </li>
            <li>
            <p dir="auto">Campos necessários para o cadastro (<b>*</b> obrigatórios):</p>
                <ul dir="auto">
                    <li>Nome do usuário (<b>*</b>)</li>
                    <li>Email (<b>*</b>)</li>
                    <li>Cpf (<b>*</b>)</li>
                    <li>Telefone (<b>*</b>)</li>
                    <li>Cep</li>
                    <li>Logradouro</li>
                    <li>Complemento</li>
                    <li>Bairro</li>
                    <li>Cidade</li>
                    <li>Estado</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h4 dir="auto">Opcionalmente, poderá ter a busca do endereço ao digitar o CEP utilizando a api do ViaCEP</h4>
    </li>
    <li>
        <h4 dir="auto">Será informadas mensagens de erro em casos de:</h4>
        <ul dir="auto">
            <li>Campos obrigatórios em branco</li>
            <li>E-mail informado já existir cadastrado</li>
        </ul>
    <li>
        <h4 dir="auto">Após realizado a atualização com sucesso o usuário receberá uma mensagem de confirmação</h4>
    </li>
</ul>
</details>

<details>
<summary><b>[Dashboard] Configuração do Deploy</b></summary>
<h3 tabindex="-1" dir="auto">Na posição de usuário do sistema, devo ser capaz de acessar o sistema através da internet, afim de usar o sistema em qualquer dispositivo com acesso a internet.</h3>
<hr>
<ul dir="auto">
    <li>
        <p dir="auto"><b>Critérios de aceite</b></p>
        <ul dir="auto">
            <li>O frontend poderá ser hospedado na <b>Netlify</b></li>
            <li>O backend e banco de dados poderá ser hospedado na <b>Cyclic</b></li>
            <li>O frontend hospedado deverá ser <b>integrado</b> ao backend também hospedado</li>
        </ul>
    </li>
</ul>
</details>




## 📝 DEPLOY 

[https://6509b2e2e9ea7b00085f1d3a--luminous-empanada-e44d0f.netlify.app/](https://deploy-preview-122--luminous-empanada-e44d0f.netlify.app)


## 📝 Sobre
##### Este projeto consiste em sistema de gerenciamento de cobranças.


### 📄 Funcionalidades Implementadas

## Sprint 1 - Cadastro de Usuário, Login, Dashboard e Edição de Usuário
### Funcionalidades Implementadas

1. **Cadastro do Usuário**
   - Os usuários podem se cadastrar na plataforma fornecendo seu nome, e-mail e senha.
   - Senhas são criptografadas antes de serem armazenadas.
   - Validações são realizadas para campos em branco e e-mails duplicados.
   - Após o cadastro bem-sucedido, os usuários recebem uma mensagem de confirmação e são redirecionados para a página de login.

2. **Login do Usuário**
   - Os usuários podem realizar login na plataforma fornecendo seu e-mail e senha.
   - Validações são realizadas para campos em branco, e-mails inexistentes e senhas incorretas.
   - Após o login bem-sucedido, os usuários recebem um token de autenticação e são redirecionados para a página inicial do Dashboard.

3. **Dashboard - Home e Menu**
   - Os usuários autenticados têm acesso a uma página inicial do Dashboard.
   - A página inclui uma imagem do usuário e um menu lateral para navegar pelos módulos do sistema.
   - A página inicial possui 8 cards informativos com resumo de cobranças e status de clientes.
   - Os usuários podem acessar a página de edição de perfil e realizar logout.

4. **Edição do Usuário Logado**
   - Os usuários autenticados podem editar seus dados de usuário.
   - A edição inclui campos como nome, e-mail, senha (opcional), CPF e telefone.
   - Validações são realizadas para campos em branco e e-mails duplicados.
   - As alterações são persistidas no banco de dados e os usuários recebem uma mensagem de confirmação.

  <br/>


## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/) e [Node.js v18.12.1](https://nodejs.org/en/) ou superior previamente instalados.<br>
Feito isso, no terminal:

```bash
# Clone esse repositório com:
> git clone 

# Entre no repositório com:
> cd 
```


```bash
# Instale as dependências com:
> npm install
> cd 


# Execute o projeto com:
> npm run dev


```
<p align="right">
  <a href="#%EF%B8%8F-apple-store-project">Voltar ao Topo</a>
</p>



## 🧙‍♀️ Autores

<a href="https://www.linkedin.com/in/dayane-arnaud/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/122646943?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Dayane Arnaud</b></sub></a>✨</a>
 <br />

 <a href="https://www.linkedin.com/in/lene-ribeiro-desenvolvedora-full-stack/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/107501031?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Lene Ribeiro</b></sub></a>✨</a>
 <br />

 <a href="https://www.linkedin.com/in/caiohr/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/65637121?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Caio Ribeiro</b></sub></a>✨</a>
 <br />

 <a href="https://www.linkedin.com/in/marcos-samuel-batista-m/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/121835618?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Marcos Samuel</b></sub></a>✨</a>
 <br />

 <a href="https://www.linkedin.com/in/vinícius-peter/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/122483460?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Vinicius Peter</b></sub></a>✨</a>
 <br />

---

## 📝 Licença

<!-- Este projeto esta sobe a licença [MIT](./LICENSE). -->

Feito com ❤️ por:
<br/>
Dayane Arnaud [Entre em contato!](https://wa.me/5548999932109)  
Lene Ribeiro [LinkedIn](https://www.linkedin.com/in/lene-ribeiro-desenvolvedora-full-stack/)
<br/>
Caio Ribeiro [LinkedIn](https://www.linkedin.com/in/caiohr/)
<br/>
Marcos Samuel [LinkedIn](https://www.linkedin.com/in/marcos-samuel-batista-m/)
<br/>
Vinicius Peter [LinkedIn](https://www.linkedin.com/in/vinícius-peter/)
