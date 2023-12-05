import { useRef, useImperativeHandle, forwardRef } from "react";

const Input = forwardRef(function Input(
  { change, label, textarea, ...props },
  ref
) {
  const val = useRef();
  useImperativeHandle(ref, () => ({
    getValue() {
      return val.current.value;
    },
  }));

  const sharedFieldsClass =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className=" flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          onChange={change}
          className={sharedFieldsClass}
          ref={val}
          {...props}
        />
      ) : (
        <input
          onChange={change}
          className={sharedFieldsClass}
          ref={val}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
