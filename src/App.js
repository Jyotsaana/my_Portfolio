import Navbar from "./component/navbar/navbar"
import About from "./component/intro/about"
import Project from "./component/projects/project"
import Contact from "./component/contact/contact"
import Message from "./component/message/message"

function App() {
  return (
    <div className="App">
      
  <Navbar/>
  <About/>
  <Project/>
  <Contact/>
  <Message/>
    </div>
  );
}

export default App;
