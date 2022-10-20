import React from 'react'
import { useEffect, useRef, } from "react";
import { useHistory } from 'react-router-dom';
const Input = () => {
    const inputRef=useRef()
    const history=useHistory()
    useEffect(()=>{
inputRef.current.focus()
    },[])
    function submithandler(e){
e.preventDefault();
console.log(inputRef.current.value)
history.push({
  pathname: `/search/page/1?search=${inputRef.current.value}`,
  state:{searchvalue:inputRef.current.value,pageIndex:0}
});
    }
  return (
    <form className="w-full" onSubmit={submithandler}>
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
