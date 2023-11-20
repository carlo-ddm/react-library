import "./InvestmentSummary.css";
export default function InvestmentSummary({ summary, inputResults }) {
  // console.log('summary: ',summary);
  console.log("inputResults: ", inputResults);
  console.log();

  const keyToLabelMap = [
    "year",
    "valueEndOfYear",
    "interest",
    "annualInvestment",
  ];

  return (
    <table id="result">
      <thead>
        <tr>
          {Object.keys(summary).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {inputResults.map((obj, index) => (
          <tr key={index}>
            {keyToLabelMap.map((lab, index) => (
              <td key={index}>{obj[lab]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
