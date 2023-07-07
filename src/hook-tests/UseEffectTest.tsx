import { ChangeEvent, useCallback, useEffect, useState } from "react";
import fetchWithAbort from "../utils/fetchWithAbort";

const UseEffectTest = () => {
  const [selectedPeople, setSelectedPeople] = useState(1);
  const [personData, setPersonData] = useState({
    name: '',
    height: '',
    mass: '',
    birth_year: ''
  });

  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event?.target?.value) || 1;
    setSelectedPeople(value);
  }, []);

  useEffect(() => {
    const { beginFetch, abort } = fetchWithAbort(`https://swapi.dev/api/people/${selectedPeople}`, 'GET');

    // In this example, the api call is made in useEffect manually
    // This is, however, not optimal
    // Either use a proper framework (Gatsby, Next.js, Remix, etc) that has api to call api
    // Or use custom hook
    // Another alternative is using client-side cache like: React query, useSWR, React router 6.4+
    const getStarwarPeople = async () => {
      try {
        const dataRaw = await beginFetch();

        const data = await dataRaw.json();
        
        setPersonData({
          name: data.name,
          height: data.height,
          mass: data.mass,
          birth_year: data.birth_year
        });
      } catch (error) {
        console.log('getStarwarPeople error', error);
      }
    }

    getStarwarPeople();
    
    // this cleanup function will be run with the old values
    // after that the setup function will be run with the new values
    return abort;

    // comparison of the changes are done using Object.is
  }, [selectedPeople]);

  return (
    <div>
      <p>useEffect: lets you synchronize a component with an external system.</p>
      <p><a href="https://react.dev/reference/react/useEffect">Reference</a></p>

      <h2>Special notes</h2>
      <ul>
        <li>useEffect is a hook: Should only be called at the top level of the component. No useEffect in conditions or for/while loops</li>
        <li>If your Effect is doing something visual (for example, positioning a tooltip), and the delay is noticeable (for example, it flickers), replace useEffect with useLayoutEffect</li>
        <li>useEffect dependencies array may lead to multiple re-run (especially with objects and methods), if that is the case then you should remove the objects from the array</li>
        <li>Does not run on serverside</li>
      </ul>

      <p>This starwar data is got from <a href='https://swapi.dev/'>swapi - starwar free api</a></p>
      <p>useEffect will be used to fetch the data from the api based on your number input, which can be considered an external interaction</p>
      <div>
        <div>Enter a number from 1 to 82 to find out about the starwar character</div>
        <div>A change to this input will trigger a state change, which will trigger the useEffect hook to call the api</div>
        <input type="number" defaultValue={"1"} min="1" max="82" onChange={onInputChange}/>
      </div>

      <div>
        <br/>
        <div>-----Result-----</div>
        <div>birth year: {personData.birth_year}</div>
        <div>height: {personData.height}</div>
        <div>mass: {personData.mass}</div>
        <div>name: {personData.name}</div>
      </div>
    </div>
  );
}

export default UseEffectTest;