import {UserActionTypes} from  './user.types';
const Init_State ={
    currentUser: null
}
const userReducer = (state = Init_State,action) => 
{
    switch(action.type)
  {
      case UserActionTypes.SET_CURRENT_USER:
      return {
          ...state,
        currentUser: action.payload
      }
      default:
          return state;
  }
}
export default userReducer;