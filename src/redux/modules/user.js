import {createAction, handleAction, handleActions} from "redux-actions"
import {produce} from "immer"
import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';
import {auth} from "../../shared/firebase"
import firebase from "firebase/app";

//actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER;"

//action creators
const logOut = createAction(LOG_OUT, (user) =>({user}))
const getUser = createAction(GET_USER, (user) =>({user}))
const setUser = createAction(SET_USER, (user) => ({user}))


//initialState
const initialState = {
    user:null,
    is_login: false,
}

const user_initial = {
    user_name:'jonghak'
}

//middleware actions

const loginFB = (id, pwd) => {
    return function (dispatch, getState, {history}){

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) =>{
    auth
    .signInWithEmailAndPassword(id, pwd)
    .then((user) => {
    console.log(user)
    dispatch(setUser({user_name: user.user.displayName , id: id, user_profile:"", uid: user.user.uid,}))
    history.push("/");
        // Signed in
        // ...
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
    })

    
    }
}


const signupFB = (id, pwd, user_name) => {
    return function (dispatch, getState, {history}){
       auth
    .createUserWithEmailAndPassword(id, pwd)
    .then((user) => {
        console.log(user)

        auth.currentUser.updateProfile({
            displayName: user_name,
        }).then(()=>{
            dispatch(setUser({user_name: user_name, id: id, user_profile:"", uid:user.user.uid}))
            history.push("/")
        }).catch((error) => {
            console.log(error);
        })

    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode, errorMessage)
    // ..
  });
    }
}

const loginCheckFB = () => {
    return function (dispatch, getState, {history}){
        auth.onAuthStateChanged((user) => { // onAuthStateChanged는 user가 있는지 없는지 확인하는 메서드이다.
            if(user){
                dispatch(setUser({
                    user_name: user.displayName,
                    user_profile: '',
                    id: user.email,
                    uid: user.uid,
                }))
            }else{
                dispatch(logOut())
            }
        })
    }
}

const logoutFB = () => {
    return function (dispatch, getState, {history}){
        auth.signOut().then(() => {
            dispatch(logOut());
            history.replace("/")// replace는 현재 페이지와 () 괄호안에 있는 페이지와 바꿀때 사용한다. 
        })
    }
}
//reduser

export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) =>{
        setCookie("is_login", "success")
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) =>{
        deleteCookie("is_login")
        draft.user = null;
        draft.is_login = false;
}),
    [GET_USER]: (state, action) => produce(state, (draft) =>{}),
}, initialState)

// action creator export 
const actionCreators = {
    setUser,
    logOut,
    getUser,
    signupFB,
    loginFB,
    loginCheckFB,
    logoutFB
};

export {actionCreators}