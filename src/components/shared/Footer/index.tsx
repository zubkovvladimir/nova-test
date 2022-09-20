import { FC } from 'react';

import { ReactComponent as Inst } from 'assets/images/icons/inst.svg';
import { ReactComponent as FB } from 'assets/images/icons/fb.svg';
import { ReactComponent as VK } from 'assets/images/icons/vk.svg';
import HeaderLogo from 'assets/images/logo.png';
// import HeaderLogo from 'assets/images/logo.png';
import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

import classes from './Footer.module.scss';
import { Button } from '../Button';
import { Container } from '../Container';

const Footer: FC = () => (
  <footer className={classes.footer}>
    <Container>
      <div className={classes.footer__inner}>
        <img alt="Ведьмак" src={HeaderLogo} />

        <Button>Политика обработки персональных данных</Button>

        <ul className={classes.footer__social}>
          <li>
            <a href="/">
              <Inst />
            </a>
          </li>
          <li>
            <a href="/">
              <FB />
            </a>
          </li>
          <li>
            <a href="/">
              <VK />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default Footer;
