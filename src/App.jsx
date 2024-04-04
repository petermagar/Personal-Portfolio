
import styles from './App.module.css';
import { About } from './Components/About/About';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile} from './Components/Profile/Profile';

function App() {
 return <div className={styles.App}>
  
  <Navbar/>
  <Profile/>
  <About />
  </div>

};

export default App
