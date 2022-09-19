import { FC } from 'react';

import HeaderLogo from 'assets/images/logo.png';
import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

import classes from './MainPage.module.scss';
import { Button } from 'components/shared/Button';

const Promo: FC = () => (
  <section>
    <div>
      <h2 className="test">Сериал Ведьмак</h2>

      <p>
        Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном
        мире, где люди часто оказываются куда коварнее чудовищ.
      </p>

      <Button>Смотреть сериал</Button>
    </div>
  </section>
);

export default Promo;
