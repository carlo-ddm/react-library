[Torna al sommario](../Summary.md)

# `Documentazione: Ottimizzazione con 'memo' in React`

In questa documentazione, esploriamo il concetto di `memo` in React, un metodo di ottimizzazione per i componenti funzionali. Analizzeremo come funziona e come può essere utilizzato in un'applicazione React.

## 1. Cos'è `memo`

`memo` è una funzione di ordine superiore fornita da React che serve a ottimizzare i componenti funzionali. L'obiettivo principale di `memo` è ridurre il numero di render non necessari di un componente, memorizzando il risultato del render precedente e utilizzandolo se le props non sono cambiate.

## 2. Come Importare `memo`

Per utilizzare `memo`, è necessario prima importarlo dal pacchetto React:

```javascript
import { memo } from "react";
```

Questa importazione rende disponibile la funzione `memo` nel file corrente.

## 3. Come Avvolgere la Funzione di un Componente con `memo`

Per ottimizzare un componente funzionale con `memo`, si avvolge la definizione del componente con la funzione `memo`. Ecco come si presenta:

```javascript
const Counter = memo(function Counter({ initialCount }) {
  // Definizione del componente
});
```

In questo esempio, `Counter` è un componente che riceve `initialCount` come prop.

## 4. Come Funziona `memo`

`memo` osserva le props passate al componente. Se le props sono esattamente le stesse della renderizzazione precedente, React salta il re-render del componente. È importante notare che, per gli oggetti e gli array, ciò significa che devono essere gli stessi oggetti o array in memoria dell'esecuzione precedente.

### Esempio nel Contesto di `App`

Consideriamo il seguente componente `App`:

```javascript
import { useState } from "react";
import Counter from "./components/Counter/Counter.jsx";

function App() {
  // Logica dello stato e del componente
  return (
    <>
      {/* Contenuto di App */}
      <Counter initialCount={chosenCount} />
    </>
  );
}

export default App;
```

In questo esempio:

- `App` contiene un componente `Counter`, che viene renderizzato con la prop `initialCount`.
- Se `chosenCount` non cambia tra le renderizzazioni, `memo` evita che `Counter` venga rieseguito, anche se `App` viene renderizzato nuovamente.

### Applicazione Pratica in `App`

Nel contesto di `App`, l'utilizzo di `memo` in `Counter` garantisce che il componente `Counter` non venga re-renderizzato inutilmente. Se, ad esempio, l'input di `App` viene modificato ma non interagisce con `Counter` (come nel caso del click sul bottone che non modifica direttamente le props di `Counter`), il componente `Counter` non verrà re-renderizzato, nonostante `App` subisca un re-render.

## Conclusioni

L'utilizzo di `memo` in React è un modo efficace per ottimizzare le prestazioni delle applicazioni, specialmente in scenari con molti componenti o con componenti che ricevono props complesse. Attraverso la memorizzazione dei risultati del render e la valutazione intelligente delle props, `memo` aiuta a ridurre i re-render non necessari, migliorando così l'efficienza complessiva dell'applicazione.