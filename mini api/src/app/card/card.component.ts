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
        imagen: "https://static.wikia.nocookie.net/berserk/images/4/43/Guts_halcón.jpg/revision/latest?cb=20160323161125&path-prefix=es",
        descripcion: "Es un antiguo mercenario marcado que viaja por el mundo en una lucha interna constante entre perseguir su venganza y proteger a sus seres queridos.",
    },
    {
        nombre: "Griffith",
        tipo: "Humano - Ángel",
        imagen: "https://static.wikia.nocookie.net/berserk/images/3/30/Griffith_cuadrilla.jpg/revision/latest?cb=20160324142633&path-prefix=es",
        descripcion: "Antagonista. Es un personaje de apariencia pulcra y andrógina. Antiguo líder de la Banda del Halcón, la banda de mercenarios a la que pertenecía Guts.",
    },
    {
        nombre: "Puck",
        tipo: "Elfo",
        imagen: "https://static.wikia.nocookie.net/berserk/images/9/94/Pack.jpg/revision/latest?cb=20160718115433&path-prefix=es",
        descripcion: "Elfo de la raza pisky, ahora fiel acompañante de Guts. Antiguo habitante de Elfhelm, idílico reino élfico del Rey de la Tormenta de Pétalos.",
    },
    {
        nombre: "Casca",
        tipo: "Humano",
        imagen: "https://static.wikia.nocookie.net/berserk/images/3/31/Kiasca1.jpg/revision/latest?cb=20130726121450&path-prefix=es",
        descripcion: "Único miembro femenino en la antigua Banda del Halcón. Juega un papel primordial en la búsqueda de Guts por matar a los apóstoles y los miembros de la Mano de Dios.",
    },
    {
        nombre: "Schierke",
        tipo: "Humano",
        imagen: "https://static.wikia.nocookie.net/berserk/images/3/37/Schierke_Manga.jpg/revision/latest?cb=20170625211215&path-prefix=es",
        descripcion: "Es una joven bruja. Fue discípula de la bruja Flora. Actualmente, forma parte del grupo de viajeros de Guts.",
    },
    {
        nombre: "Ivalera",
        tipo: "Elfo",
        imagen: "https://static.wikia.nocookie.net/berserk/images/2/2c/00000evarella.jpg/revision/latest?cb=20170806015550&path-prefix=es",
        descripcion: "Elfa de la raza pisky. Forma parte de la compañía viajera de Guts y es fiel acompañante de Schierke.",
    },
    {
        nombre: "Farnese de Vandimion",
        tipo: "Humano",
        imagen: "https://static.wikia.nocookie.net/berserk/images/5/50/000farnese_manga.jpg/revision/latest?cb=20120207190602&path-prefix=es",
        descripcion: "Miembro de la noble Familia Vandimion. Anteriormente, lideró la guardia ceremonial de la Santa Sede, los Caballeros de la Santa Cadena de Hierro.",
    },
    {
        nombre: "Serpico",
        tipo: "Humano",
        imagen: "https://static.wikia.nocookie.net/berserk/images/3/3f/Serpicomanga.jpg/revision/latest?cb=20140720135757&path-prefix=es",
        descripcion: "fue sirviente e hijo ilegítimo de la noble familia Vandimion, pasando a formar parte de los Caballeros de la Santa Cadena de Hierro y, más tarde, de la compañía viajera de Guts junto con su hermanastra Farnese de Vandimion.",
    },
    {
        nombre: "Isidro",
        tipo: "Humano",
        imagen: "https://static.wikia.nocookie.net/berserk/images/e/e7/00000Isidro.jpg/revision/latest?cb=20120309193513&path-prefix=es",
        descripcion: "Es un niño fugitivo y ladrón que se unió a Guts para ser parte de su grupo.",
    },
    {
        nombre: "Flora",
        tipo: "Humano",
        imagen: "https://static.wikia.nocookie.net/berserk/images/a/ab/Flora_Manga.jpg/revision/latest?cb=20170806032130&path-prefix=es",
        descripcion: "Era la maestra de Schierke, enseñándole a usar la magia y el od, la fuerza vital de todas las cosas.",
    },
    {
        nombre: "Skull Knight",
        tipo: "Ser astral",
        imagen: "https://static.wikia.nocookie.net/berserk/images/1/17/000berserk11.jpg/revision/latest?cb=20170703071226&path-prefix=es",
        descripcion: "Figura enigmática que lucha contra el mal. Posee una cosmovisión determinista, a menudo citando la inevitabilidad del flujo de la causalidad. Ha salvado a Guts varias veces a lo largo de su vida. También manipuló varios sucesos en la vida de éste para su propio propósito de venganza.",
    },
    {
        nombre: "Void",
        tipo: "Miembro de la Mano de Dios",
        imagen: "https://static.wikia.nocookie.net/berserk/images/6/6b/Void1.png/revision/latest?cb=20220321135215&path-prefix=es",
        descripcion: "Miembro de la Mano de Dios junto con Ubik, Slan, Conrad y Femto. Es el que marca los sacrificios hechos por los poseedores de un beherit. Tiene el poder, de crear vacíos a su alrededor con el fin de evitar y redirigir los ataques que se le lancen.",
    },{
        nombre: "",
        tipo: "",
        imagen: "https://.wikia.nocookie.net/berserk/images/6/6b/Void1.png/revision/latest?cb=20220321135215&path-prefix=es",
        descripcion: "Miembro de la Mano de Dios junto con Ubik, Slan, Conrad y Femto. Es el que marca los sacrificios hechos por los poseedores de un beherit. Tiene el poder, de crear vacíos a su alrededor con el fin de evitar y redirigir los ataques que se le lancen.",
    }
]
}
