[Torna al sommario](../../Summary.md)

# `Documentazione: Uso di 'useCallback' per Ottimizzare il Rendering in React`

#### 1. Analisi della Situazione di Partenza

Dai file allegati, emergono componenti React specifici, tra cui `IconButton`, che è stato ottimizzato con l'uso di `memo`. Questa strategia è stata adottata per evitare re-rendering non necessari del componente `IconButton`. Ecco il codice modificato per `IconButton`:

```javascript
// IconButton.jsx
import { log } from "../../log.js";
import { memo } from "react";

const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
```

#### 2. Problema di Re-rendering nonostante `memo`

Il componente `IconButton` è avvolto con `memo` per prevenire re-rendering inutili. Tuttavia, emerge un problema: quando il metodo `handleDecrement` del componente `Counter` viene eseguito, modifica lo stato, causando il re-render di `Counter`. Questo re-render genera una nuova funzione `handleDecrement` con una referenza diversa a ogni aggiornamento, invalidando così il caching fatto da `memo` su `IconButton`, dato che `handleDecrement` viene passato come prop.

#### 3. Soluzione: Uso di `useCallback` in `Counter`

Per risolvere questo problema, si utilizza l'hook `useCallback` in `Counter`. L'hook `useCallback` restituisce una versione memorizzata della funzione che cambia solo se una delle sue dipendenze cambia. Ecco come viene applicato:

```javascript
// Counter.jsx
import { useCallback } from "react";

const handleDecrement = useCallback(function handleDecrement() {
  setCounter((prevCounter) => prevCounter - 1);
}, []);

const handleIncrement = useCallback(function handleIncrement() {
  setCounter((prevCounter) => prevCounter + 1);
}, []);
```

#### 4. Importanza dell'Array di Dipendenze

L'array di dipendenze in `useCallback` è fondamentale. Esso determina quando la funzione memorizzata deve essere ricreata:

- Inserire nell'array tutte le props, gli stati o i valori di contesto utilizzati all'interno della funzione.
- Se uno di questi valori cambia, la funzione viene ricreata per utilizzare i valori più recenti.
- Nel caso di `handleDecrement` e `handleIncrement`, l'array di dipendenze è vuoto (`[]`) perché le funzioni di set come `setCounter` fornite da React sono garantite per rimanere costanti e non richiedono la ricreazione della callback.

#### Conclusione

L'uso di `useCallback` in combinazione con `memo` è una strategia potente per ottimizzare le prestazioni in React. `useCallback` assicura che le funzioni non vengano ricreate inutilmente tra i render, permettendo così a `memo` di prevenire efficacemente re-rendering non necessari quando le props non cambiano.
