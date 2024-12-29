import {useEffect, useState} from "react";
import imagen1 from "../assets/portadas/1.jpg";
import imagen2 from "../assets/portadas/2.jpg";
import imagen3 from "../assets/portadas/3.jpg";
import imagen4 from "../assets/portadas/4.jpg";
import imagen5 from "../assets/portadas/5.jpg";
import imagen6 from "../assets/portadas/6.jpg";
import imagen7 from "../assets/portadas/7.jpg";
import imagen8 from "../assets/portadas/8.jpg";
import imagen9 from "../assets/portadas/9.jpg";
import imagen10 from "../assets/portadas/10.jpg";
export const useBooks = () => {

    const [books, setBooks] = useState([])
        useEffect(() => {
            setBooks([
                {id: '1', title: 'La verdad del caso Harry Quebert', author: 'Joël Dicker', genre: ['Policiaco', 'Thriller', 'Romántico'], description: "Cuando el cadáver de una joven desaparecida hace décadas aparece en la propiedad de Harry Quebert, un reconocido escritor, su pupilo Marcus Goldman se embarca en una investigación que desvela secretos oscuros sobre su mentor y un amor prohibido que marcó un verano fatídico.", price: 15, image: imagen1},
                {id: '2', title: 'El libro de los Baltimore', author: 'Joël Dicker', genre: ['Thriller', 'Romántico'], description: "Marcus Goldman rememora la historia de los Goldman de Baltimore, una rama rica y exitosa de su familia, y cómo sus envidias, secretos y traiciones culminaron en una tragedia que marcó a todos para siempre.", price: 17, image: imagen2},
                {id: '3', title: 'El caso Alaska Sanders', author: 'Joël Dicker', genre: ['Policiaco'], addedToCart: false, description: "Once años después de la muerte de Alaska Sanders, nuevas pruebas reabren el caso y arrastran a Marcus Goldman y al sargento Perry Gahalowood en una intriga que pone en duda todo lo que creían saber sobre la verdad.", price: 12, image: imagen3},
                {id: '4', title: 'Reina Roja', author: 'Juan Gómez-Jurado', genre: ['Thriller', 'Policiaco'], addedToCart: false, description: "Antonia Scott, una mujer brillante pero atormentada, y Jon Gutiérrez, un policía caído en desgracia, forman un equipo improbable para resolver un caso que amenaza con destrozar las vidas de la élite madrileña.", price: 18, image: imagen4},
                {id: '5', title: 'Loba Negra', author: 'Juan Gómez-Jurado', genre: ['Policiaco'], description: "Antonia Scott y Jon Gutiérrez se enfrentan a un nuevo y peligroso enemigo en la Costa del Sol: Loba Negra, una despiadada mujer que controla un imperio criminal, mientras lidian con sus propios fantasmas.", price: 16, image: imagen5},
                {id: '6', title: 'El día que se perdió la cordura', author: 'Javier Castillo', genre: ['Thriller', 'Terror'], description: "Un hombre camina desnudo por las calles con una cabeza decapitada en las manos. Así comienza un thriller en el que un psiquiatra y una agente del FBI destapan una conspiración que conecta asesinatos, locura y amor.", price: 14, image: imagen6},
                {id: '7', title: 'El día que se perdió el amor', author: 'Javier Castillo', genre: ['Thriller', 'Romántico'], description: "Mientras cuerpos aparecen con enigmáticos mensajes en sus bolsillos, la agente del FBI, Bowring, y el psiquiatra Jenkins descubren que el amor puede ser tan destructivo como salvador en una trama llena de giros sorprendentes.", price: 19, image: imagen7},
                {id: '8', title: 'El silencio de la ciudad blanca', author: 'Eva García Sáenz de Urturi', genre: ['Thriller', 'Policiaco'], description: "Unai López de Ayala, un inspector experto en perfiles criminales, investiga una serie de asesinatos rituales que parecen estar conectados con un asesino encarcelado hace 20 años en la ciudad de Vitoria.", price: 11, image: imagen8},
                {id: '9', title: 'Los ritos del agua', author: 'Eva García Sáenz de Urturi', genre: ['Thriller', 'Policiaco'], description: "Unai López de Ayala se enfrenta a su pasado cuando el cuerpo de una mujer aparece sumergido en un ritual celta. Mientras desentraña un misterio que abarca siglos, su vida personal se tambalea.", price: 13, image: imagen9},
                {id: '10', title: 'Los señores del tiempo', author: 'Eva García Sáenz de Urturi', genre: ['Thriller', 'Policiaco'], description: "Unai López de Ayala investiga asesinatos inspirados en un manuscrito medieval, mientras descubre un oscuro linaje familiar que lo conecta directamente con los crímenes en una narrativa que une el pasado y el presente.", price: 20, image: imagen10}
            ]);           
    }, [])

    return books

}