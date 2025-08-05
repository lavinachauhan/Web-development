import UserCard from "./components/userCard"
import Maharana from "./assets/Maharana.jpg"
import lavi from "./assets/lavi.jpeg"
import prithvi from "./assets/prithvi.jpg"

import './App.css'
function App() {
  return (
    <div className="container">
      <UserCard name = "Lavina Chauhan" desc = "desc1" image = {lavi} style = {{"border-radius": "20px"}}/>
      <UserCard name = "Maharana pratap" desc = "desc2" image = {Maharana} style = {{"border-radius": "20px"}}/>
      <UserCard name = "Prithvi raj Chauhan" desc = "desc3" image = {prithvi} style = {{"border-radius": "20px"}}/>
    </div>
  )
}

export default App
