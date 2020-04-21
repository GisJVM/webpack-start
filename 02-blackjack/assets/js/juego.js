(() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K']

    let puntosJugador = 0;
    let puntosComputadora = 0;

    //Refrencias del HTML

    const btnPedir = document.querySelector('#btn-Pedir')
    const btnDetener = document.querySelector('#btn-Detener')
    const btnNuevo = document.querySelector('#btn-Nuevo')
    const divCartasJugador = document.querySelector('#jugador-cartas')
    const divCartasComputadora = document.querySelector('#computadora-cartas')

    //tarea
    const scoreJ = document.querySelectorAll('small')
        //onsole.log(scoreJ);


    //Esta función crea una baraja
    const crearDeck = () => {
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }


        // console.log(deck);
        deck = _.shuffle(deck)
            //console.log(deck);
        return deck;
    }
    crearDeck();

    //esta función me permire tomar una carta

    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck'
        }
        const carta = deck.pop()
            // console.log(deck)
            // console.log(carta)
        return carta
    }

    //for (let i = 0; i <= 100; i++) {
    //   pedirCarta()
    //}

    const valorCarta = (carta) => {
            const valor = carta.substring(0, carta.length - 1);
            return (isNaN(valor)) ?
                (valor === 'A') ? 11 : 10 :
                valor * 1;

        }
        //Turno de la cimputadora

    const turnoComputadora = (puntosMinimos) => {

        do {
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta)
                //console.log((puntosJugador));
            scoreJ[1].innerText = puntosComputadora
            const imgCarta = document.createElement('img')
            imgCarta.src = `assets/cartas/${carta}.png`
            imgCarta.classList.add('carta')
            divCartasComputadora.append(imgCarta)
            if (puntosMinimos > 21) {
                break
            }

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana :(')
            } else if (puntosMinimos > 21) {
                alert('Computadora gana')
            } else if (puntosComputadora > 21) {
                alert('Persona gana')
            } else {
                alert('Computadora Ganas')
            }
        }, 100)



    }

    //Eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta)
            //console.log((puntosJugador));
        scoreJ[0].innerText = puntosJugador
        const imgCarta = document.createElement('img')
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        divCartasJugador.append(imgCarta)

        if (puntosJugador > 21) {
            console.log('Lo siento mucho');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)
        } else if (puntosJugador === 21) {
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)
        }
    })

    //boton detener

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador)
    })

    btnNuevo.addEventListener('click', () => {
        console.clear();
        deck = []
        deck = crearDeck();
        puntosJugador = 0;
        puntosComputadora = 0;
        scoreJ[0].innerText = 0
        scoreJ[1].innerText = 0

        divCartasJugador.innerHTML = ''
        divCartasComputadora.innerHTML = ''

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    })
})();