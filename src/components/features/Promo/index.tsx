import { FC } from 'react';

import Cover from 'assets/images/promo.jpg';
import { Button } from 'components/shared/Button';

import classes from './Promo.module.scss';

const Promo: FC = () => (
  <section className={classes.promo}>
    <div>
      <h2 className="test">Сериал Ведьмак</h2>

      <p>
        Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном
        мире, где люди часто оказываются куда коварнее чудовищ.
      </p>

      <Button variant="primary">Смотреть сериал</Button>

      <img alt="Обложка" src={Cover} />
    </div>
  </section>
);

export default Promo;
