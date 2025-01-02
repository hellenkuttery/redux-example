import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterReducers } from '../../redux/reducers/counterReducers';
import { arttir, azalt, sifirla } from '../../redux/actions/counterActions';

const Counter = () => {
  // Değişkenler  useSelector ile ,fonksiyonlar useDispatch hook ile çağrılır

  const {sayac,text}=useSelector(((state)=>state.counterReducers))

  const mydispatch=useDispatch()

  return (
    <div className='mb-4'>
      <h2 className='text-warning fw-bold display-6' >Counter</h2>
      {/* 1.sayaç gerekiyor */}
      <p  className='fs-3' >Count:<span className='fw-bold'>{sayac}</span> </p>
      {/* 2.Metin gerekiyor */}
      <p>{text}</p>
      <div>
        {/* 3 ve 4. olarak arttır aazalt fonksiyonu gerekiyor */}
      <button className='btn btn-danger m-1'  onClick={()=>mydispatch(arttir())}>Attır</button>
      <button className='btn btn-warning m-1'    onClick={()=>mydispatch(azalt())}>Azalt</button>
      <button className='btn btn-success m-1'   onClick={()=>mydispatch(sifirla())}>Reset</button>
      </div>
    
    </div>
  )
}

export default Counter