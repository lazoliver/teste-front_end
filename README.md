# Teste Front-End VTEX IO

Olá! Este projeto serve como um teste para a posição de Front-End Developer VTEX IO. Seu principal objetivo é implementar o layout fornecido no Figma. Critérios aplicados na construção desta aplicação:

1. Semântica web;
2. Organização do código;
3. Lógica do código
4. Uso da ferramenta Git
5. Documentação.

## Técnologias

Para esse projeto, utilizei o boilerplate Vite com ReactJS no Front-End. A escolha do Vite se dá pelo seu desempenho em desenvolvimento, que é superior ao Create React App. Saiba mais sobre o Vite clicando [AQUI](https://vitejs.dev/guide/).

## Objetivo

O objetivo central deste teste é a implementação de um Front-End, seguindo fielmente o layout fornecido no Figma, visando boas práticas de código, controle de versão e semântica web. O Back-End fica a cargo da API [Fake Store](https://fakestoreapi.com/), que fornece os métodos HTTP necessários para criar os layouts.
Uma requisição do tipo GET para [https://fakestoreapi.com/products](https://fakestoreapi.com/products) retorna um array de objetos. Cada objeto corresponde a um produto com os campos: id, title, price, description, category, image e rating.

```json
[
	{
		"id": 1,
		"title": "<product-title>",
		"price": 109.95,
		"description": "<product-description>",
		"category": "<product-category>",
		"image": "<product-image>",
		"rating": {"rate": 3.9,"count": 120}
	},
	{
	  "id": 2,
	  "title": "<product-title>",
	  "price": 22.3,
	  "description": "<product-description>",
		"category": "<product-category>",
		"image": "<product-image>",
		"rating": {"rate": 3.9,"count": 120}
	},
	...
]
```

## Como executar o projeto

1. É necessário ter o NodeJS versão 18.17.1 ou superior instalado na sua máquina. Você pode verificar a versão usando o comando `node -v`. Eu recomendo a instalação da versão mais recente do [NodeJS](https://nodejs.org/en);
2. O NPM versão 10.4.0 ou superior é o gerenciador de pacotes utilizado nesse projeto. Verifique se já está instalado em sua máquina ou a versão com o comando `npm -v` no seu terminal. Caso o npm não esteja instalado ou esteja desatualizado, siga os passos de instalação do [site oficial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);``
3. O Git é a ferramenta usada para o controle de versões. O processo de versionamento deste projeto usou a versão 2.40.0 do Git. Verifique se já está instalado ou a versão do Git com o comando `git -v`. Caso necessário, é possível instalar o Git usando o [site oficial](https://git-scm.com/downloads);
4. Clone o repositório do projeto no seu workspace local usando o endereço HTTPS: [https://github.com/lazoliver/teste-front_end.git](https://github.com/lazoliver/teste-front_end.git) e depois entre na pasta do projeto;
5. Use o comando `npm i` para instalar os pacotes necessários para a execução do projeto;
6. Para executar o projeto existem duas formas. A primeira é com o comando `npm run dev` e o projeto será executado localmente na sua máquina. A segunda forma é com o comando `npm run dev -- --host`, o projeto será executado na máquina local e ficará acessível à rede local;
7. Buildar o projeto requer a execução de apenas um comando `npm run build`.

## Estrutura

Este projeto foi estruturado de forma modular, com isso podemos separar as reponsabilidades de cada component, melhor manutenibilidade e permite a reutilização de forma adequada.
Veja abaixo a estrutura de pastas e arquivos:

```
teste-front_end/
|-- src/
| |-- assets/
| |-- components/
| | |-- Banner/
| | |-- Footer/
| | |-- Header/
| | |-- Offers/
| |-- pages/
| | |-- Home/
| | |-- Product/
| |-- App.jsx
| |-- main.jsx
| |-- index.css
| |-- images/
| |-- styles/
| |-- main.css
|-- .eslintrc.cjs
|-- index.html
|-- .gitignore
|-- README.md
|-- vite.config.js
|-- package-lock.json
|-- package.json
```

## Deploy

Para facilitar a visualização do projeto, é possível acessar ele rodando live [Aqui](https://teste-front-end-blond.vercel.app/), abaixo estão algumas métricas obtidas pelo Lighthouse:
![Métricas Google Lighthouse](https://github.com/lazoliver/teste-front_end/blob/master/src/assets/images/image.png)
