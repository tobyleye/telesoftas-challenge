import { useRef } from "react";

export default function DebouncedInput({
  delay = 200,
  onChange,
  defaultValue
}) {
  const timer = useRef(null);

  const handleChange = (evt) => {
    clearTimeout(timer.current);
    const { value } = evt.target;
    timer.current = setTimeout(() => {
      onChange(value);
    }, delay);
  };

  return (
    <input type="text" onChange={handleChange} defaultValue={defaultValue} />
  );
}
