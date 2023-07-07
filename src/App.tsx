import './App.css';
import { PageProvider } from './Context';
import MainPage from './MainPage';

function App() {
  return (
    <PageProvider>
      <MainPage />
    </PageProvider>
  )
}

export default App
