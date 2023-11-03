## Primo Esempio: Passaggio delle props a `Section`

```jsx
import TapButton from "./TapButton";
import { useState } from "react";
import { EXAMPLES } from "../data-with-examples";
import Section from "./Section";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please, select a topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
      </div>
    );
  }

  // Rendering del componente `Section` passando le props.
  return (
    <Section title="Examples" id="examples">
      // ...
      {tabContent}
    </Section>
  );
};

export default Examples;

// Definizione del componente `Section` che riceve le props.
const Section = ({ title, children, ...props }) => {
  // Utilizzo dell'operatore spread per passare tutte le props restanti al tag <section>.
  return (
    <section {...props}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
```

In questo esempio, il forwarding delle props avviene nel componente `Section`, dove tutte le props ricevute vengono passate al tag HTML `<section>` utilizzando l'operatore spread (`...props`). Questo permette di passare tutte le proprietà non esplicitamente distrutte (come `title` e `children`) direttamente al tag `<section>`, permettendo una maggiore flessibilità e riusabilità del componente.

## Secondo Esempio: Aggiornamento di `TapButton`

```jsx
// Definizione aggiornata del componente `TapButton`.
export default function TapButton({ children, isSelected, ...props }) {
  // Passaggio delle props rimanenti al button e gestione della classe.
  return (
    <li>
      <button
        {...props} // Forwarding di tutte le props eccetto 'isSelected'.
        className={isSelected ? "active" : undefined} // Assegnazione condizionale della classe.
      >
        {children}
      </button>
    </li>
  );
}
```

### Confronto con il Vecchio Approccio

Precedentemente, il componente `TapButton` aveva una prop `onSelected` che gestiva l'evento di click, passata esplicitamente così:

```jsx
// Versione precedente di `TapButton` prima della modifica.
export default function TapButton({ children, isSelected, onSelected }) {
  return (
    <li>
      <button
        onClick={onSelected} // Gestione esplicita dell'evento onClick.
        className={isSelected ? "active" : undefined} // Gestione della classe.
      >
        {children}
      </button>
    </li>
  );
}
```

Il passaggio delle props dal genitore al figlio avveniva utilizzando il nome `onSelect` anziché `onClick`, come mostrato qui:

```jsx
// Esempio di come veniva passata la prop 'onSelect' nel vecchio approccio.
<TapButton
  isSelected={selectedTopic === "components"}
  onSelect={() => handleSelect("components")} // Vecchio nome della prop per l'evento di click.
>
  Components
</TapButton>
```

### Differenze Chiave

- **Nome della Prop per Eventi**: Nel vecchio approccio, la prop `onSelected` veniva utilizzata per passare la funzione `handleSelect` dal genitore al componente `TapButton`. Nel nuovo approccio, si utilizza l'operatore spread per passare `onClick` (e tutte le altre props extra) direttamente al componente `TapButton`, aderendo più strettamente alle convenzioni di React.
  
- **Forwarding delle Props**: Prima della modifica, la gestione dell'evento di click era esplicita e personalizzata tramite la prop `onSelect`. Dopo la modifica, `TapButton` utilizza l'operatore spread (`...props`) per passare qualsiasi prop aggiuntiva, incluso l'handler `onClick`, che è più in linea con il nome dell'evento nativo di JavaScript e riduce la necessità di intermediari personalizzati.

- **Flessibilità**: Il nuovo approccio è più flessibile e permette a `TapButton` di ricevere e utilizzare qualsiasi evento o prop senza la necessità di modificare il componente interno.

Con queste modifiche, la tua documentazione dovrebbe ora riflettere accuratamente la struttura attuale del tuo componente `TapButton` e come le props vengono forwardate.