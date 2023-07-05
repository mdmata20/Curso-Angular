import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  withImage = 10;
  imagen = './assets/images/toy.jpg';

  persona = {
    Nombre: "",
    edad: 0 
  }
  
  title = 'my-store';

  nombres: string[] = ["Manuel", "Josue", "Carlos", "Mario"];
  newname = '';

  box = {
    with: 100,
    height: 100,
    background: 'red'
  }

  nombre = 'Manuel';


  register = {
    nombre: '',
    correo: '',
    contrasena: ''
  }

  products = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  Usuario() {
    this.persona.Nombre = "Manuel";
  }

  AgregarNombres(){
    this.nombres.push(this.newname);
    this.newname = "";
  }

  deleteUser(indice: number){
    this.nombres.splice(indice, 1);
  }

  onRegister() {
    console.log('validos');
    console.log(this.register);
  }
}
