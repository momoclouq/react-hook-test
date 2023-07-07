import { useDebugValue, useEffect } from "react";

const useCustomHook = () => {
  useDebugValue('Custom value hook');

  return {
    customValue: 1
  }
}

const UseDebugValueTest = () => {
  console.log("UseDebugValueTest - render");

  const { customValue } = useCustomHook();

  useEffect(() => {
    alert('The custom value from the custom hook: ' + customValue);
  }, [customValue]);

  return (
    <div>
      <h3>useDebugValue: lets you add a label to a custom Hook in React DevTools.</h3>
      <p>Call `useDebugValue` at the top level of your custom Hook to display a readable debug value</p>
      <p>You should open <a href='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'>React devtools</a> for this</p>
      <p>You should expect a custom hook named: `Custom value hook`</p>
    </div>
  )
}

export default UseDebugValueTest;