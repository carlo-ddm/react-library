### Documentazione sui Portali in React

#### Introduzione ai Portali

I Portali in React consentono di rendere componenti in un nodo DOM che esiste al di fuori dell'elemento DOM del componente genitore. Questo è particolarmente utile per i componenti come modali, tooltip e notifiche.

#### Come Funzionano i Portali

1. **Creazione del Nodo Target**: Un nodo DOM, ad esempio `<div id="modal"></div>`, deve esistere da qualche parte nell'HTML dell'applicazione.
2. **Utilizzo di `createPortal`**: `createPortal` di React DOM è utilizzato per inserire il contenuto JSX in un nodo DOM diverso.

#### Esempio di Utilizzo

```jsx
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime },
  ref
) {
  // ... Logica del componente
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {/* Contenuto del dialogo */}
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
```

#### Spiegazione dell'Esempio

1. **`createPortal`**: La funzione `createPortal` prende come primo argomento il JSX e come secondo argomento il nodo DOM target, qui identificato dall'ID `'modal'`.
2. **Teletrasporto del Contenuto**: Il contenuto del `ResultModal` verrà renderizzato all'interno dell'elemento con ID `'modal'`, indipendentemente dalla sua posizione nell'albero dei componenti di React.

#### Conclusione

I Portali sono strumenti potenti in React per gestire modali e altri elementi che devono "rompere" il normale flusso dell'albero dei componenti. Offrono una soluzione pulita per la gestione di elementi che devono essere visualizzati in punti diversi della gerarchia DOM.
