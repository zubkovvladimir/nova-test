import { FC } from 'react';

import { Container } from 'components/shared/Container';

import classes from './Map.module.scss';

const Map: FC = () => (
  <section className={classes.map}>
    <Container>
      <h2 className="title --mb-40">Магазины мерча ведьмака</h2>
    </Container>

    <div className={classes.map__wrapper} />
  </section>
);

export default Map;
