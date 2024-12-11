import React from 'react'

function Mybutton(props){
  return (
    <button className="mt-4 bg-orange-500 text-white font-extrabold py-5 px-10 rounded-3xl hover:bg-orange-dark transition">
      {props.label}      
    </button>
  )
}

export default Mybutton;