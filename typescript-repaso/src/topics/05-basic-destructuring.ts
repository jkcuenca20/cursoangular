interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details : Details; // lo declaro en interface para que sepa que tipo de dato es details, y asi no me de error al usarlo en el objeto
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: 'Mujeres',
    details: {
        author: 'Ricardo Arjona',
        year: 1993
    }
}

const song = 'Sra de las 4 décadas';

const { song: anotherSong, 
    songDuration:duration,
    details: { author}
    } = audioPlayer; // destructuring, le digo que quiero sacar la propiedad song y songDuration del objeto audioPlayer, y le doy un alias a song para que no me de error al usarla despues



console.log('Song: ', audioPlayer.song);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Author: ', audioPlayer.details.author);
console.log('Year: ', audioPlayer.details.year);

//const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];
//const gohan = dbz[2] || 'No hay personaje'; // si no encuentra el personaje, le asigna el valor de 'No se encontró el personaje'
const [ , , gohan = 'NOT found' ]: string []= ['Goku', 'Vegeta', 'Gohan']; // destructuring de arrays, le digo que quiero sacar los elementos del array dbz y asignarlos a las variables p1, p2 y p3

console.log('Personaje 3: ', gohan);
export {}