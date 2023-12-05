### Documentazione: Component Composition come Alternativa a `React.memo`

#### Introduzione

La composizione di componenti in React è un approccio efficace per ridurre i render inutili e ottimizzare le prestazioni, offrendo un'alternativa all'uso di `React.memo`. Questa tecnica si basa sulla separazione delle responsabilità e sulla gestione dello stato in componenti specifici.

#### Esempio Pratico: Separare Input e Stato

##### Scenario Iniziale

Si consideri un componente `App` con un input per modificare un contatore e un bottone per confermare il numero selezionato. Inizialmente, sia l'input che il bottone modificano lo stato di `App`, causando la sua riesecuzione e quella dei suoi componenti figli ad ogni cambiamento dell'input.

```jsx
function App() {
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(null);

  const handleSetCount = (newCount) => {
    setChosenCount(newCount);
  };

  return (
    <>
      <input
        type="number"
        value={enteredNumber}
        onChange={(e) => setEnteredNumber(e.target.value)}
      />
      <button onClick={() => handleSetCount(enteredNumber)}>
        Imposta Numero
      </button>
      {/* Altri componenti */}
    </>
  );
}
```

##### Applicazione della Composizione dei Componenti

Si crea un nuovo componente, `ConfigureCounter`, che gestisce l'input per il contatore. Questo componente mantiene il proprio stato locale (`localCount`) e riceve una funzione (`onSet`) dal componente genitore `App` per comunicare il numero selezionato.

```jsx
function ConfigureCounter({ onSet }) {
  const [localCount, setLocalCount] = useState(0);

  const handleSetClick = () => {
    onSet(localCount);
  };

  return (
    <>
      <input
        type="number"
        value={localCount}
        onChange={(e) => setLocalCount(e.target.value)}
      />
      <button onClick={handleSetClick}>Imposta Numero</button>
    </>
  );
}
```

Nel componente `App`, ora si usa `ConfigureCounter` e si passa `handleSetCount` come prop `onSet`. Ciò permette di separare la logica di input e impostazione del numero, riducendo la frequenza dei render del componente `App`.

```jsx
function App() {
  // ... (come sopra)

  return (
    <>
      <ConfigureCounter onSet={handleSetCount} />
      {/* Altri componenti */}
    </>
  );
}
```

#### Vantaggi della Composizione dei Componenti

- **Separazione delle Responsabilità**: Spostando lo stato e la logica dell'input in un componente separato, si riduce la complessità del componente genitore.
- **Minimizzazione dei Render**: Il componente genitore `App` non viene più rieseguito ad ogni cambiamento dell'input, ma solo quando si conferma il numero tramite il bottone.
- **Scalabilità**: Questo approccio facilita la gestione e la manutenzione di componenti più grandi e complessi.

#### Conclusione

La composizione di componenti è una strategia efficace per ridurre i render inutili e migliorare le prestazioni dell'applicazione React, specialmente quando confrontata con soluzioni come `React.memo` che possono non essere sempre idonee, soprattutto in presenza di oggetti, array, o funzioni come props.
