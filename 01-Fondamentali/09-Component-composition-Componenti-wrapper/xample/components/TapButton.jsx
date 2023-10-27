export default function TapButton({children}) { // Altrimenti "props.children"
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
