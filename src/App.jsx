
import styles from './App.module.css';
import { About } from './Components/About/About';
import { Education } from './Components/Education/Education';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile} from './Components/Profile/Profile';

function App() {
 return <div className={styles.App}>
  
  <Navbar/>
  <Profile/>
  <About />
  <Education/>
  </div>

};

export default App
