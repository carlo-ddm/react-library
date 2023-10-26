## Suddivisione dei File CSS

La gestione degli stili è una componente fondamentale nella costruzione di applicazioni web. Una buona pratica è quella di suddividere gli stili in file separati, in modo da mantenere il codice organizzato e facilmente gestibile. In particolare, in progetti più grandi e complessi, mantenere gli stili pertinenti ad un particolare componente in un file CSS specifico per quel componente può migliorare notevolmente la manutenibilità del codice.

Per importare un file di stile in un componente, si può fare uso dell'istruzione `import` di JavaScript. Ad esempio:

```javascript
import "./nomeDelFile.css";
```

Tuttavia, è fondamentale sottolineare che, nonostante lo split degli stili in file diversi, gli stili importati in un componente non sono "incapsulati" o "scoped" in quel componente. Ciò significa che gli stili rimangono globali e possono influenzare altri elementi nella pagina. Questo comportamento è dovuto alla natura dei fogli di stile CSS: quando un file CSS viene importato, i suoi stili vengono applicati a livello globale.

In sintesi, suddividere gli stili in file separati per componente migliora l'organizzazione del codice, ma non garantisce che gli stili siano isolati solo a quel componente. La scoping degli stili sarà oggetto di una sezione successiva.

---
