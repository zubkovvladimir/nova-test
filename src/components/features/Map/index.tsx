import { FC } from 'react';

import geraltWebP from 'assets/images/avatars/geralt.webp';
import map from 'assets/images/map.png';
import { Button } from 'components/shared/Button';

const Map: FC = () => (
  <section>
    <h2>Магазины мерча ведьмака</h2>

    <img alt="Карта" src={map} />
  </section>
);

export default Map;
