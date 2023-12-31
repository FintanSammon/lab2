// For Ex6 I added routing to the navbar so that the tabs will redirect to intended page when clicked 
// on.
// In this example I have it so that when you click on the Header tab it switches to the Header tab 
// etc.
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
  <Routes>
  <Route path='/' element={<Header></Header>}></Route>
  <Route path='/' element={<Content></Content>}></Route>
  <Route path='/read' element={<Footer></Footer>}></Route>
</Routes>      
      
      
    


     
    </div>
    </BrowserRouter>
  );
}

export default App;
