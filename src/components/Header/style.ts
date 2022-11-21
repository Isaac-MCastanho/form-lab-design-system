import tw from "tailwind-styled-components";
import styled from "styled-components";

interface NavProps {
  open: boolean;
}

// export const Container = tw.header`
//  w-screen
//  h-[70px]
//  flex
//  justify-center
//  items-center
//  border-b-2
//  border-solid
//  border-gray-800
//  fixed
//  bg-gray-900

// max-break1:justify-between
// max-break1:px-5
// `;
export const Container = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #202024;
  position: fixed;
  background: #121214;

  @media (max-width: 934px) {
    justify-content: space-between;
    padding: 0 20px;
  }
`;

// const NavStyle = tw.nav<NavProps>`
// w-screen
// h-full
// max-w-[934px]
// flex items-center
// justify-evenly

// ${(props) =>
//   props.open
//     ? "max-break1:top-0 max-break1:left-0 max-break1:opacity-100 max-break1:visible"
//     : "max-break1:top-[-100px] max-break1:opacity-0 max-break1:invisible"}

// transition-all
// max-break1:fixed
// max-break1:bg-gray-900
// max-break1:gap-40

// max-break1:h-screen
// max-break1:w-screen
// max-break1:flex-col
// max-break1:justify-center
// `;

export const Nav = styled.nav<NavProps>`
  width: 100vw;
  height: 100%;
  max-width: 934px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 934px) {
    ${(props) =>
      props.open
        ? "top:0; left:0; opacity:1; visibility:visible;"
        : "top:-100px; opacity:0; visibility:hidden;"}
    position: fixed;

    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
  }
`;
