## State Lifting in React

### Introduzione allo State Lifting
Lo **State Lifting** è una pratica in React per spostare lo stato verso l'alto nell'albero dei componenti, consentendo a più componenti di condividere e manipolare lo stesso stato.

### Esempio Pratico
Utilizziamo gli esempi dei tuoi file `App.jsx` e `UserInput.jsx` per illustrare questo concetto.

#### Struttura dei Componenti
- **Componente Genitore (`App.jsx`)**: Utilizza lo stato sollevato dal componente figlio.
- **Componente Figlio (`UserInput.jsx` modificato)**: Gestisce il proprio stato e comunica le modifiche al genitore.

#### Implementazione
1. **Gestione dello Stato Interno nel Componente Figlio (`UserInput.jsx` modificato)**:
   ```jsx
   import { useState } from "react";

   export default function UserInput({ onChangeInput }) {
     const [userInput, setUserInput] = useState({
       initialInvestment: 1500,
       annualInvestment: 20,
       expectedReturn: 15,
       duration: 5,
     });

     function handleChange(inputIdentifier, event) {
       const value = event.target.value;
       setUserInput(prevUserInput => {
         const newState = {
           ...prevUserInput,
           [inputIdentifier]: value
         };
         onChangeInput(newState);
         return newState;
       });
     }

     return (
       <div>
         <input
           type="number"
           value={userInput.initialInvestment}
           onChange={(event) => handleChange('initialInvestment', event)}
         />
         // Altri input che utilizzano handleChange in modo simile
       </div>
     );
   }
   ```

2. **Ricezione e Utilizzo dello Stato nel Componente Genitore (`App.jsx`)**:
   ```jsx
   import UserInput from "./UserInput";
   import { useState } from "react";

   function App() {
     const [userInput, setUserInput] = useState({});

     function handleUserInputChange(newUserInput) {
       setUserInput(newUserInput);
     }

     return <UserInput onChangeInput={handleUserInputChange} />;
   }
   ```

### Vantaggi dello State Lifting
- **Condivisione dello Stato**: Facilita la condivisione dello stato tra componenti a diversi livelli.
- **Minimizzazione del Prop Drilling**: Riduce il bisogno di passare props attraverso diversi livelli.

### Svantaggi dello State Lifting
- **Aumento della Complessità nel Genitore**: Può rendere il componente genitore più complesso.
- **Ristrutturazione Architetturale**: Potrebbe richiedere cambiamenti nell'architettura dei componenti.

### Conclusioni
Lo State Lifting è utile in scenari dove diversi componenti devono interagire con lo stesso stato. Offre una soluzione per evitare il Prop Drilling eccessivo, ma richiede una pianificazione e un'architettura attente.

---

Questa revisione dovrebbe fornire una rappresentazione accurata dello State Lifting, mostrando in dettaglio come gli eventi vengono gestiti e scatenati nel componente `UserInput.jsx`. Se ci sono ulteriori dettagli o aspetti che vorresti approfondire, sono a tua disposizione per aiutarti.