# NLW06-Node.JS-Together
NLW06-Node.JS-Together



# NLW VALORIZA

- Cadastro de usuários
- Cadastro de Tags (elogios possíveis)
  - Somente usuário administrador
  
- Cadastro de elogios
  - ID do usuário receber elogios
  - ID do usuário que está enviando elogios
  - ID da tag
  - Data da criação

- Autentição de usuário
  - Gerar token JWT
  - Validar usuário logado nas rotas necessárias

- Listagem de usuários
- Listagem de tags
- Listagem de elogios por usuário

# Instalação de Dependencias (Bibliotecas)

- yarn add typescript -D
  iniciar o typescript: yarn tsc --init
  converte o aquivo para o node entender: yarn tsc

  execultar o aquivo para teste: node index.js

- yarn add express
  
  Faltado uma tipagem para remover os ...express
- yarn add @types/express -D
  Pra não ter que ficar repetindo sempre o yarn tsc
- yarn add ts-node-dev -D

  TypeORM
- yarn add typeorm reflect-metadata sqlite3

# Configuração de banco de dados:
0 - Config - img

1 - Config DB - img

2 - Config DB - img

# Criação de migration:
E dentro do aquivo ormconfig.json, vai criado um cli
img
E dentro do arquivo package.json vamos criar um script
img

Criar entidade migrations:

- yarn typeorm migration:create -n CreateUsers

Agora dentro da migration vamos criar a tabela up
img

migration vamos criar a tabela down
img02

Agora colocar o caminho da magration no arquivo ormconfig.json
img03

Agora vamos rodar a magration para inserir a tabela no BD
- yarn typeorm migration:run

Caso precisa-se remover essa migration:
- yarn typeorm migration:revert

Criação de entidade:
Entidade e como se fosse uma referencia a determinada tabela
img01

E rodar a entidade
- yarn typeorm entity:create -n User
img02

E dentro do tsconfig.json, abilitar: "experimentalDecorators": true,
img01

img02

Estruturando entidade:
  instalação de um boiblioteca uuid
  - yarn add uuid
  - yarn add @types/uuid -D

Construtctor:
Que todas a vez que não tive um id, ele ira criar um:
img

Repositories:
Dentro da pasta repositories, criar um arquivo UsersRepositories.ts
img

Cadastro de usuário:
Usuário com o mesmo e-mail
img01


# Regras:
- Cadastro de usuário:
  [] Não é permitido cadastrar mais de um usuário com o mesmo e-mail.
  [] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG
  [] Não é permitido cadastrar mais de uma tag com o mesmo nome.
  [] Não é permitido cadastrar tag sem nome.
  [] Não é permitido cadastro por usuários que não sejam administradores

- Cadastro de elogios:
  [] Não é permitido um usuário cadastrar um elogio para si.
  [] Não é permitido cadastrar elogios para usuários inválidos.
  [] O usuário precisa estar autenbticado na aplicação


# Configurações do ambiente:

https://www.notion.so/Configura-es-do-ambiente-45e12d2ced17465cabbd81dcbd53576d

# Material para as aulas:

https://www.notion.so/Material-para-as-aulas-a63d93548f4c48dc8370362f021a009f

# Wallpapers

https://drive.google.com/drive/folders/1lHnrsSPQJK44irYHaRMEd5yZXNpuojHo


Palavra chave:

Codigo #together
Codigo 

Andamento!
