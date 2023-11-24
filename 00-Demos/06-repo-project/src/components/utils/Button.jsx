export default function Button({ content, variant, clickedFunc }) {
  function detectButtonClassNames() {
    switch (variant) {
      case "primary":
        return "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
      case "secondary":
        return ""
      default:
        break;
    }
  }
  return (
    <button onClick={clickedFunc} className={detectButtonClassNames()}>
      {content}
    </button>
  );
}
