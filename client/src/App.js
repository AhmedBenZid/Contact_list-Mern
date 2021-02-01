import NavBar from './Components/NavBar';
import ContactList from './Components/ContactList';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ContactList />
        <h1>hello</h1>
      </Router>
    </div>
  );
}

export default App;
