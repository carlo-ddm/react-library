function Header() {
    return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
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

/**
 * Qui è definito un componente custom chiamato 'Header', che viene successivamente utilizzato nel componente 'App'.
 * È perfettamente valido definire più componenti in un singolo file JSX,
 * soprattutto quando questi componenti sono strettamente correlati o utilizzati solo in questo contesto.
 */
