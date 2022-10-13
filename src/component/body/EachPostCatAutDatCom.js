import axios from "axios";
import { Link,useHistory } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import EachPostCategory from "./EachPostCategory";
const EachPostCatAutDatCom = ({ eachPostData }) => {
  const [postUser, setPostUser] = useState(null);
const history=useHistory();
  useEffect(() => {
    const user = axios.get(
      `https://smartblog.portfolios.digital/wp-json/wp/v2/users/${eachPostData?.author}`
    );

    Promise.all([user]).then((results) => {
      setPostUser(results[0]);
    });
    
  }, [eachPostData]);
 function authNavigateHandler(id){
  console.log(id)
axios.get(`https://smartblog.portfolios.digital/wp-json/wp/v2/users/${id}?_fields=name`).then((value)=>{
  console.log("help")
  console.log(value?.data?.name)
  history.push({pathname:`/auth/${value?.data?.name}`, state:{ index:id }})
})

}

  return (
    <div className="box-border  text-[13px] leading-[1.5] tracking-[-0.015em] flex flex-row flex-wrap  ">
       {/* <Link  to={{
                    pathname:`/auth/${eachPostData?.slug}/`,
                    state: { index:eachPostData?.author },
                  }}  > */}
      <div onClick={()=>authNavigateHandler(eachPostData?.author)} className=" transition-colors duration-200 ease-in  leading-[1.2] tracking-[-0.015em]  text-left hover:text-[#65bd7d] cursor-pointer">{`By ${postUser?.data?.name} \u00A0|`}</div>
      <div>
        {`  \u00A0 ${new Date(eachPostData?.date).toLocaleString("default", {
          month: "long",
        })} ${new Date(eachPostData?.date).getDate()} ${new Date(
          eachPostData?.date
        ).getFullYear()}  \u00A0 | `}
      </div>

      <EachPostCategory eachPostData={eachPostData}></EachPostCategory>
    </div>
  );
};

export default EachPostCatAutDatCom;
