import { createContext, memo, useCallback, useContext, useState } from "react";

const MockNameContext = createContext('default name');
const MockStatusContext = createContext(1);

const InformationBoard = memo(({ onClickHandler }: any) => {
  const name = useContext(MockNameContext);
  const status = useContext(MockStatusContext);

  console.log('useContextTest - Information board - render');

  return (
    <div>
      <div>This is the InformationBoard</div>
      <div>Name: {name}</div>
      <div>Status: {status}</div>
      <button onClick={onClickHandler}>Change status</button>
    </div>
  )
});

const UseContextTest = () => {
  const [status, setStatus] = useState(1);

  const setNextStatus = useCallback(() => {
    // using setter like this will make this method independent from the status state
    setStatus((oldStatus) => {
      return oldStatus + 1;
    });
  }, []);

  return (
    <div>
      <p>useContext: lets you read and subscribe to context from your component.</p>
      <p><a href='https://react.dev/reference/react/useContext'>Reference</a></p>

      <h3>Some notes</h3>
      <ul>
        <li>useContext return the context value, determined by the `value` passed to the <b>closest Context.Provider</b></li>
        <li>If no provider is found, the returned value will be the defaultValue passed to createContext</li>
        <li>This hook is related to `createContext`</li>
        <li>React automatically re-renders all children that use a particular context (works with `memo`)</li>
      </ul>

      <p>In this test, there are 2 context: MockNameContext does not change value and MockStatusContext value is changed based on the useState on the parent component</p>
      <p>The InformationBoard component should not re-render as we use `memo`, but the MockStatusContext change, thus forcing the component to re-render regardless</p>

      <MockNameContext.Provider value='changed name'>
        <MockStatusContext.Provider value={status}>
          <InformationBoard onClickHandler={setNextStatus} />
        </MockStatusContext.Provider>
      </MockNameContext.Provider>
    </div>
  )
}

export default UseContextTest;