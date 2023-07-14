
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">PRUEBA TECNICA</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li href="#finished"><a>Finished</a></li>
    <li><a href="#To Do">To Do</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

En esta prueba tecnica hice una aplicación simple que te permite almacenar tus tarjetas de manera segura y conveniente. Con esta aplicación, ya no tendrás que preocuparte por llevar contigo todas tus tarjetas físicas. Puedes ingresar los detalles de tus tarjetas, como el número de tarjeta, el nombre del titular, la fecha de vencimiento y el código de seguridad, y acceder a ellos fácilmente en cualquier momento.
Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Aqui podran ver las tecnologias utilizadas.

* React
* Vite
* Supabase
* Tailwindcss
* Redux

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ArecheBrian/PruebaTecnica.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Image -->
## Image

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Finished -->
## Finished

Información de lo realizado.

Primer Bloque

1) Realizar maquetación del diseño suministrado y tomar en cuenta:
   
  * Todos los campos son requeridos.
  * El editar los campos de tarjetas, fecha y nombre modifica el diseño de la tarjeta.
  * El campo tarjeta solo puede contener números y un máximo de 16 caracteres.
  * El campo Nombre titular solo puede contener letras y letras con tildes y máximo
  de 20 caracteres.
  * En caso de que algún campo no sea válido se debe colocar texto en rojo debajo
  del campo indicando la causa de la invalidez.

2) Al pulsar botón de Agregar tarjeta:
   
  * Debe agregar la tarjeta a un bloque en el cual se mostrarán los campos detarjeta, nombre y fecha vencimiento.
  * Debe validar que el formulario sea válido y que al no ser válido despliegue los textos en cada campo que no es válido.
 
3) Al pulsar botón Cancelar se deben limpiar todos los campos.

Segunda Bloque

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Finished -->
## To Do

Información de lo no realizado.

Primer Bloque

1) Realizar maquetación del diseño suministrado y tomar en cuenta:
      <br/>
  * El campo fecha de vencimiento debe tener formato mm/yy.
  * El campo fecha solo puede aceptar valores válidos para mes (01 a 12) y año (22
  hasta año actual + 5).

2) Al pulsar botón de Agregar tarjeta.
      <br/>
  * Debe agregar la tarjeta a un bloque en el cual se mostrarán los campos de
  tarjeta, nombre y fecha vencimiento.
  * El campo de número de tarjeta se debe mostrar enmascarado, solo mostrar los12 primeros y 4 últimos dígitos (ej. 41********1234).

Segunda Bloque

1) Crear RESTful API para el procesamiento de agregado/visualización de tarjetas.
<br/>
  * Debe contener todos los métodos de CRUD. (aunque no los use todos)
  * Puede utilizar cualquier Web API de su preferencia (ej. Firebase, ASP.Net Core o MVC 5 en local host, Express, etc.)
  * Para la prueba no se tomará en cuenta ningún mecanismo de autenticación.
  
2) Conectar el primer bloque con el segundo bloque.
 
   * Al momento de agregar tarjeta esta debe ser almacenada en alguna base de datos o archivo de texto (ej. Firebase).
   * Lo único que se debe validar al momento de agregar es que los campos requeridos sean enviados.
   * Los API deben de devolver correctamente respuestas HTTP para cada caso, (ej. 404, 500, 302, 200, etc).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



