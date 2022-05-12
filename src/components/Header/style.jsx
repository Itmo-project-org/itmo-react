import styled, { css } from 'styled-components';
import logoDesktop from '../../images/LogoDesktop.png';
import logoTablet from '../../images/LogoTablet.png';
import logoMobile from '../../images/LogoMobile.png';

export const Container = styled.header`
  background-color: var(--bg-color-dark-blue);
`;

export const Nav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  padding-block: 20px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;

  @media (max-width: 1000px) {
    justify-content: flex-start;

    ${(props) => {
      return (
        props.toggle &&
        css`
          align-items: flex-end;
          flex-direction: column;
        `
      );
    }}
  }
`;

export const NavBtn = styled.div`
  height: 20px;
  width: 20px;

  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  position: relative;

  span {
    background-color: var(--color-white);
    height: 2px;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: flex;
    margin-inline: 40px;

    ${(props) => {
      return (
        props.toggle &&
        css`
          span:first-child {
            transform: rotate(45deg);
            position: absolute;
          }

          span {
            transform: rotate(-45deg);
          }

          span:last-child {
            display: none;
          }
        `
      );
    }}
  }

  @media (max-width: 500px) {
    margin-inline: 16px;
  }
`;

export const NavList = styled.ul`
  background-color: var(--bg-color-dark-blue);
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  li {
    box-sizing: border-box;
    width: 100px;
    height: 42px;

    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 2px solid transparent;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid var(--color-emerald);
    }
  }

  @media (max-width: 1000px) {
    display: none;
    width: 100%;
    gap: 0px;

    ${(props) => {
      return (
        props.toggle &&
        css`
          display: flex;
          flex-direction: column;

          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);

          li {
            width: 100%;
            justify-content: flex-start;
            padding-left: 40px;
          }
        `
      );
    }}
  }
  @media (max-width: 500px) {
    li {
      padding-left: 16px;
    }
  }
`;

export const NavLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  font: var(--main-14-19);
  color: var(--color-white);
`;

export const Logo = styled.div`
  width: 150px;
  height: 54px;
  background-image: url(${logoDesktop});
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1000px) {
    width: 95px;
    height: 32px;
    background-image: url(${logoTablet});

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 500px) {
    width: 71px;
    height: 24px;
    background-image: url(${logoMobile});
  }
`;