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
- Rotas diferentes para usuários admin e não admin
## Rotas
- Registra usuário:
routes.post('/auth/register');
- Autentica usuario:
routes.post('/auth/authenticate');
- Faz logout:
routes.get('/auth/logout');
- Lista produtos:
routes.get('/admin',authMiddleware);
- Procura um produto:
routes.get('/admin/:productId');
- Adicionar produtos:
routes.post('/admin');
- Editar um produto:
routes.put('/admin/:productId');
- deletar um produto:
routes.delete('/admin/:productId');
- Usuário normal lista produtos:
routes.get('/user');
- Usuário normal procura um produto:
routes.get('/user/:productId');

## Frameworks/bibliotecas utilizadas
- Express
- JWT para autenticação
- mocha para testes
- bcrypt para encriptação da senha
- mongoose
- dotenv
## Banco de dados
- Contém duas tabelas simples, uma de usuários e outra de produtos.
- Banco de dados utilizado foi o Mongo db
## Deploy
- Foi feito deploy do backend no heroku. A base de dados acessada pela api esta no Mongo db Atlas.
- Caminho para acesso: https://cadastroprodutos-backend.herokuapp.com/
## Melhorias futuras
- Criação do frontend em Reactjs.
- Testes de integração, para testar o caminho das rotas.
