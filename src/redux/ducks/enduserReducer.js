
export const GET_ENDUSER = "GET_ENDUSER"
const SET_ENDUSER = "SET_ENDUSER"
export const ADD_ENDUSER = "ADD_ENDUSER"
export const DELETE_ENDUSER = "DELETE_ENDUSER"
export const UPDATE_ENDUSER = "UPDATE_ENDUSER"

export const GET_SINGLE_ENDUSER = "GET_SINGLE_ENDUSER"
export const SET_SINGLE_ENDUSER = "SET_SINGLE_ENDUSER"


export const  getEndusers = () =>({type:GET_ENDUSER});
export const setEndusers = (endusers)=>({type:SET_ENDUSER,endusers});
export const addEnduser = (enduser)=>({type:ADD_ENDUSER,enduser})
export const deleteEnduser = (enduserId)=>({type:DELETE_ENDUSER,enduserId})
export const updateEnduser = (enduser)=>({type:UPDATE_ENDUSER,enduser})

export const  getSingleEndusers = (enduserId) =>({type:GET_SINGLE_ENDUSER,enduserId});
export const  setSingleEndusers = (enduser) =>({type:SET_SINGLE_ENDUSER,enduser});

const initialState = {
    endusers:[],
}

const initialSingleState = {
    enduser: null
  }

export function enduserReducer(state=initialState,action){
    switch(action.type) {
        case SET_ENDUSER:
            return { ...state,endusers:action.endusers}
        case ADD_ENDUSER:
            return {...state,endusers:[...state.endusers,action.enduser]} 
        case DELETE_ENDUSER:
            return {...state, endusers: state.endusers.filter(enduser=>enduser.id !== action.enduserId)} 
        case UPDATE_ENDUSER:
            return {...state,
                endusers:state.endusers.map(enduser => {
                    if(enduser.id === action.enduser.id){
                        return action.enduser
                    }else {
                        return enduser
                    }
                })
            }          
        default:
            return state;    
    }
}

export function singleEnduserReducer(state = initialSingleState, action) {
    switch (action.type) {
      case SET_SINGLE_ENDUSER: 
        return { ...state, enduser: action.enduser };
      default:
        return state;
    }
  }
