import "./InvestmentSummary.css";
export default function InvestmentSummary({ summary }) {
  console.log(summary);
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
        <tr>
          {Object.values(summary).map((values, index) => (
            <td key={index}>{values === null ? '-' : values}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
