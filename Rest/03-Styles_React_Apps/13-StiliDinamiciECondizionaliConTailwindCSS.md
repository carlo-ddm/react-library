### Documentazione 13-StiliDinamiciECondizionaliConTailwindCSS.md

#### Introduzione

Tailwind CSS, insieme a JavaScript, può essere utilizzato per creare stili dinamici e condizionali in un'applicazione React. Questo approccio consente di cambiare le classi di utilità in base alle condizioni di runtime.

#### Esempio di Stili Dinamici e Condizionali

##### Codice di Esempio

```jsx
export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";

  if (invalid) {
    labelClasses += " text-red-400";
  } else {
    labelClasses += " text-stone-300";
  }

  return (
    <>
      <label className={labelClasses}>{label}</label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
        {...props}
      />
    </>
  );
}
```

##### Spiegazione

- **Assegnazione Condizionale**: Qui, `labelClasses` cambia in base al valore della prop `invalid`. Se `invalid` è `true`, la classe `text-red-400` viene aggiunta per visualizzare il testo in rosso. Altrimenti, viene utilizzata `text-stone-300`.
- **Utilizzo di Tailwind CSS**: Le classi di utilità di Tailwind vengono utilizzate per definire gli stili di base del label e dell'input.
- **Propagazione delle Proprie**: `...props` permette di passare ulteriori proprie all'elemento `input`.

#### Conclusione

L'uso di Tailwind CSS in combinazione con la logica JavaScript consente di creare stili dinamici e condizionali in modo efficiente. Questa tecnica è utile per gestire gli stati visivi degli elementi UI, come la validazione dei form, mantenendo il codice pulito e organizzato.
