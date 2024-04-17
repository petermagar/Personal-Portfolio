
import styles from './App.module.css';
import { About } from './Components/About/About';
import { Education } from './Components/Education/Education';
import { Experience } from './Components/Experience/Experience';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile} from './Components/Profile/Profile';
import { Projects } from './Components/Projects/Projects';


function App() {
 return <div className={styles.App}>
  
  <Navbar/>
  <Profile/>
  <About />
  <Education/>
  <Experience/>
  <Projects/>

  </div>

};

export default App
