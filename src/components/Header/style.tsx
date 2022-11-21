import tw from "tailwind-styled-components";
import styled from "styled-components";

export const Conatiner = tw.header`
 w-screen 
 h-[70px] 
 flex 
 justify-center 
 items-center
 border-b-2 
 border-solid 
 border-gray-800 
 fixed 
 bg-gray-900 

max-break1:justify-between
max-break1:px-5
`;

const NavStyle = tw.nav`
w-screen 
h-full 
max-w-[934px] 
flex items-center 
justify-evenly 



transition-all
max-break1:fixed
max-break1:bg-gray-900 
max-break1:gap-40
`;

export const Nav = styled(NavStyle)`
  @media (max-width: 934px) {
    ${(props) =>
      props.open
        ? "top:0; left:0; opacity:1; visibility:visible;"
        : "top:-100px; opacity:0; visibility:hidden;"}

    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
  }
`;
