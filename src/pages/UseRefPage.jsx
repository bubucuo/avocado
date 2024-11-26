import { useRef, useState } from "react";

export default function UseRefPage() {
  let ref = useRef(0);

  const [count, setCount] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return (
    <div>
      <h1>useRef</h1>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={() => setCount(count + 1)}>Click me!{count}</button>
    </div>
  );
}
