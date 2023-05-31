# API Test

API Test nos permite consumir los servicios proporcionados por The 
Star Wars API.

## Requerimientos

- [Nodejs](https://nodejs.org/es/download) -> v18.16.0
- [VSCode](https://code.visualstudio.com/download)
- [Postman](https://www.postman.com/downloads/)
- Algun explorador web

## Instalación

1. Clona este repositorio
```git
git clone https://github.com/oiab94/apiTest-edge-mobile.git
```
2. Navega hasta la carpeta del proyecto: `cd apiTest-edge-mobile`
3. Ejecuta el siguiente comando para instalar las dependencias
```bash 
npm install
```
1. Despues de instalar todas las dependencias podemos ejecutar la app con el sgte 
comando
```bash
npm start
```
4. Si nos vamos a la dirección: http://localhost:3000/ nos debería de indicar que
la API se encuetra corriendo

## Uso

Tras haber corrido la API con `npm start` podemos visitar la documentacion de 
nuestra API [Test API](http://localhost:3000/api-docs/) o en 
[Postman](https://www.postman.com/oiab94/workspace/first-workspace/collection/25548467-0815e075-89ae-42f1-a0b9-31a8af585ec7?action=share&creator=25548467)
donde podemos encontrar dos ficheros indicando la forma de consumir las
API. <br>
El fichero 
[apiTest](https://www.postman.com/oiab94/workspace/first-workspace/folder/25548467-7d35912a-e1ad-4ff9-a946-f156207bb70b?ctx=documentation) tiene la forma 
de consumir nuestra API.<br> 
El fichero [SWAPI](https://swapi.dev/) tiene la forma de consumir la api 
<b>The Star Wars API</b>. 
