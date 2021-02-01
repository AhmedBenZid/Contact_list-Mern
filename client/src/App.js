import NavBar from './Components/NavBar';
import ContactList from './Components/ContactList';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ContactList />
      </Router>
    </div>
  );
}

export default App;
