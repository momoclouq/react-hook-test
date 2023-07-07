import { useCallback } from "react";
import { usePageContext } from "./Context";
import ListItem from "./components/ListItem";
import UseEffectTest from "./hook-tests/UseEffectTest";
import UseStateTest from "./hook-tests/UseStateTest";
import { Page } from "./type";
import Knockout from "./hook-tests/Knockout";
import UseCallbackTest from "./hook-tests/UseCallbackTest";
import UseMemoTest from "./hook-tests/UseMemoTest";
import ChildrenPropTest from "./other-tests/childrenPropTest";
import UseContextTest from "./hook-tests/UseContextTest";
import UseRefTest from "./hook-tests/UseRefTest";
import ForwardRefTest from "./other-tests/forwardRefTest";
import UseImperativeHandleTest from "./hook-tests/UseImperativeHandleTest";
import UseDebugValueTest from "./hook-tests/UseDebugValueTest";
import UseIdTest from "./hook-tests/UseIdTest";
import UseSyncExternalStoreTest from "./hook-tests/UseSyncExternalStoreTest";
import UseLayoutEffectTest from "./hook-tests/UseLayoutEffectTest";
import UseInsertionEffectTest from "./hook-tests/UseInsertionEffectTest";
import UseTransitionTest from "./hook-tests/UseTransitionTest";
import UseDeferredValueTest from "./hook-tests/UseDeferredValueTest";

const HookTestRouter = ({ page }: { page: Page }) => {
  console.log('!!!!!!render test');

  switch (page) {
    case Page.UseEffect: 
      return <UseEffectTest />
    case Page.UseState:
      return <UseStateTest />
    case Page.UseCallback:
      return <UseCallbackTest />
    case Page.UseMemo:
      return <UseMemoTest />  
    case Page.UseContext:
      return <UseContextTest />  
    case Page.UseRef:
      return <UseRefTest />
    case Page.UseImperativeHandle:
      return <UseImperativeHandleTest /> 
    case Page.UseLayoutEffect:
      return <UseLayoutEffectTest /> 
    case Page.UseInsertionEffect:
      return <UseInsertionEffectTest />
    case Page.UseTransition:
      return <UseTransitionTest />
    case Page.UseDeferredValue:
      return <UseDeferredValueTest />
    case Page.UseDebugValue:
      return <UseDebugValueTest />
    case Page.UseId:
      return <UseIdTest />
    case Page.UseSyncExternalStore:
      return <UseSyncExternalStoreTest />
    case Page.ChildrenProp:
      return <ChildrenPropTest />
    case Page.ForwardRef:
      return <ForwardRefTest />
    default:
      return <Knockout />
  }
}

const MainPage = () => {
  const { page, setPage } = usePageContext();

  const isItemSelected = useCallback((itemPage: Page) => {
    return itemPage === page;
  }, [page]);

  return (
    <>
     <h1>This is the React hooks test</h1>
      <h2>Hooks list:</h2>

      <ul className="list-test">
        <ListItem selected={isItemSelected(Page.UseState)} clickFn={() => {setPage(Page.UseState)}} pageTitle="useState" />
        <ListItem selected={isItemSelected(Page.UseEffect)} clickFn={() => {setPage(Page.UseEffect)}} pageTitle="useEffect" />
        <ListItem selected={isItemSelected(Page.UseCallback)} clickFn={() => {setPage(Page.UseCallback)}} pageTitle="useCallback" />
        <ListItem selected={isItemSelected(Page.UseMemo)} clickFn={() => {setPage(Page.UseMemo)}} pageTitle="useMemo" />
        <ListItem selected={isItemSelected(Page.UseContext)} clickFn={() => {setPage(Page.UseContext)}} pageTitle="useContext" />
        <ListItem selected={isItemSelected(Page.UseRef)} clickFn={() => {setPage(Page.UseRef)}} pageTitle="useRef" />
        <ListItem selected={isItemSelected(Page.UseImperativeHandle)} clickFn={() => {setPage(Page.UseImperativeHandle)}} pageTitle="useImperativeHandle - custom forwardRef" />
        <ListItem selected={isItemSelected(Page.UseLayoutEffect)} clickFn={() => {setPage(Page.UseLayoutEffect)}} pageTitle="useLayoutEffect" />
        <ListItem selected={isItemSelected(Page.UseInsertionEffect)} clickFn={() => {setPage(Page.UseInsertionEffect)}} pageTitle="useInsertionEffect" />
        <ListItem selected={isItemSelected(Page.UseTransition)} clickFn={() => {setPage(Page.UseTransition)}} pageTitle="useTransition" />
        <ListItem selected={isItemSelected(Page.UseDeferredValue)} clickFn={() => {setPage(Page.UseDeferredValue)}} pageTitle="useDeferredValue" />
        <ListItem selected={isItemSelected(Page.ChildrenProp)} clickFn={() => {setPage(Page.ChildrenProp)}} pageTitle="'children' prop" />
        <ListItem selected={isItemSelected(Page.ForwardRef)} clickFn={() => {setPage(Page.ForwardRef)}} pageTitle="forwardRef - access child ref" />
        <ListItem selected={isItemSelected(Page.Knockout)} clickFn={() => {setPage(Page.Knockout)}} pageTitle="knockout" />
      </ul>

      <h3>Performance hooks list:</h3>
      <div>These hooks are mostly useful for library authors</div>
      <ul className="list-test">
        <ListItem selected={isItemSelected(Page.UseDebugValue)} clickFn={() => {setPage(Page.UseDebugValue)}} pageTitle="useDebugValue" />
        <ListItem selected={isItemSelected(Page.UseId)} clickFn={() => {setPage(Page.UseId)}} pageTitle="useId" />
        <ListItem selected={isItemSelected(Page.UseSyncExternalStore)} clickFn={() => {setPage(Page.UseSyncExternalStore)}} pageTitle="useSyncExternalStore - not researched" />
      </ul>

      <hr/>
      
      <HookTestRouter page={page} />
    </>
  );
}

export default MainPage;