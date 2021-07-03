import logo from '../logo.svg';
import './App.css';
import React from 'react';
import PostList from '../pages/PostList';
import {BrowserRouter, Route} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import {history} from "../redux/configureStore"
import Login from '../pages/Login'
import Signup from '../pages/Signup';

import Header from '../components/Header';
import {Grid} from '../elements'
import {actionCreators as userActions} from "../redux/modules/user";
import {useDispatch} from "react-redux";
import {apiKey} from "./firebase";
import  PlusButton  from '../elements/PlusButton';
import Permit from './Permit';
function App() {
  const dispatch = useDispatch();
  const _session_key =`firebase:authUser:${apiKey}:[DEFAULT]`
  const is_session = sessionStorage.getItem(_session_key)? true:false
  React.useEffect(() => {
    if(is_session){
      dispatch(userActions.loginCheckFB())
    }
  },[])

  if(is_session && _session_key){
    return (
      <Permit>
      <React.Fragment>
        <Grid>
        <Header/>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
        </ConnectedRouter>
        </Grid>
        <PlusButton/>
      </React.Fragment>
      </Permit>
    );
  }

  return (
    <React.Fragment>
      <Grid>
      <Header/>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
      </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
