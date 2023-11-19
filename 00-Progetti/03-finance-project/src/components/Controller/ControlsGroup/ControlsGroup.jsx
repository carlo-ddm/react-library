import "./ControlsGroup.css";
export default function ControlsGroup({ controls, changeValue, ...rest }) {
  
  const objCreator = (control, getValue) => {
    const value = getValue;
    return {control, value};
  };

  const getValue = (input) => {
    return input.target.value;
  };

  return (
    <div {...rest}>
      {controls.map((control, index) => (
        <div key={index}>
          <label>
            <p>{control}</p>
          </label>
          <input
            type="number"
            onChange={(val) =>
              changeValue(objCreator(control, getValue(val)))
            }
          />
        </div>
      ))}
    </div>
  );
}
