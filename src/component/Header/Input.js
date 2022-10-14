import React from 'react'
import { useEffect, useRef } from "react";
const Input = () => {
    const inputRef=useRef()
    useEffect(()=>{
inputRef.current.focus()
    },[])
  return (
    <form className="w-full">
    <div className="box-border flex flex-row justify-center items-center w-full border-[1px] border-[black ] border-solid pl-[10px] rounded-lg  ">
      <i class="far fa-search font-[700] "></i>
      <input ref={inputRef}
        className="box-border w-full px-[10px] h-[50px] ml-[5px] focus:outline-0  placeholder:text-black placeholder:font-[400] re "
        placeholder="Search..."
      ></input>
    </div>
  </form>
  )
}

export default Input
