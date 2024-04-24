import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgForOf], 
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  personajes = [
    {
        nombre: "Guts",
        tipo: "Humano",
        imagen: "https://i.pinimg.com/originals/0b/e3/42/0be342ddb0381c2c13131fd8a3e115b0.jpg",
        descripcion: "Un antiguo mercenario marcado que viaja por el mundo en una lucha interna constante entre perseguir su venganza y proteger a sus seres queridos.",
    },
    {
        nombre: "Griffith",
        tipo: "Humano - Ángel",
        imagen: "https://i.pinimg.com/originals/e3/84/54/e38454d9edb9d8cb1e37b034157a9e2b.jpg",
        descripcion: "Antagonista. Es un personaje de apariencia pulcra y andrógina. Antiguo líder de la Banda del Halcón, la banda de mercenarios a la que pertenecía Guts.",
    },
    {
        nombre: "Puck",
        tipo: "Elfo",
        imagen: "https://i.pinimg.com/originals/1a/a3/4c/1aa34cd9395bc434a44047f4cbd6e90a.jpg",
        descripcion: "Elfo de la raza pisky, ahora fiel acompañante de Guts. Antiguo habitante de Elfhelm, idílico reino élfico del Rey de la Tormenta de Pétalos.",
    },
    {
        nombre: "Casca",
        tipo: "Humano",
        imagen: "https://i.pinimg.com/originals/2d/88/f6/2d88f673a27a75d7b89907f57e8955bf.jpg",
        descripcion: "Único miembro femenino en la antigua Banda del Halcón. Juega un papel primordial en la búsqueda de Guts por matar a los apóstoles y los miembros de la Mano de Dios.",
    },
    {
        nombre: "Schierke",
        tipo: "Humano",
        imagen: "https://i.pinimg.com/originals/3b/dc/b8/3bdcb8e3020ec57393c1d14a50ff7d58.jpg",
        descripcion: "Es una joven bruja. Fue discípula de la bruja Flora. Actualmente, forma parte del grupo de viajeros de Guts.",
    },
    {
        nombre: "Ivalera",
        tipo: "Elfo",
        imagen: "https://i.pinimg.com/originals/76/a1/13/76a113d353429fae0e05db0ef1670247.jpg",
        descripcion: "Elfa de la raza pisky. Forma parte de la compañía viajera de Guts y es fiel acompañante de Schierke.",
    },
    {
        nombre: "Farnese de Vandimion",
        tipo: "Humano",
        imagen: "https://i.pinimg.com/originals/c4/f3/c2/c4f3c21dd43d9cd873cd1071b98f1fc2.jpg",
        descripcion: "Miembro de la noble Familia Vandimion. Anteriormente, lideró la guardia ceremonial de la Santa Sede, los Caballeros de la Santa Cadena de Hierro.",
    },
    {
        nombre: "Serpico",
        tipo: "Humano",
        imagen: "https://i.pinimg.com/originals/6b/23/75/6b2375ff76b6d8923e88169a5fa1a058.jpg",
        descripcion: "fue sirviente e hijo ilegítimo de la noble familia Vandimion, pasando a formar parte de los Caballeros de la Santa Cadena de Hierro y, más tarde, de la compañía viajera de Guts junto con su hermanastra Farnese de Vandimion.",
    },
    {
        nombre: "Isidro",
        tipo: "Humano",
        imagen: "https://i.pinimg.com/originals/3f/76/97/3f7697b4ede4095b3cae7ee3660d6d70.jpg",
        descripcion: "Es un niño fugitivo y ladrón que se unió a Guts para ser parte de su grupo.",
    },
    {
        nombre: "Skull Knight",
        tipo: "Ser astral",
        imagen: "https://i.pinimg.com/originals/1f/30/b4/1f30b4203cb18efc6a278a323ad0cb66.jpg",
        descripcion: "Figura enigmática que lucha contra el mal. Posee una cosmovisión determinista, a menudo citando la inevitabilidad del flujo de la causalidad. Ha salvado a Guts varias veces a lo largo de su vida. También manipuló varios sucesos en la vida de éste para su propio propósito de venganza.",
    },
]
}
