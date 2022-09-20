import { FC } from 'react';

import HeaderLogo from 'assets/images/logo.png';

import classes from './Logo.module.scss';

const Logo: FC = () => (
  <a className={classes.logo} href="/">
    <img className={classes.logo__img} alt="Ведьмак" height="44" src={HeaderLogo} width="130" />
  </a>
);

export default Logo;
