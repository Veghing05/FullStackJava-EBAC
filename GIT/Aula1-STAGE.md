# Comandos básicos pra usar no terminal

- cd 
- ls
- mkdir
- echo 
- touch

# Configuração inicial do Git

- git config --global user.name "SEU_USUARIO"
(configura o nome)

- git config --global user.email "SEU_EMAIL"
(configura o email)


# Criando um repositorio

- git init
(Inicia um repositório)

# Adicionando e removendo arquivos

- git add "NOME_DO_ARQUIVO"
- git add . 
(Adiciona um arquivo)

- git rm --cached "NOME_DO_ARQUIVO"

# Histórico
- git status
(Mostra o que mudou)

# COMMITS 
- git commit -m"MENSAGEM"
(Adiciona uma mensagem para a alterção)

- git commit -am "MENSAGEM"
(Adicionae commita a alterção)

- git push origin main 
(envia as mudanças ao GITHUB)

# Padrões para nomear commits 

- Chore - Pequenas correções

git commit -m "chore: removendo arquivos".

- Fix - correções

git commit -m "fix: correção no calculo d média".

- Feat - inclusão de funcionalidade 

git commit -m "feat: inclusão de função para calcular mediana".

- Docs - Atualização de documentação 

git commit -m "docs: atualizando arquivo".

# Changelog

- Changelog Trata-se de um arquivo onde registramos todas as mudanças que aconteceram em um projeto no decorrer do tempo.Saiba mais acessando o link

https://keepachangelog.com/ptBR/1.0.0/#:~:text=Um%20changelog%20%C3%A9%20um%20arquivo,cada%20vers %C3%A3o%20de%20um%20projeto.

# LOGS 

- Visualizando o registro de commits realizados 

git log 

git shortlog

git log -n 2

git log --oneline 

git log --stat

- Variações na visualização de commits 

# Desfazer alterações 

git checkout "NOME DO ARQUIVO".

# Navegar entre commits

git checkout "commit_ID"
 
git revert HEAD "commit_ID"

# Listar entre as Branchs

git branch

# Criar uma Branch

git branch "NomeDaBranch-a"

# Navegar entre as branchs 

git checkout nome_branch

git chekout master  

# Deletar Branch

git branch -D "NOME_DA_BRANCH"

# Merge

git merge 

# Enviar arquivo

git push

# Baixar arquivo

git pull 

# Subir uma nova Branch ao GitHub

git push origin "Nome_Da_Branch"

