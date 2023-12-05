**Inoltro delle Props in React**

In React, quando passiamo delle props a un componente, queste non vengono automaticamente inoltrate all'elemento JSX interno a quel componente. Questo comportamento può portare a problemi di scalabilità, soprattutto quando il numero di props da gestire cresce.

Per esemplificare, consideriamo il seguente componente `Section`:

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

Nell'esempio fornito:

```jsx
<Section title={"Examples"} id="examples">
  {/* altri componenti */}
</Section>
```

Sebbene l'attributo `id` sia passato al componente `Section`, non viene effettivamente applicato all'elemento `<section>` all'interno del componente. Una soluzione potrebbe essere quella di destrutturare le props e applicarle manualmente:

```jsx
const Section = ({ title, id, children }) => {
  return (
    <section id={id}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};
```

Tuttavia, questa soluzione diventa meno gestibile all'aumentare delle props, poiché richiede che ciascuna prop venga manualmente inoltrata all'elemento interno.

**Soluzione: Forwarded Props o Proxy Props**

Un pattern comune in React per affrontare questo problema è l'uso delle "forwarded props" o "proxy props". Questo approccio consiste nel passare tutte le props a un componente figlio senza doverle specificare manualmente.

Ecco come funziona:

```jsx
const Section = ({ title, children, ...rest }) => {
  return (
    <section {...rest}> // id
      <h3>{title}</h3>
      {children}
    </section>
  );
};
```

Altro esempio:

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

Utilizzando l'operatore spread (`...rest`), tutte le props in eccesso (cioè quelle non destrutturate come `title` e `children`) vengono raccolte all'interno dell'oggetto `rest` e quindi applicate all'elemento `<section>`.

Questo approccio rende il componente molto più flessibile, consentendo di passare qualsiasi attributo o prop all'elemento JSX interno senza dover modificare la definizione del componente ogni volta.

In sintesi, l'utilizzo delle forwarded props o proxy props in React offre una soluzione scalabile e conveniente per gestire un numero variabile di props in un componente, garantendo che tutte le props vengano correttamente inoltrate agli elementi JSX interni.

**Nota Importante:**  
Il tema trattato in questa sezione è già stato discusso in dettaglio nel contesto dei componenti che non agiscono come wrapper. Consulta il documento in `01-Fondamentali/07-Props/02-Sintassi-spread/Sintassi_spread.md`.

