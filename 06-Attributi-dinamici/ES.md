```jsx
import reactImg from './assets-core-concepts.png'; // Importiamo l'immagine in modo dinamico

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  // Qui sotto, utilizziamo l'immagine importata dinamicamente
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
```

Come puoi notare, l'importazione dell'immagine viene eseguita all'inizio del file. Poi, nel componente `Header`, utilizziamo l'immagine importata tramite la variabile `reactImg` per l'attributo `src` del tag `<img>`.