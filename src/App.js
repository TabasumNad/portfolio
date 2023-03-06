
import './App.css';

import Navbar  from './Navbar';
import About from './About'
import {BrowserRouter as Router, Route , Routes,Navigate} from "react-router-dom";
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';
import Project from './Project';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <Routes>
   

         
           <Route  path="/" element={<About /> } />
           <Route path="/skills" element={<Skills/>}/>
         <Route  path="/contact" element={<Contact /> } />
         <Route path="/experience" element={<Experience/>}/>
         <Route path="/projects" element= {< Project />}/>
         
          {/* <Route path="/users/Create_user" element={<Create_users />}/>
          <Route path="/users/edit_user/:id" element={<EditUsers />}/>
          <Route path="/users/profile/:id" element={<Profile />}/>
          <Route path="/users/profile/edit" element={<ProfileEdit/>}/> */}
          {/* <Route path="/404" element={<NotFound />} /> */}
          {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
   
    </Routes>
    </div>
    </Router>
  );
}

export default App;
