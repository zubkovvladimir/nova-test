import { FC } from 'react';

import { Button } from '../Button';
import { Container } from '../Container';
import Logo from '../Logo';
import classes from './Header.module.scss';

const Header: FC = () => (
  <header className={classes.header}>
    <Container>
      <div className={classes.header__inner}>
        <Logo />

        <Button variant="outlined">Подключить подписку</Button>
      </div>
    </Container>
  </header>
);

export default Header;
