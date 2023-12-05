### Documentazione 09-DivisioneStiliConStyledComponents.md

#### Introduzione

La divisione degli stili con `styled-components` in più file è una pratica utile per mantenere il codice organizzato e per migliorare la riutilizzabilità dei componenti stilizzati. Questo approccio consiste nel definire componenti stilizzati in file separati e poi importarli dove necessario.

#### Divisione dei Componenti Stilizzati

La divisione in file separati si rivela particolarmente utile in progetti di grandi dimensioni, dove mantenere tutti gli stili in un unico file può diventare disordinato e difficile da gestire.

##### Creazione di un Componente Stilizzato Separato

**File: Button.jsx**

```jsx
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;

export default StyledButton;
```

- **Definizione**: `StyledButton` è definito come un componente stilizzato.
- **Esportazione**: Il componente è esportato per essere utilizzato in altri file.

##### Utilizzo del Componente Stilizzato in un Altro File

**File: AuthInputs.jsx**

```jsx
import StyledButton from "./Button";

<StyledButton className="button" onClick={handleLogin}>
  Sign In
</StyledButton>;
```

- **Importazione**: `StyledButton` viene importato dal file `Button.jsx`.
- **Uso**: Il componente `StyledButton` può essere utilizzato come qualsiasi altro componente React.

#### Vantaggi della Divisione degli Stili

1. **Riutilizzabilità**: Componenti stilizzati possono essere riutilizzati in diverse parti dell'applicazione.
2. **Mantenibilità**: Separare gli stili in file distinti rende il codice più organizzato e facile da mantenere.
3. **Scalabilità**: Facilita la gestione dei componenti stilizzati in progetti di grandi dimensioni.

#### Conclusione

La divisione degli stili in più file utilizzando `styled-components` è una strategia efficace per mantenere il codice pulito, organizzato e facilmente mantenibile. Attraverso l'uso di file separati per i componenti stilizzati, si migliora la riutilizzabilità e la scalabilità dei componenti in un'applicazione React.

---

#### Aggiunta: Esempio Complesso di Combinazione di Più Styled Components

Nel contesto di un'applicazione React più complessa, spesso è necessario creare e combinare più componenti stilizzati. Questo processo può includere il passaggio delle proprie e la loro utilizzazione per controllare condizioni di stile specifiche.

##### Creazione e Combinazione di Componenti Stilizzati

**File: Inputs.jsx**

```jsx
import styled from "styled-components";

const Label = styled.label`
  ...
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

const Input = styled.input`
  ...
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#f1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
  border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
`;

export default function CustomInputs({ label, invalid, ...rest }) {
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <Input {...rest} />
    </p>
  );
}
```

**File: AuthInputs.jsx**

```jsx
import CustomInputs from "./Inputs";

<CustomInputs
  type="email"
  label="Email"
  invalid={emailNotValid}
  onChange={(event) => handleInputChange("email", event.target.value)}
/>;
```

#### Spiegazione dei Passaggi Chiave

1. **Passaggio delle Proprie**:

   - In `CustomInputs`, la prop `invalid` viene passata a `Label` e `Input`. Questo permette di controllare dinamicamente gli stili basati sulla validità dell'input.
   - `...rest` viene utilizzato per passare tutte le altre proprie all'`Input`, come `type` e `onChange`.

2. **$invalid in Styled Components**:

   - Il prefisso `$` è usato per indicare che questa prop è utilizzata per il controllo dello stile.
   - Questa convenzione aiuta a distinguere le proprie di stile da quelle funzionali.

3. **Sostituzione del Codice Originale**:

   - `CustomInputs` sostituisce il blocco originale di `Label` e `Input`, raggruppandoli in un unico componente riutilizzabile.

   - Questo approccio migliora la modularità e la leggibilità del codice.

#### Benefici della Combinazione di Styled Components

- **Riutilizzabilità**: Componenti come `CustomInputs` possono essere riutilizzati in diverse parti dell'applicazione.
- **Organizzazione del Codice**: Mantenere componenti stilizzati separati e combinati in un unico componente funzionale aiuta a mantenere il codice organizzato.
- **Mantenibilità**: La modifica degli stili o della logica diventa più semplice e centralizzata.

#### Conclusione

La combinazione di più styled components in un unico componente funzionale, come `CustomInputs`, rappresenta un approccio efficace per gestire la stilizzazione in applicazioni React complesse. Questa pratica non solo migliora la modularità e la riutilizzabilità dei componenti, ma contribuisce anche a mantenere il codice più organizzato e facilmente manutenibile.
