import React from 'react'

const Commentcontainer = () => {
  return (
    <div className='box-border text-[#141617] leading-1.2 tracking-[0.015em]  '>
      <div className='font-[600] text-[20px] mb-[20px]'>Leave A Comment</div>
      <form className=' box-border flex flex-col justify-start  '>
        <textarea placeholder='comment' className='box-border border-[1px] border-[#f2f3f5] h-[50px] pl-[10px] focus:outline focus:outline-[#65bd7d] focus:outline-[1px] rounded-lg mt-[1px] '></textarea>
        <input placeholder='Name(required)' className='box-border border-[1px] border-[#f2f3f5] h-[50px]  pl-[10px] focus:outline focus:outline-[#65bd7d] focus:outline-[1px] rounded-lg mt-[1px] ' type='text'></input>
        <input placeholder='Email(required)' className='box-border border-[1px] border-[#f2f3f5] h-[50px]  pl-[10px] focus:outline focus:outline-[#65bd7d] focus:outline-[1px] rounded-lg mt-[1px] ' type='text'></input>
        <input placeholder='Website' className='box-border border-[1px] border-[#f2f3f5] h-[50px]  pl-[10px] focus:outline focus:outline-[#65bd7d] focus:outline-[1px] rounded-lg mt-[1px] ' type='text'></input>
        
        <button className=' box-border w-[20%] h-auto  p-[10px] mt-[20px] bg-[#65bd7d] rounded-lg text-[white] '>POST COMMENT</button>
      </form>
    </div>
  )
}

export default Commentcontainer