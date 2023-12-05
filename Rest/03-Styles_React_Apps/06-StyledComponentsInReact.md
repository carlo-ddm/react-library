### Documentazione 06-StyledComponentsInReact.md

#### Introduzione
`styled-components` è una libreria popolare in React per stilizzare i componenti utilizzando CSS-in-JS. Questa libreria permette di definire stili a livello di componente, fornendo un approccio più dichiarativo e modulare alla stilizzazione.

#### Installazione di `styled-components`
Per utilizzare `styled-components`, è necessario installare il pacchetto nel progetto React. Si può fare utilizzando npm:

```bash
npm i styled-components
```

#### Importazione di `styled-components`
Dopo aver installato il pacchetto, è possibile importare `styled` dalla libreria `styled-components` in qualsiasi file JSX:

```jsx
import styled from 'styled-components';
```

#### Implementazione di `styled-components`
Con `styled-components`, si definiscono componenti stilizzati utilizzando funzioni di template literal. Ecco un esempio di come creare un componente stilizzato:

```jsx
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
```

In questo esempio, `ControlContainer` è un nuovo componente React che renderizza un elemento `<div>` con gli stili CSS definiti.

#### Utilizzo di `styled-components` nel JSX
I componenti creati con `styled-components` possono essere utilizzati direttamente nel JSX, proprio come qualsiasi altro componente React. Ecco come utilizzare `ControlContainer`:

```jsx
return (
  <div id="auth-inputs">
    <ControlContainer>
      <p>
        <label>Email</label>
        <input
          type="email"
          className={emailNotValid && "invalid"}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
      </p>
      <p>
        <label className={`invalid ${emailNotValid ? "invalid" : ""}`}>
          Password
        </label>
        <input
          type="password"
          className={passwordNotValid ? "invalid" : undefined}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </p>
    </ControlContainer>
    ...
  </div>
);
```

In questo esempio, `ControlContainer` sostituisce un `<div>` con classe "controls". Gli stili sono già incorporati nel componente `ControlContainer`, rendendo inutile l'uso di una classe CSS esterna.

#### Vantaggi di `styled-components`
1. **Scoping Automatico**: Gli stili sono applicati in modo specifico ai componenti, prevenendo conflitti.
2. **Riuso e Modularità**: I componenti stilizzati possono essere riutilizzati in tutto il progetto.
3. **Leggibilità e Manutenibilità**: La colocalizzazione di stili e componenti migliora la leggibilità e facilita la manutenzione.

#### Conclusione
`styled-components` offre un approccio potente e flessibile alla gestione degli stili in applicazioni React. Con la sua semplicità di uso e la capacità di scoping automatico, è una scelta popolare per molti sviluppatori React nel creare interfacce utente ricche e modulari.