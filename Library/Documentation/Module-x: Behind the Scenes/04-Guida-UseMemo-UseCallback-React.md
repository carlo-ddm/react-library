[Torna al sommario](../../Summary.md)

# `Documentazione: Analisi e Ottimizzazione con 'useMemo' e 'useCallback' in React`

### Traccia sugli Hook `useMemo` e `useCallback` in React

#### `useMemo`

1. **Definizione**:

   - `useMemo` è un hook di React utilizzato per memorizzare il valore restituito da una funzione. Serve a ottimizzare le prestazioni evitando calcoli pesanti inutili nei re-render del componente.

2. **Cosa NON è `useMemo`**:

   - `useMemo` non deve essere confuso con il semplice caching o memorizzazione di funzioni, che è il compito di `useCallback`. Mentre `useCallback` memorizza la funzione stessa, `useMemo` memorizza il valore calcolato dalla funzione.

3. **Importazione**:

   - Per utilizzare `useMemo`, importalo da React:
     ```javascript
     import { useMemo } from "react";
     ```

4. **Uso di `useMemo`**:
   - Struttura base:
     ```javascript
     const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
     ```
   - `useMemo` memorizza il valore restituito da `computeExpensiveValue(a, b)` e lo ricalcola solo se le dipendenze `[a, b]` cambiano.

#### Confronto con `useCallback`

1. **Differenze chiave**:

   - Mentre `useCallback` memorizza una funzione, `useMemo` memorizza il risultato di una funzione.
   - `useCallback` non impedisce la riesecuzione del metodo, mentre `useMemo` può prevenire calcoli inutili.

2. **Quando usare `useCallback` vs `useMemo`**:

   - `useCallback` è preferibile quando si passano funzioni come props a componenti figli, specialmente quelli ottimizzati con `memo`.
   - `useMemo` è utile per evitare calcoli pesanti che non necessitano di essere rieseguiti a ogni render.

3. **Esempi pratici**:
   - `useMemo` può essere usato per migliorare le prestazioni in scenari dove il calcolo di un valore è costoso e non cambia frequentemente.

#### Esempio pratico di `useMemo`

1. **Situazione di Partenza**:

   - Modificando un valore con il bottone in `ConfigureCounter`, si determina la riesecuzione del componente fratello `Counter`. La situazione è illustrata nei file allegati.

2. **Problema di Prestazioni in `Counter`**:

   - Ogni volta che `Counter` viene rieseguito, per esempio a seguito del click su uno dei suoi bottoni, si verifica anche la riesecuzione della funzione `isPrime`, che può essere costosa in termini di prestazioni.

3. **Soluzione con `useMemo`**:
   - Importazione:
     ```javascript
     import { useMemo } from "react";
     ```
   - Utilizzo:
     ```javascript
     const initialCountIsPrime = useMemo(
       () => isPrime(initialCount),
       [initialCount]
     );
     ```
   - Qui, `useMemo` memorizza il risultato di `isPrime(initialCount)` e lo ricalcola solo se `initialCount` cambia, ottimizzando le prestazioni evitando calcoli inutili.
