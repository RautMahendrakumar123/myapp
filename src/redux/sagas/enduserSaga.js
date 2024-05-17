import { takeLatest,call,put } from "redux-saga/effects";
import axios from "axios";
import { ADD_ENDUSER, DELETE_ENDUSER, GET_ENDUSER,GET_SINGLE_ENDUSER,UPDATE_ENDUSER,setEndusers, setSingleEndusers } from "../ducks/enduserReducer";

function* handleGetEndusers(){
    try {
        const response = yield call(axios.get,'http://localhost:1337/api/end-users')
        // console.log(response);
        const users = response.data.data;
        yield put(setEndusers(users))
    } catch (error) {
        console.log(error);
    }
}

function* handleGetEnduser(action){
    try {
        const {enduserId}=action;
        console.log(enduserId);
        const response = yield call(axios.get,`http://localhost:1337/api/end-users/${enduserId}`,action.enduser)
        const user = response.data.data;
        // console.log(user.attributes);
        yield put(setSingleEndusers(user.attributes))
    } catch (error) {
        console.log(error);
    }
}

function* handleAddEnduser(action){
    try {

        const response = yield call(axios.post,'http://localhost:1337/api/end-users',action.enduser)
        yield put(setEndusers(response.data))
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteEnduser(action){
    try {
        const {enduserId}=action;
        
        const response = yield call(axios.delete,`http://localhost:1337/api/end-users/${enduserId}`,action.enduser)
        yield put(setEndusers(response.data.data))
    } catch (error) {
        console.log(error);
    }
}

function* handleUpdateEnduser(action){
    try {
        const {enduser}=action;
        const response = yield call(axios.put,`http://localhost:1337/api/end-users/${enduser.data.id}`,enduser)
        yield put(setEndusers(response.data.data))
    } catch (error) {
        console.log(error);
    }
}

export function* GetEndusersSaga(){
    yield takeLatest(GET_ENDUSER,handleGetEndusers);
}

export function* AddEndusersSaga(){
    yield takeLatest(ADD_ENDUSER,handleAddEnduser);
}

export function* DeleteEndusersSaga(){
    yield takeLatest(DELETE_ENDUSER,handleDeleteEnduser);
}

export function* UpdateEndusersSaga(){
    yield takeLatest(UPDATE_ENDUSER,handleUpdateEnduser);
}

export function* GetEnduserSaga(){
    yield takeLatest(GET_SINGLE_ENDUSER,handleGetEnduser);
}