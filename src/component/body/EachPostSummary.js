import EachPostCatAutDatCom from "./EachPostCatAutDatCom";
import { Link } from "react-router-dom";
import { useMemo } from "react";
const EachPostSummary = ({ eachPostData,index }) => {

  return (
    <div className="box-border flex flex-col justify-start items-start text-[#141617] ">
      <Link  to={{
                    pathname:`/${eachPostData.slug}/`,
                    state: { index:eachPostData.id,categoriesID:eachPostData.categories },
                   
                  }}  >
        <h1
          className="box-border transition-colors duration-200 ease-in text-[36px] font-[600] leading-[1.2] tracking-[-0.015em]  text-left hover:text-[#65bd7d] cursor-pointer"
          dangerouslySetInnerHTML={{ __html: eachPostData?.title?.rendered }}
        ></h1>
      </Link>
      <EachPostCatAutDatCom eachPostData={eachPostData}></EachPostCatAutDatCom>
      <div
        className="box-border  text-left max-w-[700px] leading-[1.72] text-[16px] tracking-[0.015em] font-[400]"
        dangerouslySetInnerHTML={{
          __html: eachPostData?.excerpt?.rendered,
        }}
      ></div>
    </div>
  );
};

export default EachPostSummary;
