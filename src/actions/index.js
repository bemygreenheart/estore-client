// User CRUD 
export const createUser = (formValues) =>{
  return {
    type : "CREATE_USER",
    payload : formValues
  }
} 

export const deleteUser =(id)=>{
  return {
    type : "DELETE_USER",
    payload : id
  }
}

export const updateUser = (formValues, id) => {
  return {
    type : "UPDATE_USER",
    payload: formValues
  }
}

export const fetchUser = (id) => {
  return {
    type : "FETCH_USER",
    payload: id
  }
}

// User Authentication 
export const logIn = (user) =>{
  return {
    type : "LOGIN_USER",
    payload : user.id
  }
}

export const logOut = (user) =>{
  return {
    type : "LOGOUT_USER",
    payload : user.id
  }
}

// Language selecter
export const selectLanguage =(language)=>{
  return {
    type : "SELECT_LANGUAGE",
    payload : language
  }
}