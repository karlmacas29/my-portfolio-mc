import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import styles from './App.module.css'
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Links from "./components/links/Links";


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Project/>
      <Links />
    </div>
  )
}

export default App
