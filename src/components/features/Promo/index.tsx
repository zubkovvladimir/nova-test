import { FC } from 'react';

import { Button } from 'components/shared/Button';
import { Container } from 'components/shared/Container';

import classes from './Promo.module.scss';

const Promo: FC = () => (
  <section className={classes.promo}>
    <div className={classes.promo__filter} />

    <Container>
      <div className={classes.promo__inner}>
        <div className={classes.promo__info}>
          <h2 className={classes.promo__title}>Сериал Ведьмак</h2>

          <p className={classes.promo__description}>
            Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в
            неспокойном мире, где люди часто оказываются куда коварнее чудовищ.
          </p>

          <Button size="normal" variant="primary">
            Смотреть сериал
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Promo;
