import React, { useEffect, useRef } from "react";

interface DebouncedInputProps {
  delay?:number,
  defaultValue: number|string;
  onChange: (value: string)=> void;
}

export default function DebouncedInput({
  delay = 200,
  onChange,
  defaultValue
}:  DebouncedInputProps) {
  const timer = useRef<null|ReturnType<typeof setTimeout>>(null);

  useEffect(() =>{
    return ()=>{
      if(timer.current){
        clearTimeout(timer.current)
      }
    }
  },[]) 
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const { value } = evt.target;

    timer.current = setTimeout(() => {
      onChange(value);
    }, delay);
  };

  return (
    <input type="text" onChange={handleChange} defaultValue={defaultValue} />
  );
}
