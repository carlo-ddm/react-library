import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateCartItemQuantity: () => {}
})

// Maiuscola perché il valore **restituito** da metodo createContext e registrato in costante CartContext sarà in realtà un oggetto che contiene un componente React.
// L'oggetto che passo come argomento al metodo createContext è il valore iniziale che utilizzo nel metodo che alla fine restituirà l'oggetto contenente il componente, che sarà salvato in costante CartContext