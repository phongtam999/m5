import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Contacts from "./pages/Contacts";
import EditContact from "./pages/EditContact";
import AddContact  from "./pages/AddContact";
import './App.css';


function App() {
  return (  
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Contacts/>} />
            <Route path="/contacts/create" element={<AddContact/>}/> 
            <Route path="/contacts/:id/edit" element={<EditContact />} />

          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
