import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
   <div>
    <Routes>
      <Route path='/' element={<Header/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
   </div>
    </BrowserRouter>
//     <div>
// {/* <Header/> */}
// {/* <About/> */}
// {/* <Project/> */}
// <Contact/>
//     </div>
  );
}

export default App;