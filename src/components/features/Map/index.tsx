import { FC } from 'react';

import geraltWebP from 'assets/images/avatars/geralt.webp';
import map from 'assets/images/map.png';
import { Button } from 'components/shared/Button';
import { Container } from 'components/shared/Container';

const Map: FC = () => (
  <section>
    <Container>
      <h2>Магазины мерча ведьмака</h2>

      <img alt="Карта" src={map} />
    </Container>
  </section>
);

export default Map;
