import { forwardRef, useCallback, useRef } from "react";

const RefWrapper = forwardRef<HTMLInputElement>((_, ref) => {
  console.log('ForwardRefTest - RefWrapper - render');

  return (
    <div>
      <div>This is a child component</div>
      <input type='text' ref={ref} />
    </div>
  )
});

const ForwardRefTest = () => {
  console.log('ForwardRefTest - render');
  const childInputRef = useRef(null as any);

  const buttonOnClickHandler = useCallback(() => {
    alert('The current ref value is: ' + childInputRef.current.value);
  }, []);

  return (
    <div>
      <h2>forwardRef: lets your component expose a DOM node to parent component with a ref.</h2>
      <p><a href='https://react.dev/reference/react/forwardRef#render-function'>Reference</a></p>

      <p>forwardRef returns a React component like normal, except that you can pass a ref argument</p>

      <p>For this test, there is a wrapper component that contains the input and we wish to access the input from the parent</p>
      <button onClick={buttonOnClickHandler}>click to show ref current value</button>
      <br/>
      <br/>
      <RefWrapper ref={childInputRef} />
    </div>
  );
}

export default ForwardRefTest;