import './App.css'
import Homepage from './components/Homepage'
import Landingpage from './components/Landingpage'
import Posttweet_form from './components/Posttweet_form'
import Signin from './components/Signin'
import Signup from './components/Signup'

function App() {
  return (
    <div>
      {/* <Landingpage></Landingpage> */}
      {/* <Signup></Signup> */}
      <Signin></Signin>
      <Homepage></Homepage>
    <Posttweet_form></Posttweet_form>
    </div>
  )
}

export default App
