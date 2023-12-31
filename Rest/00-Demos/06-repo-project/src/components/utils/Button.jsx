export default function Button({ content, variant, clickedFunc, disabled }) {
  function detectButtonClassNames() {
    switch (variant) {
      case "primary":
        return "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
      case "secondary":
        return "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";
      case "tertiary":
        return "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
      default:
        "";
        return "";
    }
  }
  return (
    <button
      onClick={clickedFunc}
      className={detectButtonClassNames()}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
