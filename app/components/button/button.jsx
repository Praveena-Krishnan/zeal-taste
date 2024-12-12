import React from 'react'

function Mybutton(props){
  return (
    <button className="mt-4 bg-orange-400 text-white font-extrabold font-sansita py-5 px-10 rounded-3xl hover:bg-orange-dark transition text-xl">
      {props.label}      
    </button>
  )
}

export default Mybutton;