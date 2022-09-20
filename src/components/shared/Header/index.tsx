import { FC } from 'react';

import HeaderLogo from 'assets/images/logo.png';

import { Button } from '../Button';
import { Container } from '../Container';
import classes from './Header.module.scss';

const Header: FC = () => (
  <header className={classes.header}>
    <Container>
      <div className={classes.header__inner}>
        <a href="/">
          <img alt="Ведьмак" src={HeaderLogo} />
        </a>

        <Button>Подключить подписку</Button>
      </div>
    </Container>
  </header>
);

export default Header;
