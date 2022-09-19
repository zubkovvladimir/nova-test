import { FC } from 'react';

import geralt from 'assets/images/avatars/geralt.jpg';
import geraltWebP from 'assets/images/avatars/geralt.webp';
import { Button } from 'components/shared/Button';

const Footage: FC = () => (
  <section>
    <h2>Кадры со съемок</h2>

    <Button>Показать еще</Button>
  </section>
);

export default Footage;
