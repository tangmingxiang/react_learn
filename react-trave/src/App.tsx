import styles from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { HomePage } from './pages';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path='/' element={<HomePage />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
