import React from 'react'

const initialValus={gorevler:[
    {id:0,yazi:"Redux çalışıyoruz",completed:false},
  {id:1,yazi:"Köpekleri gezdi",completed:true}
]}

const todoReducers = (state=initialValus,{type,payload}) => {

 switch(type){
  case "DELETE":
   return { gorevler:state.gorevler.filter((a)=> a.id !== payload) }
  case "ADD":
    return { gorevler:[...state.gorevler,{id:3,yazi:payload,completed:false}]}
  default: return state
 }
}

export default todoReducers