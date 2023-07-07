import { memo, useDeferredValue, useState } from "react";

function SlowPost({ index }: any) {
  console.log('SlowPost - render');
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 2000 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Post #{index + 1}
    </li>
  );
}

const VeryLongRenderComponent = memo(({ maximumValue }: any) => {
  console.log("veryLongRenderComponent - render");

  const items = [];
  for (let i = 0; i < maximumValue; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return (
    <div>
      <div>This is a component with long render time</div>
      {items}
    </div>
  )
})

const UseDeferredValueTest = () => {
  console.log("UseDeferredValueTest - render");

  const [count, setCount] = useState(1);
  const deferredCount = useDeferredValue(count);

  const onClickHandler = () => {
    setCount((oldCount) => {
      return oldCount + 1;
    });
  }

  return (
    <div>
      <h3>useDeferredValue: a React Hook that lets you defer updating a part of the UI</h3>
      <p><a href='https://react.dev/reference/react/useDeferredValue'>Reference</a></p>
      <p>Similar to useTransition as a way to avoid heavy blocking render</p>
      <p>But useDeferredValue is used when you cannot control the state setters directly (through apis)</p>
      <p>When you can control when setters hapen, use useTransition</p>

      <button onClick={onClickHandler}>increase timeout by 100ms for render</button>
      <div>Count: {count}</div>

      <VeryLongRenderComponent maximumValue={deferredCount * 100} />
    </div>
  )
}

export default UseDeferredValueTest;