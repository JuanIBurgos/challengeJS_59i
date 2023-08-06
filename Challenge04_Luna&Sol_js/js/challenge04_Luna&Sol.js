// En este challenge revelamos el enigma de porque la luna es mayor que el sol

let score=1;
let answer= prompt('Porque la luna es mayor que el sol').toLowerCase();

while(answer!="porque sale de noche"){
    alert('Respuesta incorrecta, intente de nuevo.');
    score++;
    answer= prompt('Porque la luna es mayor que el sol').toLowerCase();
}

alert(`Luego de ${score} la respuesta es correcta.`);