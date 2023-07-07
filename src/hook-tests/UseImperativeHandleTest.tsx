import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const RefWrapper = forwardRef((props, ref) => {
  const inputRef = useRef(null as any);

  useImperativeHandle(ref, () => {
    // This function will return the ref handle you want to expose
    // normally this will be an object with the methods you want to expose
    return {
      tempFn: () => {
        alert("current input ref value: " + inputRef.current.value);
      }
    }
  }, []);

  return (
    <div>
      <div>This is a ref wrapper</div>
      <input type='text' ref={inputRef} />
    </div>
  )
});

const UseImperativeHandleTest = () => {
  const customRef = useRef(null as any);

  const buttonOnClickHandler = useCallback(() => {
    // call the custom ref from useImperativeHandler
    // customRef does not have access to the actual input ref
    customRef.current.tempFn();
  }, []);

  return (
    <div>
      <h3>useImperativeHandle: lets you customize the handle exposed as a ref.</h3>
      <p><a href='https://react.dev/reference/react/useImperativeHandle'>Reference</a></p>

      <p>use useImperativeHandle at the top of the component to handle the ref from forwardRef</p>
      <p>This hooks is primarily used for limiting the access to the actual ref in the child component</p>
      <p>You would provide the methods to access the functionalities you provide</p>

      <button onClick={buttonOnClickHandler}>Click to show current ref</button>
      <br/>
      <br/>

      <RefWrapper ref={customRef} />
    </div>
  )
}

export default UseImperativeHandleTest;