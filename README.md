# API Endpoints

URL Base: https://capstone-m3-db.herokuapp.com/

## Users

### Register - /register

Method: POST (Não precisa de Autorização)

Corpo da requisição:

```json
{
  "email": "seu@email.com",
  "password": "suaSenha",
  "username": "seuNomeDeUsuario",
  "firstName": "seuNome",
  "lastName": "seuSobrenome",
  "address": {
    "city": "suaCidade",
    "street": "suaRua",
    "neighborhood": "seuBairro",
    "number": "seuNumero"
  }
}
```

### Login - /login

Method: POST (Não precisa de Autorização)

Corpo da requisição:

```json
{
  "email": "seu@email.com",
  "password": "suaSenha"
}
```

### Editar Usuário - /user/{id}

Method: PATCH (Precisa de Token)

Corpo da requisição:

(Apenas a propriedade que será mudada é necessária na requisição)

```json
{
  "firstName": "primeiroNomeExemplo"
}
```

## Products

### Lista de produtos - /products

Method: GET (Não precisa de autorização)

Não precisa de corpo de requisição

### Cadastrar novo produto - /products

Method: POST (Precisa de Token)

(O dono do produto, `username` , é capturado por meio do login, e usado como parâmetro
dentro da requisição, no lugar de `donoDoProduto`)

Corpo da requisição:

```json
{
  "name": "nomeDoProduto",
  "price": "precoDoProduto",
  "image": "linkDaImagemDoProduto",
  "image2": "segundoLinkDaImagemDoProduto",
  "category": "categoriaDoProduto",
  "owner": "donoDoProduto",
  "gender": "generoDoProduto",
  "size": "tamanhoDoProduto"
}
```

### Editar produto - /products/{id}

Method: PATCH (Precisa de Token)

Corpo da requisição:

(Apenas a propriedade que será mudada é necessária na requisição)

```json
{
  "price": "novoPrecoExemplo"
}
```

### Deletar produto - /products/{id}

Method: DELETE (Precisa de Token)

Não precisa de corpo de requisição
