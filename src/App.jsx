import './App.css'
import About from './moduals/about'
import Herobanner from './moduals/herobanner'
import Resume from './moduals/resume'
import Review from './moduals/review'
import Skills from './moduals/skills'
import Header from './shared/components/header'

function App() {

  return (
    <>
      <Header/>
      <Herobanner/>
      <About/>
      <Skills/>
      <Resume/>
      <Review/>
    </>
  )
}

export default App
