# Deploy Heroku (Backend)

## Configurações adicionais no projeto backend
> **PROCFILE**<br />
> Criar o arquivo Procfile na raiz do projeto.
> Este arquivo, é interpretado pelo heroku como mecanismo de declaração dos comandos que serão executados inicialmente.
> 
> **PACKAGE.JSON**<br />
> No package.json, especificar as dependências dentro da flag dependencies ao invés de dev-dependencies. 
> Adcionar a flag engines e especificar a versão ideal para o node.

## Passos para o deploy...

### 1) Instalar o _Heroku CLI_

Para sistema operacional Windows, fazer download pelo instalador documentado no [Heroku Dev Center](https://devcenter.heroku.com/articles/heroku-cli#windows)

### 2) Verificar a instalação do _Heroku CLI_

```bash
$ heroku --version
```

### 3) Efetuar o login com _Heroku CLI_

```bash
$ heroku login

Enter your Heroku credentials:
Email: <SEU E-MAIL>
Password: **********
Logged in as <SEU E-MAIL>
```

> **NOTA**
> 
> Necessário ter um usuário registrado no Heroku.
> 
> Acessar: [Heroku Signup](https://signup.heroku.com)

### 4) Clonar o repositório do projeto **_backend_**

```bash
$ git clone https://github.com/eRebelo/Deploy-Heroku-Backend
```

### 5) Entrar na pasta do projeto **backend**

```bash
$ cd Deploy-Heroku-Backend
```

### 6) Criar um projeto no Heroku via _Heroku CLI_

```bash
$ heroku create my-app-backend
```

> **IMPORTANTE**
> 
> Como exemplo, chamaremos a aplicação no Heroku de **my-app-backend**, mas você precisa escolher um outro nome único.

### 7) Selecionar o buildpack para NodeJS

```bash
$ heroku buildpacks:set heroku/nodejs

# Caso não funcione o comando anterior, adicionar a flag -a e especificar o nome definido para o projeto
$ heroku buildpacks:set heroku/nodejs -a my-app-backend
```

### 8) Configurar o repositório remoto

```bash
$ heroku git:remote -a my-app-backend
```

> **IMPORTANTE**
> 
> Usar o **nome** do seu projeto.

### 9) Adicionar o Add-on do **_mLab_** para termos uma instância do **_MongoDB_**

![](doc/mongo_addon.png)
*Add-on do **_mLab_***

> **IMPORTANTE**
> 
> Apesar de escolher a instância do MongoDB **grátis**, é necessário informar os dados de pagamento (cartão de crédito)... **:(**

### 10) Clicar no Add-on do **_mLab_** e adicionar o usuário da aplicação

![](doc/mongo_add_user.png)
*Adicionar usuário do **_MongoDB_***

> **NOTA**
> 
> No exemplo acima criei um usuário com nome **mymoneyapp** e senha **mymoneyapp**. **É obvio que esse padrão senha não é recomendado para produção**.

### 11) Configurar as variáveis de ambiente que a aplicação **_backend_** usa.

```bash
# URL_MONGO é mais ou menos assim: mongodb://user:pass@XYZ.mlab.com:19585/heroku_XYZ
$ heroku config:set MONGOLAB_URI=<URL_MONGO>
```

### 12) Fazer deploy da aplicação via **push** no repositório.

```bash
$ git push heroku master
```

### 13) Definir o tipo de escalonamento mínimo (grátis) - Passo **Opcional**

```bash
$ heroku ps:scale web=1
```

### 14) Consultar o log e verificar se tudo ocorreu bem - Passo **Opcional**

```bash
$ heroku logs --tail
```
> **Status Heroku** <br />
> Para consultar o status de suas aplicações, basta acessar o [Heroku Status](https://status.heroku.com/)