# LIEFE

Projeto desenvolvido durante a hackaton da OLX cujo tema foi: **Economia colaborativa**. LIEFE é uma proposta de aplicação que irá facilitar o serviço de entrega aproveitando os percussos feitos pelos usuário.

O foco do **LIEFE** é intermediar a negociação entre comprador, vendedor e entregador através de uma plataforma que permite a comunicação entre eles.

#### Descrição técnica:

A estrutura do projeto é dividida em frontend e backend. O Frontend é responsável por renderizar o site enquanto o backend é responsável por fazer a comunicação entre os usuários no chat.


### Setup do projeto:

Para inicializar o projeto será necessário inicializar o frontend e o backend.

#### Setup Frontend

No terminal, entre na pasta frontend:
```bash
$ cd liefe/frontend
```

Instale as suas dependências:
```bash
$ yarn install
```

Após instalar as dependências, inicialize o projeto:
```bash
$ yarn start
```

Ele irá inicializar a aplicação localmente utilizando a porta 3000. Para acessar o app, acesse:
http://localhost:3000/

#### Setup Backend

Numa nova aba no terminal, entre na pasta backend:
```bash
$ cd liefe/backend
```

Instale as suas dependências:
```bash
$ yarn install
```

Após instalar as dependências, inicialize o projeto:
```bash
$ yarn start
```

Esse comando irá inicializar o backend que será responsável pela comunicação no chat.