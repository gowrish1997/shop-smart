import React from "react";
import { useLocation } from "react-router-dom";
import Input from "../component/Header/Input";
import SearchPost from "../component/Search/SearchPost";
const Search = () => {
 console.log('this is search')
   
  return (
    <>
    <div className="box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center text-[#141617] ">
      <div className=" w-[1200px]  flex flex-col items-start justify-start text-left leading-[1.2] tracking-[0.015em] ">
      <div className="w-2/3 border-b-[1px] border-solid  border-[#e6e5e6] pb-[60px] ">
        <div className="w-full text-[64px] font-[600] mb-[28px]  ">Need a new Search?</div>
        <p className="w-full">If you didn't find what you were looking for, try a new search!</p>
        
        <Input></Input>
        </div>
      </div>
    </div>
    <SearchPost></SearchPost>
    </>
  );
};

export default Search;
