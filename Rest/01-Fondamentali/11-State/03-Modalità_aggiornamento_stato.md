## Aggiornamento dello stato con `useState`

Il hook `useState` fornisce un meccanismo per gestire lo stato locale all'interno dei componenti funzionali. Quando si invoca `useState`, esso ritorna una coppia: il valore corrente dello stato e una funzione per aggiornare tale stato.

### 1. Assegnazione diretta del valore

Nella maggior parte dei casi, si può passare direttamente il nuovo valore alla funzione di aggiornamento (di seguito denominata `setFunction`). Questo metodo è lineare e si applica quando il nuovo stato non ha dipendenze dallo stato precedente.

**Esempio:**

```javascript
const [count, setCount] = useState(0);
setCount(5);  // Il valore di 'count' viene assegnato direttamente a 5
```

### 2. Funzione di aggiornamento dello stato

Tuttavia, in situazioni in cui il nuovo stato deriva o dipende dallo stato precedente, è consigliabile passare una funzione a `setFunction`. Questa funzione accetta come parametro lo stato corrente e ritorna il valore aggiornato.

**Esempio:**

```javascript
const [count, setCount] = useState(0);
setCount(prevCount => prevCount + 1);  // 'count' viene incrementato di 1 basandosi sul suo valore corrente
```

**Nota tecnica:** L'uso di una funzione per aggiornare lo stato garantisce atomicità. React accumula molteplici chiamate di aggiornamento dello stato in una singola transazione. Passando una funzione, ci si assicura che ogni chiamata utilizzi lo stato corrente più aggiornato, prevenendo potenziali inconsistenze.