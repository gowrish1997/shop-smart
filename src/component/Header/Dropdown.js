import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Input from "./Input";
const Dropdown = ({ navComponent }) => {
  const [showDropdown, setshowDropdown] = useState(true);
  function showDropdownHandler() {
  
    setshowDropdown((prev) => !prev);
  }
  return (
    <div className="flex md:hidden w-full  flex-col text-[#141617] text-[16px] leading-[42px] tracking-[0.015em] font-[500]  ">
      <div className="box-border w-full flex flex-row items-center justify-between cursor-pointer  ">
        <div className=" box-border w-full text-left border-[1px] border-[#f2f3f5] border-solid pl-[12px] bg-[#ffffff]  ">
          Go to...
        </div>
        <div className=" box-border  border-[1px] border-[#f2f3f5]border-solid px-[15px] ">
          <i
            class="fas fa-bars fa-lg text-[#050505]"
            onClick={showDropdownHandler}
          ></i>
        </div>
      </div>
    
        <div className={`box-border w-full overflow-hidden flex flex-col justify-start items-start ${showDropdown?'h-[0px]':'h-[250px] '}  transition-height duration-700 ease-in  `}>
          <div className="box-border w-full flex flex-col items-start justify-start cursor-pointer ">
            {navComponent?.map((category, index) => {
              return (
                <Link
                  className="w-full text-left "
                  key={index}
                  to={{
                    pathname: `/category/${category.slug}/`,
                    state: { categoryId: category.id },
                  }}
                >
                  <div
                    key={category.id}
                    onClick={showDropdownHandler}
                    className=" box-border border-[1px] w-full  border-solid border-[#f2f3f5] pl-[12px] bg-[#ffffff] "
                  >
                    {category.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="bg-[#ffffff] w-full mt-[10px] ">
            <Input></Input>
          </div>
        </div>
      
    </div>
  );
};

export default Dropdown;
