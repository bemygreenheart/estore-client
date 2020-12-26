import { combineReducers } from 'redux';

const INITIAL_STATE = {
  isSigned : null,
  userId : null,
  token : null
};

const authUser = (state = INITIAL_STATE, action ) =>{
  switch(action.type){
    case "LOGIN_USER":
      return {
        isSigned : true,
        userId : action.payload.id,
        token : null
      };
    case "LOGOUT_USER":
      return {
        isSigned : false,
        userId : null,
        token : null
      };
    default:
      return state;
    }
}

const languageSelecter = (state ={ current : "english"}, action)=>{
  if(action.type=="SELECT_LANGUAGE"){
    return {current : action.payload};
  }
  return state;
}

export default combineReducers({
  auth : authUser,
  selectedLanguage : languageSelecter
})
