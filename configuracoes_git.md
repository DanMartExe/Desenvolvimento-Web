# Configurações GIT

### Configurar usuário
    - Comandos
        git config --global user.name "nome usuario github"
        git config --global user.email "email usado no github"

### Baixar repositório
    - Comandos
        git clone link-repositorio (p/ repositorio publico)

### Adicionar e subir alterações no repositório
    - Comandos
        git add . | prepara os arquivos para subir no repositório
        git add nome-arquivo | prepara um arquivo específico
        git commit -m "mensagem" | Adiciona mensagem explicando a mudança
        git push | Sobe os arquivos 'preparados' no repositório
        git push --set-upstream nome-branch

### Atualizar repositório da maquina
    - Comando
        git pull

### Verificar status dos arquivos
    - Comando
        git status