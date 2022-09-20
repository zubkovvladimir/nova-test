import { FC } from 'react';

import { ReactComponent as FB } from 'assets/images/icons/fb.svg';
import { ReactComponent as Inst } from 'assets/images/icons/inst.svg';
import { ReactComponent as VK } from 'assets/images/icons/vk.svg';

import { Button } from '../Button';
import { Container } from '../Container';
import Logo from '../Logo';
import classes from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={classes.footer}>
    <Container>
      <div className={classes.footer__inner}>
        <Logo />

        <span className={classes.footer__privacy}>
          <Button variant="link">Политика обработки персональных данных</Button>
        </span>

        <ul className={classes.footer__social}>
          <li className={classes['footer__social-item']}>
            <a className={classes.footer__link} href="/">
              <Inst />
            </a>
          </li>
          <li className={classes['footer__social-item']}>
            <a className={classes.footer__link} href="/">
              <FB />
            </a>
          </li>
          <li className={classes['footer__social-item']}>
            <a className={classes.footer__link} href="/">
              <VK />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default Footer;
