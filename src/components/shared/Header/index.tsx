import { FC } from 'react';

import HeaderLogo from 'assets/images/logo.png';
import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

import classes from './Header.module.scss';
import { Button } from '../Button';

const Header: FC = () => (
  <header className={classes.header}>
    <img alt="Ведьмак" src={HeaderLogo} />
    <Button>Подключить подписку</Button>
  </header>
);

export default Header;
