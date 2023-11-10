### Documentazione sul Concetto di "Lifting State Up" in React

Il concetto di "Lifting State Up" è una pratica comune in React per gestire lo stato condiviso tra diversi componenti. Invece di mantenere lo stato localmente in un singolo componente, lo stato viene spostato (o "sollevato") a un livello superiore nell'albero dei componenti, tipicamente in un componente genitore comune. Questo permette a più componenti di accedere e modificare lo stato in modo sincronizzato.

#### Esempio di Codice:

Il codice fornito illustra un'applicazione React dove `App` è il componente genitore che gestisce lo stato condiviso, mentre `Player` e `GameBoard` sono componenti figli che utilizzano e modificano questo stato.

**Componente `App`:**

```javascript
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleUpdateSymbol = () => {
    setActivePlayer((curActivSymbol) => (curActivSymbol === "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <Player defaultName="Player 1" isActive={activePlayer === "X"} />
        <Player defaultName="Player 2" isActive={activePlayer === "O"} />
        <GameBoard onSelectSquare={handleUpdateSymbol} symbol={activePlayer} />
      </div>
    </main>
  );
}
```

**Componenti `Player` e `GameBoard`:**
Questi componenti ricevono parti dello stato e funzioni di callback come props dal componente `App`.

#### Spiegazione:

1. **Stato Condiviso (`activePlayer`):**

   - Lo stato `activePlayer` è mantenuto nel componente `App`. Questo stato determina il giocatore attivo tra 'X' e 'O'.
   - Lo stato viene passato ai componenti `Player` e `GameBoard` come props.

2. **Gestione dello Stato Condiviso (`handleUpdateSymbol`):**

   - La funzione `handleUpdateSymbol` in `App` aggiorna `activePlayer`.
   - Questa funzione è passata al componente `GameBoard` come callback e viene invocata quando un giocatore seleziona una casella.

3. **Flusso dei Dati:**
   - I componenti `Player` e `GameBoard` ricevono lo stato e le funzioni dal componente genitore `App`.
   - Questi componenti possono leggere lo stato e invocare le funzioni passate per modificare lo stato condiviso.
   - Le modifiche allo stato nel componente `App` si riflettono automaticamente nei componenti figli.

#### Vantaggi di Lifting State Up:

1. **Centralizzazione dello Stato:**
   - Il mantenimento dello stato in un unico luogo facilita la gestione, specialmente in applicazioni complesse.
2. **Sincronizzazione dello Stato:**

   - Garantisce che lo stato sia sincronizzato tra tutti i componenti che ne dipendono.

3. **Facilità di Manutenzione:**
   - Rende più facile capire come lo stato viene modificato e come i dati fluiscono attraverso l'applicazione.

#### Conclusioni:

L'uso del pattern "Lifting State Up" in React è essenziale per una gestione efficiente dello stato condiviso tra componenti. L'esempio mostrato dimostra come lo stato può essere sollevato a un componente genitore per permettere a più componenti figli di accedere e modificare lo stato in modo coordinato. Questa pratica facilita la creazione di interfacce utente dinamiche e reattive.
