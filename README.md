Logo após baixar o repositorio do projeto, abra-o no vscode e execute os seguintes comandos:
 1. CTRL + J = Abrir o terminal
 2. Digite npm install ou use o gerenciador de pacote da sua preferencia para instalar as depêndencias do projeto(YARN, YNPM)
 3. Troque as configurções do banco de dados postgres na pasta config no arquivo database
 4. Execute no terminal o comando node database.js dentro da pasta config para subir o banco de dados e as tabelas
 5. Na pasta controller, altere as configurações do banco de dados do pool
 6. No arquivo routes, troque o caminho de export das funções - require('caminho relativo do arquivo controller')
 7. Entre na pasta server e incie o servidor escrevendo o seguinte comando no terminal:
    a. npm run dev
8. Rode o html abrindo o arquivo no navegador ou use a extensão Live Server
9. Cadastre o usuário

```
git status
git add
git commit
``