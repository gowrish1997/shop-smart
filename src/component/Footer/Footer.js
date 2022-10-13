import React from 'react'

const Footer = () => {
  return (
    <div className='box-border bg-[#141617] h-[80px] w-full px-[30px] flex flex-row justify-between items-center text-[hsla(0,0%,100%.calc(100
    % -60%))] text-[13px]' >
<div className='text-[white] opacity-[0.4] '>{`Copyright 2012\u00A0| \u00A0`}<span className='text-[white] opacity-[0.9]'>Shopsmart</span>. All Rights Reserved.</div>
<div className='flex flex-row justify-center items-center' >
<i class="fab fa-facebook-f text-[white] text-[16px] mr-[20px] "></i>
<i class="fab fa-instagram text-[white] text-[16px] mr-[20px] "></i>
<i class="fab fa-pinterest-p text-[white] text-[16px] mr-[20px] "></i>
<i class="fab fa-twitter text-[white] text-[16px]  "></i>
</div>
    </div>
  )
}

export default Footer