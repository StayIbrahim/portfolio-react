
import styles from './App.module.css'
import { About } from './component/about/About'
import { Contact } from './component/contact/Contact'
import { Experience } from './component/experience/Experienc'
import Hero from './component/hero/Hero'
import { Navbar } from "./component/navbar/Nav"
import { Projects } from './component/projects/Projects'




function App() {
  return (
   <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
   </div>

  )
}


export default App
