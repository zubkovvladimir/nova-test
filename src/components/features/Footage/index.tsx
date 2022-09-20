import { FC } from 'react';

import geralt from 'assets/images/avatars/geralt.jpg';
import geraltWebP from 'assets/images/avatars/geralt.webp';
import { Button } from 'components/shared/Button';
import { Container } from 'components/shared/Container';

const Footage: FC = () => (
  <section>
    <Container>
      <h2>Кадры со съемок</h2>

      <Button>Показать еще</Button>
    </Container>
  </section>
);

export default Footage;
