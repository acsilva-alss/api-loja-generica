# API para cadastro de produtos para uma loja genérica
## Descrição
API desenvolvida em Nodejs, contém as seguintes funcionalidades implementadas:
- Cadastro de usuários.
- Autenticação de usuários com JWT
- Cadastro de produtos
- Listagem de produtos paginados
- Busca de um produto
- Edição de um produto
- Deleção de um produto
## Frmaworks / bibliotecas utilizadas
- Express
- Mocha (para testes)
- Json Web Token (para autenticação)
- Mongoose ( para conexão com o mongodb)
## Intalação e execução
- Faça um fork do projeto
- Rode o yarn para intalar as dependências
- Crie um arquivo .env na raiz da pasta, e adicione uma string chamada: 
```
MONGO_URL= Aqui coloque a string de configuração do seu abnco de dados mongodb.
```
- Rode yarn dev para iniciar o servidor
 
## Rotas disponíveis na API
- Registra usuário:
```
routes.post('/auth/register');
```
- Autentica usuario:
```
routes.post('/auth/authenticate');
```
- Faz logout:
```
routes.get('/auth/logout');
```
- Lista produtos:
```
routes.get('/admin',authMiddleware);
```
- Procura um produto:
```
routes.get('/admin/:productId');
```
- Adicionar produtos:
```
routes.post('/admin');
```
- Editar um produto:
```
routes.put('/admin/:productId');
```
- deletar um produto:
```
routes.delete('/admin/:productId');
```
- Usuário normal lista produtos:
```
routes.get('/user');
```
- Usuário normal procura um produto:
```
routes.get('/user/:productId');
```
## Exemplos de uso
- Chamada da api pelo react
```
// Registrando um usuário
const response = await api.post('/register' {
    login,
    password
})

// Listando produtos
const numberPage = 1;
const response = await api.get('/admin', {params: { numberPage }})

```
## Deploy
- Foi feito deploy do backend no heroku. A base de dados acessada pela api esta no Mongo db Atlas.
- Caminho para acesso a API: https://cadastroprodutos-backend.herokuapp.com/
