import { FC } from 'react';

import HeaderLogo from 'assets/images/logo.png';

import { Button } from '../Button';
import classes from './Header.module.scss';
import { Container } from '../Container';

const Header: FC = () => (
  <header className={classes.header}>
    <Container>
      <img alt="Ведьмак" src={HeaderLogo} />

      <Button>Подключить подписку</Button>
    </Container>
  </header>
);

export default Header;
