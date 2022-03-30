# Servidor HTTP
#### by  &copy;c1b3r-p3d1a

Esta herramineta os creará un servidor HTTP para poner lo que vosotros queráis.
Por defecto, el servidor viene con un archivo <a href="https://github.com/c1b3r-p3d1a/server-HTTP/blob/main/index.html" target=”_blank”>index.html</a>

Los requisitos para iniciar el servidor son:
  - [NodeJS](#Instalar-NodeJS)

Cuando te lo hallas descargado, te metes en el directorio donde se te a descargado, por ejemplo _Donwloads, Desktop, etc..._

```
cd ./donde-se-ha-descargado
```
Luego que ya estés en el **directorio**, te metes en la carpeta

```
cd ./server-HTTP
```

Luego que estés en la carpeta, simplemente ejecuta el siguiente comando:

```
npm start
```

Te saldrá algo como esto:

<img src="https://github.com/c1b3r-p3d1a/server-HTTP/blob/main/server-HTTP%20v2.0.0/img/Npm%20start.png" />

# Instalar-NodeJS

En esta sección te guiaré paso a paso para que puedas instalar NodeJS en tu ordenador, ya sea Linux, Windows o Mac

Tanto en Mac como en Windows NodeJS tiene su propio instalador que te lo hace él solo rápido.
Lo puedes descargar desde [NodeJs](https://nodejs.org/es/download/).

<img src="https://github.com/c1b3r-p3d1a/server-HTTP/blob/main/img/Web%20NodeJS.png" />

Pero como te habrás dado cuenta, Linux no tiene instalador. Necesitas desde la terminal poner unos comandos para poder descargarte NodeJS.

```
sudo apt update
```

Con _sudo apt update_ hacemos que nuestro Linux actualice la conexión a la base de datos de donde descargamos las cosas.

```
sudo apt-get install nodejs
```

Con esto nos instalamos NodeJS en Linux. Para confirmar que se halla instalado correctamente, ejecutamos el comando
```
node -v
```

Si te sale `vx.x.x` (ej. `v15.0.0`) es que NodeJS está correctamente instalado.
