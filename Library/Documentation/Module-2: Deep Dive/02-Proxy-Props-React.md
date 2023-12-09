[Torna al sommario](../../Summary.md)

# `Documentazione: Inoltro delle Props in React`

### Inoltro delle Props in React

#### Introduzione

In React, le props passate a un componente non vengono automaticamente inoltrate agli elementi JSX interni. Questa limitazione può creare sfide di scalabilità, soprattutto con l'aumento del numero di props. Consideriamo l'esempio del componente `Section`:

```jsx
const Section = ({ title, id, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};
```

Qui, nonostante l'attributo `id` sia passato a `Section`, non viene applicato all'elemento `<section>` interno.

#### Soluzione: Forwarded Props o Proxy Props

Per superare questo problema, un pattern comune in React è l'utilizzo delle "forwarded props" o "proxy props". Questa strategia consente di passare tutte le props a un componente figlio senza specificarle manualmente.

Ecco due esempi di implementazione:

1. **Esempio con tutte le props eccetto 'children'**:

   ```jsx
   const Section = ({ title, children, ...rest }) => {
     return (
       <section {...rest}>
         <h3>{title}</h3>
         {children}
       </section>
     );
   };
   ```

2. **Esempio includendo 'children' nelle props restanti**:
   ```jsx
   const Section = ({ title, ...rest }) => {
     return (
       <section {...rest}>
         <h3>{title}</h3>
         {rest.children}
       </section>
     );
   };
   ```

In entrambi i casi, l'operatore spread (`...rest`) raccoglie tutte le props non destrutturate e le applica all'elemento `<section>`.

#### Primo Esempio: Passaggio delle props a `Section`

Vediamo un esempio pratico di come utilizzare questo pattern nel componente `Section`:

```jsx
// Importazioni necessarie
import { useState } from "react";
import Section from "./Section";

const Examples = () => {
  // Gestione dello stato e della logica
  const [selectedTopic, setSelectedTopic] = useState("components");

  // Contenuto condizionale
  let tabContent = <p>Please, select a topic!</p>;
  // ...

  // Rendering del componente `Section` con forwarding delle props
  return (
    <Section title="Examples" id="examples">
      {tabContent}
    </Section>
  );
};

export default Examples;

// Definizione di `Section` con forwarding delle props
const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
```

#### Secondo Esempio: Aggiornamento di `TabButton`

Inoltre, vediamo come questo concetto viene applicato al componente `TabButton`:

```jsx
// Definizione aggiornata di `TabButton`
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button {...props} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
}
```

Questo esempio mostra come le props vengono inoltrate al componente `TabButton`, incluso l'evento `onClick`.

### Conclusione

L'utilizzo delle forwarded props o proxy props in React è un metodo efficace e scalabile per gestire un numero elevato di props in un componente. Permette di garantire che tutte le props vengano correttamente inoltrate agli elementi JSX interni, aumentando la flessibilità e la riusabilità dei componenti.
