import React from 'react'
import useScrollDirection from '../Customhook/Scrollheight'
const ScrollUp = () => {
    console.log('scrollip')
       const {scrollDirection,height} = useScrollDirection();
       function upwardHandler() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
  return (
     <div className={` box-border ${scrollDirection=='down'?'flex':'hidden'} justify-center items-center h-[40px] w-[50px] fixed bottom-0 right-0 mr-[60px] bg-[#333] rounded-t-lg hover:bg-[#65bd7d]  transition-all duration-200 ease-in `} onClick={upwardHandler} ><i class="fal fa-arrow-alt-up text-[white]" ></i></div>
  )
}

export default ScrollUp