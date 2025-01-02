import React from 'react'

const counterReducers = (state={sayac:0,text:""},{type,payload}) => {

 switch(type){
    case  "ARTTIR":
      return {sayac:state.sayac+1,text:payload}
    case  "AZALT":
      return {sayac:state.sayac-1,text:payload}
    
    case  "SIFIRLA":
      return {sayac:0,text:payload}
    
      default:
     return state
      
 }
  

}

export default counterReducers