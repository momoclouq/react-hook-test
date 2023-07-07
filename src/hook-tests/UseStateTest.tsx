import { useState } from "react";

const UseStateTest = () => {
  // This state will be reset when the component is dismounted
  const [count, setCount] = useState(0);

  console.log('useState - count is being updated - page is re-rendered', count);

  // This 'normal' method will be re-calculated every render
  // So if a component has a prop of this method -> that component will have to re-render everytime the parent component re-render
  // In this scenario, this is okay, but for other method, you should use `useCallback`
  const onClickHandler = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>UseState: is a React Hook that lets you add a state variable to your component.</p>
      <p><a href="https://react.dev/reference/react/useState">Reference</a></p>

      <p>One thing to note: if the state changes, the component (and children) will re-render. The actual re-render of components will depend on other factors (hooks)</p>
      <p>To demonstrate the <b>useState</b> hook, I will use a counter</p>

      <button onClick={onClickHandler}>Click me to move counter up</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default UseStateTest;