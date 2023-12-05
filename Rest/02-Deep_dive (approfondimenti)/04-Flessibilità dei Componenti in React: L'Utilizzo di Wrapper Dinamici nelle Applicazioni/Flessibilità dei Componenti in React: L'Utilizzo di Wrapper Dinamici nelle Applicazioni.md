## Documentazione Componente `Tabs`

### Panoramica

Il componente `Tabs` è un componente React flessibile per la costruzione di interfacce a schede. Esso permette agli sviluppatori di definire sia il contenuto delle schede (`children`) sia i bottoni di navigazione (`buttons`), fornendo anche la libertà di specificare il contenitore dei bottoni (`ButtonsContainer`) per una completa personalizzazione dell'aspetto e della struttura.

### Struttura e Proprietà

Il componente `Tabs` è strutturato come segue:

```jsx
export default function Tabs({ children, buttons, ButtonsContainer }) {
  return (
    <div>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </div>
  );
}
```

Dove:

- `children` (ReactNode): Il contenuto che sarà mostrato quando una scheda è selezionata.
- `buttons` (ReactNode): Elementi bottoni che permettono la navigazione tra le diverse schede.
- `ButtonsContainer` (ComponentType | string): Un componente React o una stringa che identifica l'elemento HTML da utilizzare come contenitore dei bottoni.

### Dettaglio delle Proprietà

- `children`: Questa è una proprietà speciale di React che contiene i componenti figli che vengono passati dall'esterno. In `Tabs`, questi figli sono il contenuto delle schede che devono essere visualizzati quando una scheda è attiva.

- `buttons`: Una collezione di elementi JSX che rappresentano le schede navigabili dell'interfaccia. Questi bottoni sono tipicamente implementati come un array di elementi `<TabButton>`, ciascuno dei quali ha la propria logica per determinare se la scheda corrispondente è attiva e la funzionalità di click che aggiorna lo stato selezionato.

- `ButtonsContainer`: Un componente o un elemento HTML che funge da contenitore per gli elementi `buttons`. Se viene passata una stringa, questa viene interpretata come il tipo di elemento HTML da creare. Se viene passato un componente React, questo verrà utilizzato direttamente. 

### Funzionamento Interno

All'interno del componente `Tabs`, viene restituito un elemento `<div>` radice che contiene due principali elementi JSX:

1. `<ButtonsContainer>`: Agisce come genitore dei `buttons`. Qui, React tratta `ButtonsContainer` come un componente, che significa che se viene fornita una stringa (come `"div"` o `"menu"`), React la convertirà nell'elemento HTML corrispondente. Se `ButtonsContainer` è un componente React, verrà renderizzato direttamente come tale.

2. `{children}`: Questo rappresenta il contenuto delle schede che verrà renderizzato indipendentemente dalla logica dei bottoni.

### Utilizzo del Componente `Tabs`

Il componente `Tabs` è utilizzato per costruire l'interfaccia utente come mostrato nell'esempio seguente:

```jsx
<Section title="Examples" id="examples">
  <Tabs
    ButtonsContainer="menu" // può essere anche "div" o altri elementi HTML
    buttons={
      // ...
      // Bottoni delle schede qui
      // ...
    }
  >
    {tabContent} // Contenuto delle schede da visualizzare
  </Tabs>
</Section>
```

### Esempio Pratico

Nell'esempio, `ButtonsContainer` è utilizzato per passare `"menu"`, che verrà trasformato in un tag `<menu>` da React per avvolgere i bottoni delle schede. La prop `buttons` contiene un frammento JSX con una serie di bottoni che permettono all'utente di selezionare la scheda desiderata. Quando un bottone è cliccato, lo stato `selectedTopic` viene aggiornato di conseguenza, mostrando il contenuto appropriato nel componente `Tabs`.

### Considerazioni Finali

È importante notare che il componente `Tabs` non contiene logica interna per gestire lo stato delle schede attive o il contenuto associato; questa logica deve essere gestita esternamente dall'applicazione che utilizza `Tabs`. In questo modo, il componente `Tabs` rimane flessibile e riutilizzabile in diversi contesti all'interno dell'applicazione.

### Semplificazione

```jsx
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    <div>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </div>
  );
}
```

In questo modo, si evita il passaggio del valore dal compoente genitore al componente figlio.
Quindi:

```jsx
<Section title="Examples" id="examples">
  <Tabs
    // ButtonsContainer="menu" 
    buttons={
      // ...
      // Bottoni delle schede qui
      // ...
    }
  >
    {tabContent}
  </Tabs>
</Section>
```