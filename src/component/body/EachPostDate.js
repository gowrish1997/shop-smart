import React from 'react'

const EachPostDate = ({eachPostData}) => {
  return (
    <div className="box-border w-[82px] min-w-[82px] mr-[17px]">
    <div className="bg-[#65bd7d] p-[10px]">
      <div className="text-[29px] font-[700] leading-[29px] text-[#fff] ">
        {new Date(eachPostData?.date).getDate()}
      </div>
      <div className=" text-[#fff] ">{`0${
        new Date(eachPostData?.date).getMonth() + 1
      }, ${new Date(eachPostData?.date).getFullYear()}`}</div>
    </div>
    <div className="box-border p-[20px] bg-[#eef0f2] mt-[3px]">
      <i class="fas fa-pen-nib fa-1x" style={{ color: "#469408" }}></i>
    </div>
  </div>
  )
}

export default EachPostDate