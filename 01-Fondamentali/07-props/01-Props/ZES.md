Vediamo come le `props` si riflettono nel codice, commentando ogni aspetto rilevante.

```jsx
import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// Componente CoreConcepts che accetta props.
function CoreConcepts(props) {
  // Qui stiamo ricevendo un oggetto "props" da React.
  // Accediamo ai valori delle props direttamente.
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// Componente App principale che include altri componenti.
function App() {
  // Qui si invoca il componente CoreConcepts e gli si passano diverse props.
  // Osserva come ogni attributo della JSX diventa una chiave nell'oggetto delle props.
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building block"
              image={componentsImg}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
```

Come si può vedere, il componente `CoreConcepts` è un esempio diretto di un componente che riceve `props`. Nel componente `App`, si invoca `CoreConcepts` e si passano i dati attraverso attributi come `title`, `description` e `img`. Questi dati vengono poi automaticamente raccolti da React in un oggetto `props`, che viene passato come argomento alla funzione `CoreConcepts`.