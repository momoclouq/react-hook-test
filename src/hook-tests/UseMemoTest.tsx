import { useMemo, useState } from "react"

const UseMemoTest = () => {
  const [toggle, setToggle] = useState(false);

  // useMemo should take no arguement
  const veryLargeValue = useMemo(() => {
    alert('alert only once');
    return 'this is a very large calculation'
  }, []);

  const veryLargeValue2 = (() => {
    alert('alert everytime');
    return 'this is a very very large calculation that always re-calculate';
  })();

  return (
    <div>
      <p>useMemo: is a React Hook that lets you cache the result of a calculation between re-renders.</p>
      <p><a href="https://react.dev/reference/react/useMemo">Reference</a></p>

      <h3>Usage</h3>
      <ul>
        <li>skipping expensive calculations</li>
        <li>skipping re-rendering</li>
        <li>Memorizing dependency of another hook</li>
        <li>Memorizing a function</li>
      </ul>

      <p>This button will change a state in the parent component, thus force the parent to re-render</p>
      <button onClick={() => { setToggle(!toggle) }}>Force parent render</button>
      <p>There are 2 values: 1 uses `useMemo` to memorise the value (only calculate once), 1 does not use anything (will calculate on every re-render)</p>
      <p>In the beginning, you would see 2 alert. The alert indicates that the method for calculation is running</p>
      <p>When you click on the force parent re-render button, there should only be 1 alert left. This indicates that the calculation is only needed for 1 value</p>

      <div>A very large calculation that <b>does not re-calculate everytime re-render</b>: {veryLargeValue}</div>
      <br />
      <div>A very large calculation that <b>re-calculate for every re-render</b>: {veryLargeValue2}</div>
    </div>
  )
}

export default UseMemoTest;