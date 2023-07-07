import { memo, useCallback, useEffect, useState } from "react";

const TempComponent = memo(({ title, onClickHandler }: { title: string; onClickHandler: any }) => {
  useEffect(() => {
    console.log(`useCallback - tempcomponent - ${title} onclick changed`)
  }, [onClickHandler]);

  console.log(`useCallback - tempcomponent - ${title} render`);

  return (
    <div>
      <div>This is the child component {title}</div>
      <button onClick={onClickHandler}>Click me</button>
    </div>
  )
});

const UseCallbackTest = () => {
  const [toggle, setToggle] = useState(false);

  const onClick1 = useCallback(() => {
    console.log('This function does not change');
  }, []);

  const onClick2 = () => {
    console.log('This function changes every render');
  }

  return (
    <div>
      <p>useCallback: is a React Hook that lets you cache a function definition between re-renders.</p>
      <p><a href="https://react.dev/reference/react/useCallback">Reference</a></p>

      <p>This button will change a state in the parent component, thus force the parent to re-render</p>
      <button onClick={() => { setToggle(!toggle) }}>Force parent render</button>

      <p>These are 2 components, 1 has the props of a function that use useCallback and 1 has a props of a function that does not use useCallback</p>
      <p>When the parent re-render, the one with useCallback prop will not re-render. While the one does not use useCallback will.</p>
      <p>This will help with limiting re-renders of heavy components</p>
      <p>Beware that this only works with `memo` (only re-render component if props change)</p>
      <TempComponent title="component does not re-render" onClickHandler={onClick1} />
      <br/>
      <TempComponent title="component does re-render" onClickHandler={onClick2} />

      
    </div>
  )
}

export default UseCallbackTest;