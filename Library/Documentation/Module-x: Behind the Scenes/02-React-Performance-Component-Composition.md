[Torna al sommario](../../Summary.md)

### Documentazione: Component Composition come Alternativa a `memo` per l'Ottimizzazione delle Prestazioni in React

#### Introduzione

Nell'ottimizzazione delle prestazioni di applicazioni React, il Component Composition rappresenta un'efficace alternativa all'uso di `memo`. Questa strategia si basa sulla separazione delle responsabilità tra i componenti e sull'efficace gestione dello stato, riducendo i re-render non necessari e migliorando così le prestazioni complessive dell'applicazione.

#### Esempio di Riferimento: Codice `App.jsx` e `ConfigureCounter.jsx`

Nel codice fornito, `App` è il componente genitore che include `ConfigureCounter` (per la configurazione del counter) e `Counter` (per la visualizzazione del conteggio). Qui, il Component Composition viene utilizzato per separare la logica di configurazione dal componente di visualizzazione.

```javascript
// App.jsx
import { useState } from "react";
import Counter from "./components/Counter/Counter.jsx";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <ConfigureCounter onSet={handleSetCount} />
      <Counter initialCount={chosenCount} />
    </>
  );
}

export default App;

// ConfigureCounter.jsx
import { useState } from "react";
export default function ConfigureCounter({ onSet }) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <section id="configure-counter">
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
```

#### Ottimizzazione delle Prestazioni con Component Composition

1. **Isolamento dello Stato e Riduzione dei Re-render**:

   - In `ConfigureCounter`, lo stato `enteredNumber` è isolato all'interno del componente. Questo stato non si propaga al componente genitore (`App`), a meno che non venga esplicitamente passato tramite la funzione `onSet` durante l'evento `handleSetClick`.
   - Questa separazione impedisce che i cambiamenti di stato in `ConfigureCounter` causino re-render in `App` e in altri componenti fratelli, come `Counter`, a meno che non venga invocata la funzione `onSet`.

2. **Controllo del Flusso di Aggiornamento**:

   - L'aggiornamento di `chosenCount` in `App` avviene solo quando l'utente interagisce con il bottone "Set" in `ConfigureCounter`.
   - Questo controllo selettivo del flusso di aggiornamento significa che `Counter` verrà re-renderizzato solo quando effettivamente necessario, ovvero quando il suo prop `initialCount` cambia.

3. **Confronto con `memo`**:
   - Mentre `memo` previene il re-rendering di un componente basandosi sul confronto superficiale delle props, il Component Composition gestisce il re-rendering limitando le cause di aggiornamento allo stato.
   - In scenari dove i cambiamenti di stato sono localizzati a specifici componenti e non necessitano di propagarsi frequentemente attraverso l'albero dei componenti, il Component Composition può essere più efficace di `memo`, poiché riduce la necessità di confronti costanti delle props.

#### Conclusione

Il Component Composition in React rappresenta un'approccio efficace e alternativo a `memo` per l'ottimizzazione delle prestazioni. Attraverso la separazione dei componenti e la gestione accurata dello stato, si può ottenere un controllo più preciso sui re-render, migliorando l'efficienza e la reattività dell'applicazione. Inoltre, questo metodo enfatizza una struttura di codice più pulita e modulare, facilitando la manutenzione e la scalabilità del progetto.
