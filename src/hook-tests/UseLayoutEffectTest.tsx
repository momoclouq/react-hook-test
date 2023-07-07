const UseLayoutEffectTest = () => {
  return (
    <div>
      <h3>useLayoutEffect: is a version of useEffect that fires before the browser repaints the screen.</h3>
      <p><a href='https://react.dev/reference/react/useLayoutEffect'>Reference</a></p>
      <p>The code inside useLayoutEffect and all state updates scheduled from it block the browser from repainting the screen. When used excessively, this makes your app slow. When possible, prefer useEffect.</p>
      <p>This means if there are changes that forces the component to re-render, it will stop at the layout stage and immediately start another re-render (so the initial render will not be painted)</p>
      <p>But this makes the app looks slower if there are too many changes in the useLayoutEffect</p>

      <h4>Usage</h4>
      <ul>
        <li>Measuring layout before the browser repaints the screen</li>
      </ul>

      <p>Example can be found in the reference</p>
    </div>
  )
}

export default UseLayoutEffectTest;