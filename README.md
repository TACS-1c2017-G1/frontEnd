# TACS-1c2017-G1 front-end

## Pasos

Comentario para 1 y 2: Nodejs te instala npm tambien. Asi que no es necesario instalar npm. Si van por la opcion 1 de Nodejs, la version de npm queda "clavada", si van por la full instalacion de nodejs, pueden actualizar npm hasta su ultima version.
1. Instalar nodeJS, para saber que version tienen instalada `node -v`
```
sudo apt-get update && sudo apt-get install -y nodejs-legacy
```
o
```
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. (opcional) Actualizar npm, para saber que version tienen instalada `npm -v`
```
npm install npm@latest -g
```

3. Instalar dependencias. Desde el directorio ppal del proyecto:
```
sudo npm install
```

4. Correr gulp watch (por cada save de cualquier archivo js, actualiza el archivo bundle.js y por cada save de cualquier archivo .less, actualiza el archivo style.css)
```
gulp watch
```

5. Ver el front end, alternativas:

  a. Abrir el archivo index.html en un browser (preferentemente Chrome que hace un liveReload por cada vez que se modifica el archivo).
  b. Via `http-server`
    i. Instalarlo via `npm`
      ```
      npm install http-server -g
      ```
    ii. Correrlo. Desde el directorio del proyecto:
      ```
       http-server ./docs -p 1234 --cors -o
      ```
    iii. Abrir un browser con la url http://localhost:1234
  c. Utilizar algun IDE o editor de texto con preview


## Editores de texto piolas:
Sublime text
Atom
Brackets (Permite hacer un Live preview dentro del editor)
(Aptana, Netbeans, Eclipse JEE u otro IDE)

## Estructura de Archivos:

`package.json` Archivo de proyecto para npm.
`gulpfile.js` Se definen las tareas a correr con gulp.

`docs/` Podria llamarse bin, release u otros tantos nombres mejores, pero llamandolo docs, github lo puede poner como una pagina web con dominio propio.
`../index.html` Donde importamos nuestras vendor resources, bundle.js y style.css.
`../style.css` Se autogenera con Gulp Watch.
`../bundle.js` Se autogenera con Gulp Watch.
`/templates`
`../header.html`
`../footer.html`
`../home.html`
`../listas`
`../../list.html`, `new.html`, `edit.html`
`.../favoritos`
`../../list.html`, `new.html`, `edit.html`

```
dev/
../index.html
../style.css
../bundle.js
../templates
../../header.html
../../footer.html
../../home.html
../../listas
../../../list.html, new.html, edit.html
../../favoritos
../../../list.html, new.html, edit.html
../src
../../router.js - Se definen todos los states.
../../controllers - Se define un archivo js para cada "angular controller".
../../../listasController.js
../../../favoritosController.js
../styles
../../mainStyle.less - Estilo principal, importa a otros estilos que queramos definir.
../../otherStyle.less
```
