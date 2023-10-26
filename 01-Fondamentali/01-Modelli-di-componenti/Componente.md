## Esempio 1: Funzione Dichiarativa con Export Separato

```jsx
function Component() {
    return (
        <div></div>
    )
};

export default Component;
```

In questo modello, si fa uso di una funzione dichiarativa per definire il componente. L'istruzione export è separata dalla dichiarazione del componente. Questo offre la flessibilità di aggiungere ulteriori linee di codice tra la dichiarazione e l'export, se necessario.

---

## Esempio 2: Funzione Dichiarativa con Export Diretto

```jsx
export default function Component() {
    return (
        <div></div>
    )
};
```

In questo caso, si esporta il componente direttamente durante la dichiarazione. Questo è più conciso, ma limita la capacità di aggiungere logica extra prima dell'istruzione export.

---

## Esempio 3: Funzione Freccia con Export Separato

```jsx
const Component = () => {
    return (
        <div></div>
    )
};

export default Component;
```

In questo modello, si utilizza una funzione freccia. Anche in questo caso, l'istruzione export è separata dalla dichiarazione del componente. La funzione freccia risulta essere più concisa e non ha un proprio `this`, il che può risultare utile a seconda del contesto.

---

## Esempio 4: Funzione Freccia Concisione Massima

```jsx
const Component = () =>  <div></div>;

export default Component;
```

Questo rappresenta il modello più snello. Si fa uso di una funzione freccia e si omettono le parentesi graffe e l'istruzione return. Ciò è possibile solo quando il corpo della funzione consiste in una singola espressione. Si tratta del metodo più "elegante" per definire un componente quando non è necessaria alcuna logica aggiuntiva.

---
