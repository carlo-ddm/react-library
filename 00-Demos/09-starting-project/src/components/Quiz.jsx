// Mostra all'utente la domanda attualmente attiva.
// Quando l'utente risponde a una domanda, il componente registra le risposte (una serie di risposte preconfigurate)
// Quando l'utente risponde a una domanda, il componente passa alla domanda successvia.

import { useState } from "react"

export default function Quiz() {
    // Questo stato registra le risposte che l'utente ha selezionato durante il quiz.
    // Da qui, posso ricavare l'indice della domanda attiva osservando il numero di risposte memorizzate.
    // Se nell'array ho due rispsote memorizzate, allora la terza domanda sarà quella presentatsa all'utente, cioè la domanda con indice 2 (perché gli indici di un array partono da 0)
    const [userAnswers, setUserAnswers] = useState([])

    return <p>Currently active Question</p>
}