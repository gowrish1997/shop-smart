
import { Link, useLocation } from "react-router-dom";
import Input from "./Input";
import { Searchcontainer, Clearcontainer, Inpucontainer } from "./Headerstyle";
const Search = ({ navComponent,searchShowHandler }) => {
   return (
    <Searchcontainer>
    <Input></Input>
      <Clearcontainer className=" cursor-pointer  ">
        <i class="fab fa-accessible-icon hover:text-[#65bd7d] " onClick={()=>searchShowHandler()} ></i>
      </Clearcontainer>
    </Searchcontainer>
  );
};

export default Search;
