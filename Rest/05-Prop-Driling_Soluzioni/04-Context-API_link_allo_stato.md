### Link allo Stato con il Context API in React

Il "link allo stato" in React utilizza il Context API per condividere e gestire lo stato dell'applicazione tra componenti diversi. Questa pratica consente di mantenere lo stato in un unico luogo e di accedervi o modificarlo da diversi punti dell'applicazione.

#### Creazione del Context

Il contesto viene inizialmente creato con un valore di default che rappresenta la struttura dello stato che si desidera condividere.

```javascript
import { createContext } from "react";

export const CartContext = createContext({
  items: [],
});
```

#### Stato in App.jsx

Lo stato `shoppingCart` in `App.jsx` rappresenta lo stato centrale che vogliamo condividere attraverso il contesto.

```javascript
function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  // ulteriori implementazioni...
}
```

#### Link dello Stato al Context

Il contesto viene collegato allo stato tramite il `Provider`, passando lo stato `shoppingCart` come valore.

```javascript
return (
  <CartContext.Provider value={shoppingCart}>
    {/* componenti figli */}
  </CartContext.Provider>
);
```

#### Accesso al Stato nel Componente Cart.jsx

Il componente `Cart` accede allo stato condiviso tramite il contesto, utilizzando il hook `useContext`.

```javascript
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

export default function Cart({ items, onUpdateItemQuantity }) {
  const cartctx = useContext(CartContext);

  // ulteriori implementazioni...
}
```

- **Uso di `useContext`**: Permette al componente `Cart` di accedere direttamente allo stato condiviso `shoppingCart`.
- **Manipolazione del Stato**: Le operazioni all'interno di `Cart`, come il calcolo del prezzo totale, operano direttamente sullo stato condiviso.

### Vantaggi di Questo Approccio

1. **Centralizzazione dello Stato**: Lo stato viene mantenuto in un unico luogo (`App.jsx`), facilitando la gestione e il debug.
2. **Riduzione del Prop Drilling**: Elimina la necessità di passare lo stato e le funzioni attraverso molteplici livelli di componenti.
3. **Riusabilità e Separazione delle Preoccupazioni**: I componenti diventano più riusabili e concentrati sulle loro specifiche funzionalità piuttosto che sulla gestione dello stato.

Questo approccio dimostra come il Context API possa essere utilizzato per gestire efficacemente e centralmente lo stato in un'applicazione React, rendendo i dati facilmente accessibili ai componenti che ne hanno bisogno, senza la complessità del prop drilling.


