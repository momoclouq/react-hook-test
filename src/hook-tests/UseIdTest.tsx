import { useId } from "react";

const UseIdTest = () => {
  const componentId = useId();

  return (
    <div>
      <h3>useId: generating unique IDs that can be passed to accessibility attributes.</h3>
      <p><a href='https://react.dev/reference/react/useId'>Reference</a></p>
      <p>Should not be used to generate keys in a list</p>
      <input type="password" aria-describedby={componentId} />
      <div id={componentId}>The password should be related to this text</div>
    </div>
  )
}

export default UseIdTest;