### Documentazione 02-GestioneStiliGlobaliInReact.md

#### Introduzione
Nelle applicazioni React, sebbene sia possibile separare gli stili in file distinti per ogni componente, gli stili importati non sono scoped per default. Ciò significa che, nonostante l'importazione di un foglio di stile specifico in un file JSX, gli stili restano globali e possono influenzare altri componenti nell'applicazione.

#### Problemi Associati alla Mancanza di Scoping
1. **Conflitti di Stili**: Senza scoping, i selettori CSS definiti in un componente possono sovrascrivere involontariamente gli stili di altri componenti.
2. **Difficoltà nella Manutenzione**: La mancanza di scoping può rendere la manutenzione dei fogli di stile più complessa, specialmente in applicazioni di grandi dimensioni.

#### Importazione degli Stili nei Componenti JSX
Nonostante la mancanza di scoping nativo, gli stili vengono comunemente importati nei componenti React per mantenerli organizzati. Ecco un esempio generico:

- **File CSS (`Component.css`)**:
  ```css
  .componentClass {
      background-color: #f5f5f5;
  }
  ```

- **File JSX del Componente (`Component.jsx`)**:
  ```jsx
  import React from 'react';
  import './Component.css'; // Importazione del file CSS

  const Component = () => {
      return <div className="componentClass">Contenuto del componente</div>;
  };

  export default Component;
  ```

In questo esempio, `Component.css` contiene gli stili per `Component.jsx`. L'importazione del CSS in `Component.jsx` applica gli stili al componente, ma non previene la loro applicazione ad altri componenti che utilizzano le stesse classi CSS.

#### Conclusione
La mancanza di scoping nativo degli stili in React richiede una gestione attenta degli stili, specialmente in applicazioni più grandi e complesse. È importante tenere conto di questa caratteristica quando si progettano e si implementano gli stili nei componenti React.