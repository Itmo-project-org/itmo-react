/* eslint-disable jsx-a11y/anchor-is-valid */

import { useCallback, useState } from 'react';
import {
  Logo,
  Container,
  Nav,
  NavBtn,
  NavList,
  NavLink,
  Overlay,
} from './style';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [opened, setOpened] = useState(false);

  const toggleMenu = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const toggleLink = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return (
    <Container toggle={toggle}>
      <Nav toggle={toggle}>
        <Logo toggle={toggle} />
        <NavBtn toggle={toggle} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </NavBtn>
        <NavList toggle={toggle} opened={opened}>
          <NavLink>
            <a href="#">О нас</a>
          </NavLink>
          <NavLink>
            <a href="#">Лаборатория</a>
          </NavLink>
          <NavLink>
            <a href="#">Проекты</a>
          </NavLink>
          <NavLink onClick={toggleLink}>
            <a href="#">Образование</a>
          </NavLink>
          <div>
            <a href="#">Аспирантура</a>
            <a href="#">Магистратура</a>
          </div>
          <NavLink>
            <a href="#">Публикации</a>
          </NavLink>
          <NavLink>
            <a href="#">Команда</a>
          </NavLink>
          <NavLink>
            <a href="#">Связаться</a>
          </NavLink>
        </NavList>
      </Nav>
      <Overlay toggle={toggle} />
    </Container>
  );
};

export default Header;
