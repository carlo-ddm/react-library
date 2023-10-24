All'avvio di un'applicazione React, una serie di passaggi fondamentali viene eseguita nel file `index.jsx`. Inizialmente, la libreria `ReactDOM` viene importata, specificatamente dal modulo `react-dom/client`, per sottolineare il contesto di rendering lato client.

```jsx
import ReactDOM from "react-dom/client";
```

Contemporaneamente, il componente radice dell'app, solitamente chiamato `App`, viene importato.

```jsx
import App from "./App.jsx";
```

Successivamente, viene identificato l'elemento HTML che fungerà da contenitore per il DOM virtuale. Questo elemento è generalmente identificato dall'ID `root` e si trova all'interno del file `index.html`.

```jsx
const entryPoint = document.getElementById("root");
```

Una volta individuato il punto d'ancoraggio, un oggetto 'root' viene generato mediante l'invocazione del metodo `createRoot()` di `ReactDOM`.

```jsx
ReactDOM.createRoot(entryPoint)
```

Infine, il metodo `render()` viene chiamato sull'oggetto 'root' creato. Questo è il momento in cui il componente radice viene renderizzato e, di conseguenza, l'intero albero dei componenti viene costruito.

```jsx
.render(<App />);
```

In questo modo, il componente `App` viene iniettato automaticamente nel DOM reale, dando vita all'applicazione React.