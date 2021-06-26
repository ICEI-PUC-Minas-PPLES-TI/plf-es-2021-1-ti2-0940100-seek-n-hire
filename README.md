# Seek n' Hire

Nosso projeto ajudará dois tipos de publico, pessoas que desejam procurar serviços especificos e quem deseja oferecer seu proprio serviço.

## Integrantes

* Andre Cota Guimarães
* Anna Laura Reis Dornelas
* Frederico Martins Rodrigues
* Renan Cleyson Fagundes Pereira
* Vinicius Levi Viana de Oliveira

## Professores

* Claudiney Vander Ramos
* Hugo Bastos de Paula
* Joyce Christina de Paiva

## Instruções de utilização

Para executar o software é necessário instalar o docker, workbench, node com sequelizer e colocar esses comandos:

- docker pull mysql
- docker run --name trabalho_ana_container -e MYSQL_ALLOW_EMPTY_PASSWORD=true -e MYSQL_DATABASE=trabalho  -p 3306:3306 -d mysql
- cd backend
- npm install
- npm run dev


