import { useState } from "react";

const TestItem = () => {
  // should only render once (log once)
  console.log('ChildrenPropTest - TestItem render');

  return (
    <div>Test item</div>
  )
}

// parent component, having TestItem as children
const Wrapper = ({ children }: any) => {
  console.log('ChildrenPropTest - Wrapper - render');
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <p>This button will change a state in the parent component, thus force the parent to re-render</p>
      <button onClick={() => { setToggle(!toggle) }}>Force parent render</button>

      <br/>
      <br/>

      {children}
    </div>
  )
}

const ChildrenPropTest = () => {
  console.log('ChildrenPropTest - render');

  return (
    <div>
      <h3>`children` prop</h3>
      <p>The `children` prop is special because when the wrapper (parent) re-render (update state), the `children` will not re-render</p>
      <p>In this case, when the parent is forced to re-render by updating the state, the children will not re-render</p>

      <Wrapper>
        <TestItem />
      </Wrapper>
    </div>
  )
}

export default ChildrenPropTest;