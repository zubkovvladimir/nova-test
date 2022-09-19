import { FC } from 'react';

import Cover from 'assets/images/promo.jpg';
import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

import classes from './Promo.module.scss';
import { Button } from 'components/shared/Button';

const Promo: FC = () => (
  <section className={classes.promo}>
    <div>
      <h2 className="test">Сериал Ведьмак</h2>

      <p>
        Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном
        мире, где люди часто оказываются куда коварнее чудовищ.
      </p>

      <Button>Смотреть сериал</Button>

      <img src={Cover} alt="Обложка" />
    </div>
  </section>
);

export default Promo;
