import { useState, useTransition } from "react";

function SlowPost({ index }: any) {
  console.log('SlowPost - render');
  const startTime = performance.now();
  while (performance.now() - startTime < 1000) {
    // Do nothing for 2000 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Post #{index + 1}
    </li>
  );
}

const VeryLongRenderComponent = () => {
  console.log("veryLongRenderComponent - render");

  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return (
    <div>
      <div>This is a component with long render time</div>
      {items}
    </div>
  )
}

const DefaultComponent = () => {
  console.log("DefaultComponent - render");

  return (
    <div>This is a component with default render time</div>
  )
}

const UseTransitionTest = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('default');

  const selectTab = (nextTab: string) => {
    startTransition(() => {
      setTab(nextTab);
    })
  };

  return (
    <div>
      <h3>useTransition: is a React Hook that lets you update the state without blocking the UI.</h3>
      <p><a href='https://react.dev/reference/react/useTransition'>Reference</a></p>
      <p>To understand this, you must know that a blocking block of code (while 10000000) will always block the UI, regardless of using useTransition or not</p>
      <p>This only works for cases of the current render consist of multiple small render which is insignificant alone, but takes a lot of time when rendered together</p>
      <p>The other case is when the arguement provided to setter function is compute-heavy, useTransition will turn that to a transition and will prioritize other setters first</p>
      <p><a href="https://blog.openreplay.com/usetransition-vs-usedeferredvalue-in-react-18/">Examples</a></p>
      
      <button onClick={() => selectTab('longComponent')}>Render very long</button>
      <button onClick={() => selectTab('default')}>Render default</button>

      {isPending && <div>is rendering</div>}
      {tab === 'longComponent' && <VeryLongRenderComponent />}
      {tab === 'default' && <DefaultComponent />}
    </div>
  )
}

export default UseTransitionTest;