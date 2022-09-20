import { FC } from 'react';

import geralt from 'assets/images/avatars/geralt.jpg';
import geraltWebP from 'assets/images/avatars/geralt.webp';
import { Container } from 'components/shared/Container';

const Cast: FC = () => (
  <section>
    <Container>
      <h2>Актерский состав</h2>

      <div>
        <button>Вперед</button>
        <button>Назад</button>
      </div>

      <article>
        <a href="/">
          <picture>
            <source srcSet={geraltWebP} type="image/webp" />
            <img alt="geralt" src={geralt} />
          </picture>

          <p>
            <span>Геральт</span>
            <span>Генри Кавилл</span>
          </p>
        </a>
      </article>
    </Container>
  </section>
);

export default Cast;
