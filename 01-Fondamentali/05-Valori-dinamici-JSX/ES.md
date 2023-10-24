```jsx
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  // Qui stiamo generando un contenuto dinamico. In base a un numero casuale,
  // scegliamo una delle descrizioni per React da mostrare.
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      
      {/* Qui utilizziamo le parentesi graffe {} per inserire il contenuto dinamico all'interno del JSX. */}
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

**Punti chiave**:
1. Le **variabili dinamiche** come `description` sono utilizzate per produrre contenuti che cambiano dinamicamente basandosi su determinate condizioni o input.
2. All'interno del JSX, utilizziamo le **parentesi graffe `{}`** per inserire espressioni JavaScript. Questo ci permette di inserire valori variabili o calcolati dinamicamente direttamente nel nostro markup.