import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 4rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 990px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ burgerOpen }) => burgerOpen ? '#FFA92F' : '#FFEECF'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ burgerOpen }) => burgerOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ burgerOpen }) => burgerOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ burgerOpen }) => burgerOpen ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ burgerOpen }) => burgerOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default function Burger({ burgerOpen, toggleBurger })  {

  return (
    <>
      <StyledBurger burgerOpen={burgerOpen} onClick={toggleBurger}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}
