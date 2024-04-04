
import styles from './App.module.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile} from './Components/Navbar/Profile/Profile';

function App() {
 return <div className={styles.App}>
  
  <Navbar/>
  <Profile/>
  </div>

};

export default App
