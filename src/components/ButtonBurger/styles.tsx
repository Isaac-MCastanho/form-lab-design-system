import styled from "styled-components";

export const Container = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  cursor: pointer;
  top: 0;
  background-color: transparent;

  &:hover span:nth-child(1) {
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  &:hover span:nth-child(3) {
    -webkit-transition: 0.16s ease-in-out;
    -moz-transition: 0.16s ease-in-out;
    -o-transition: 0.16s ease-in-out;
    transition: 0.16s ease-in-out;
  }

  & span {
    z-index: 3;
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
  }

  & span:nth-child(2) {
    top: 14px;
  }

  & span:nth-child(3) {
    top: 28px;
  }

  &.open span:nth-child(1) {
    top: 14px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
    background-color: #fff;
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -30px;
    -webkit-transition: 0.16s ease-in-out;
    -moz-transition: 0.16s ease-in-out;
    -o-transition: 0.16s ease-in-out;
    transition: 0.16s ease-in-out;
  }

  &.open span:nth-child(3) {
    top: 14px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    background-color: #fff;
  }

  @media (min-width: 934px) {
    display: none;
  }
`;
