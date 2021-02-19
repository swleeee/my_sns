import React from 'react';
// import logo from './logo.svg';

import './App.css';
import "antd/dist/antd.css";
import LoginPage from '../src/views/LoginPage/LoginPage.js';
import  { Route } from "react-router-dom";



// class App extends Component {
  // state = { users: [] }
  

  // componentDidMount(){

  //   fetch('/users')
  //   .then(res => res.json())
  //   .then(users => this.setState({ users }));

  // }
  // const layout = {
  //   labelCol: {
  //     span: 8,
  //   },
  //   wrapperCol: {
  //     span: 16,
  //   },
  // };

  // const tailLayout = {
  //   wrapperCol: {
  //     offset: 8,
  //     span: 16,
  //   },
  // };
  
  // const App = () => {
    function App(){
    // const onFinish = (values) => {
    //   console.log('Success:', values);
    // };
  
    // const onFinishFailed = (errorInfo) => {
    //   console.log('Failed:', errorInfo);
    // };
  
 
    return (
      <div className='main'>
        <a href="https://www.freepik.com/photos/technology" style={{display: 'block', color:'black', opacity: '0.3'}}>Technology photo created by rawpixel.com - www.freepik.com</a>
        <div style={{  }} className='loginForm'>
          <LoginPage/>      
        
        </div>

        
       </div>
       
    );
    
 };


export default App;
