import { useCallback, useRef } from "react";

const UseRefTest = () => {
  console.log('UseRefTest - render');
  const inputRef = useRef(null as any);
  const numRef = useRef(0);

  const handleInputChange = useCallback(() => {
    console.log('useRef - input - currentValue: ' + inputRef?.current?.value);
  }, []);

  const handleButtonClick = useCallback(() => {
    numRef.current += 1;
  }, []);

  const handleButtonShow = useCallback(() => {
    console.log('allref: ', inputRef?.current?.value, numRef.current);
  }, []);

  return (
    <div>
      <p>useRef: lets you reference a value that’s not needed for rendering.</p>
      <p><a href='https://react.dev/reference/react/useRef'>Reference</a></p>

      <p>useRef returns an object with a single property: `current`</p>
      <p>Initially it's set to the `initialValue` you passed, if you passthe ref object to React as a `ref` attribute to a JSX node React will set its current property</p>
      <p>Changing a ref does not trigger a re-render</p>
      <p>Another topic related is `forwardRef`: let component expose a DOM node to parent component. Check forwardRefTest</p>
      
      <h3>Notes</h3>
      <ul>
        <li>ref values do not need to be in dependency array as the value is consistent between re-render</li>
        <li>Do not read/write data to ref.current during rendering. You can read/write refs from event handlers (onClick, etc) or useEffect</li>
      </ul>

      <input onChange={handleInputChange} ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>click to plus 1</button>
      <button onClick={handleButtonShow}>click to show result on console</button>
    </div>
  )
}

export default UseRefTest;