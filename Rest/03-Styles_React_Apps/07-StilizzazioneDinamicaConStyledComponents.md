### Documentazione 07-StilizzazioneDinamicaConStyledComponents.md

#### Introduzione

La stilizzazione dinamica e condizionale con `styled-components` in React permette di applicare stili basati sulle proprie dei componenti. È una pratica comune per gestire variazioni di stile in base allo stato o alle proprie. È inoltre considerato una buona pratica non mischiare classi CSS e stili inline con i wrapper di `styled-components` per mantenere la coerenza e la chiarezza del codice.

#### Esempio di Stilizzazione Dinamica

Utilizzando `styled-components`, possiamo passare proprie ai componenti per controllare i loro stili. Ecco un esempio che mostra come cambiare il colore del testo di un'etichetta (`<Label>`) in base alla validità di un'email:

```jsx
<Label invalid={emailNotValid}>Email</Label>;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;

  color: ${(props) => {
    return props.invalid ? "#f87171" : "#6b7280";
  }};

  color: ${({ invalid }) => {
    return invalid ? "#f87171" : "#6b7280";
  }};
`;
```

#### Spiegazione

- **Passaggio di Proprie**: `invalid={emailNotValid}` passa la prop `invalid` al componente `Label`. Questa prop può essere usata per controllare gli stili.
- **Funzione Arrow per Stili Dinamici**: All'interno del template literal di `styled-components`, usiamo una funzione arrow per determinare lo stile in base alle proprie.
- **Due Modelli di Funzione**:
  - **Non Destrutturata**: `(props) => { ... }` accede alle proprie attraverso l'oggetto `props`.
  - **Destrutturata**: `({invalid}) => { ... }` utilizza la destrutturazione per accedere direttamente alla prop `invalid`.
- **Regole della Funzione Arrow**: Le funzioni seguono le stesse regole delle arrow functions standard in JavaScript. Se la funzione è su più righe, è necessario usare `return`. Per funzioni su una sola riga, `return` è implicito.

#### Buone Pratiche

- **Separazione di Concern**: Mantenere la logica degli stili all'interno dei componenti stilizzati e non mischiare con stili inline o classi CSS esterne.
- **Leggibilità**: Utilizzare la destrutturazione delle proprie per una maggiore leggibilità e chiarezza del codice.
- **Consistenza**: Applicare un approccio consistente alla definizione degli stili dinamici attraverso il progetto.

#### Conclusione

La stilizzazione dinamica con `styled-components` offre un metodo potente e flessibile per personalizzare l'aspetto dei componenti in React. Seguendo le buone pratiche e sfruttando le capacità di `styled-components`, è possibile creare componenti reattivi e mantenibili che rispondono dinamicamente ai cambiamenti delle proprie.

#### Nota sulla Convenzione di Nomenclatura delle Proprie in `styled-components`

Nella stilizzazione dinamica con `styled-components`, è comune adottare una convenzione di nomenclatura che prevede l'uso del simbolo `$` come prefisso per le proprie passate ai componenti stilizzati. Questa convenzione aiuta a distinguere tra proprie che influenzano gli stili e altre proprie utilizzate per la logica del componente.

##### Esempio con la Convenzione `$`
Riprendendo l'esempio precedente, potremmo adottare questa convenzione come segue:

```jsx
<Label $invalid={emailNotValid}>Email</Label>

const Label = styled.label`
  ...
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;
```

In questo esempio, la prop `invalid` è stata rinominata in `$invalid`. Questo aiuta a chiarire che si tratta di una prop utilizzata specificamente per influenzare lo stile del componente `Label`.

#### Benefici dell'Uso della Convenzione `$`
- **Chiarezza**: Rende più chiaro il ruolo delle proprie all'interno del componente, distinguendo tra proprie di stile e proprie funzionali.
- **Prevenzione di Conflitti**: Riduce il rischio di conflitti con proprie native o passate a componenti di livello inferiore.
- **Leggibilità del Codice**: Migliora la leggibilità e la manutenzione del codice, specialmente in componenti complessi o in progetti di grandi dimensioni.

#### Conclusione
L'adozione della convenzione di anteporre `$` alle proprie in `styled-components` è una pratica utile che aumenta la chiarezza e la manutenibilità del codice. Questa convenzione, sebbene non obbligatoria, può essere particolarmente vantaggiosa in progetti più complessi o quando si lavora in team.
