import React,{ Fragment, Component} from 'react';
import './App.css';
import  Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import{Link} from'react-router-dom';

import axios from 'axios';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/pages.js/About';
import { async } from 'q';
import { type } from 'os';

class App extends Component {
state={
  users:[],
  user:{},
  loading:false,
  alert:null
};
//Search Github User
   searchUsers= async text =>{
    const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users:res.data.items,loading:false});
   }

// Get Single Github user
getUser=async (username) =>{
  this.setState({loading:true});
  const res=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  this.setState({user:res.data,loading:false});

}


   // ClearUsers
   clearUsers =()=>this.setState({ users:[],loading:false  });
   //set Alert
   setAlert=(msg,type)=>{
     this.setState({alert:{msg,type}});

   }
    
  render(){
    const{users,loading,user}=this.state;
  return (
    <Router>
    <div className="App">
      <Navbar tittle="Github Finder" icon='fab fa-github' />
      <div className="container">
        <Alert alert ={this.state.alert}/>
        <Switch>
          <Route exact path='/' render={props =>(
          <Fragment>
           <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} setAlert={this.setAlert}   />
      <Users loading={loading} users={users} />
          </Fragment>

          )}/>
          <Route exact path ='/about' component={About}/>
          <Route exact path ='/user/:login' render={props =>(
            <User {...props} getUser={this.getUser}  user={user} loading={loading}/>
            )}/>
        
        </Switch>
      
      </div>
       </div>
       </Router>
  );
}
}
export default App;
