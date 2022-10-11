import tw from "tailwind-styled-components";

export const Maincontainer = tw.div`
box-border
w-full
flex
flex-row
justify-center

h-[99px]
px-[30px]
text-[16px]

`;
export const Insidecontainer = tw.div`
box-border
flex
flex-row
w-full
h-full
items-start
justify-between
text-[16px]
text-[#141617]
max-w-[1200px]
font-family: var(--nav_typography-font-family);
    font-[500]
    tracking-[0.015em]
    not-italic
 overflow-hidden
`;

export const Logocontainer = tw.div`
mt-[31px]
mb-[31px]
ml-[0px]
mr-[0px]
w-[150px]
h-[37px]
`;
export const Logoimage = tw.img`
w-full
h-full
`;
export const Movingcontainer = tw.div`
position: relative;
box-border
flex
flex-col
justify-start
items-start
text-[#161417]

`;
export const Searchcontainer = tw.div`
box-border
flex
flex-row
h-[99px]
items-center
justify-start
`;
export const Inpucontainer = tw.input`
box-border
flex-auto
ml-[48px]
`;
export const Clearcontainer = tw.div`
ml-[10px]
`;
export const Navcontainer = tw.ul`
box-border
flex
flex-row
h-[99px]
cursor-pointer

`;
export const Category = tw.li`
box-border
 mr-12 pt-[31px] 
 flex 
 align-middle
  border-t-[3px] 
 
 border-solid
   hover:border-[#65bd7d]
    hover:text-[#65bd7d]

`;
