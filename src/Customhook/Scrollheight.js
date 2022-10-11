import React, { useEffect, useState } from 'react'

export const Scrollheight = () => {
    const [scrollheight,setScrollHeight]=useState(0)
    function scrollhandler(){
console.log(window.scrollX)
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollhandler)
    })
  return scrollheight
}

