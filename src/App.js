import React from 'react';
import  { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import About from './common/About';
import Home from './common/Home';
import "./App.css";
import News from './common/News';
import{Form,Button,Alert,Nav,Badge,  FormControl, Contaner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Photo from './common/photo';
import Hello from './common/form';

const App = () => {
  return (
    <div className="">
      <Router >
      <Nav activeKey="/home" className="router">
       <FontAwesome className="home" name="manish">manish</FontAwesome>
<Nav.Link id="nav" href="/">about</Nav.Link>
<Nav.Link href="/home">home</Nav.Link>
<Nav.Link href="/news">news</Nav.Link>
<Nav.Link href="disabled" disabled>
  Disabled
</Nav.Link>
<Nav.Link href="/photo">Photo</Nav.Link>
<Nav.Link href="/form">form</Nav.Link>


</Nav>
        <Route exact path="/" component={About}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/news" component={News}></Route>
        <Route path ="/photo" component={Photo}></Route>
        <Route path='/form' component={Hello}></Route>
       
      </Router>
     {/* <div className="h2">
     <h2> hello from manish side</h2>
     <div className="socialmedia">
       <h2>@manishpanwar</h2>
     <a href="https://www.google.com/" target="_blank">
     <FontAwesome className=" facebook"name="facebook"/>
     </a>
     <a href="https://www.instagram.com/manishpan_online/" target="_blank">
     <FontAwesome className=" instagram"name="instagram"/>
     </a>
     <a href="" target="_blank">
     <FontAwesome className="twitter"name="twitter"/>
     </a>
     </div> 
  </div>*/}
     
     
    </div>
  );
}

export default App;
// import React,{useEffect,useState} from 'react';

// const App = () => {
//   const [user, setUser]= useState([]);
//   useEffect(()=>{
//     fetch('https://api.npms.io/v2/search?q=react').then((res)=>{
//       res.json().then((responce)=>{
//         console.warn("response",responce);
//         setUser(responce);
//       })
//     })
//   },[])
//   console.log(user)
//   return (
//     <div>
//       <h2> helo.....</h2>
//     </div>
//   );
// }

// export default App;
