import { FC } from 'react';

import geralt from 'assets/images/avatars/geralt.jpg';
import geraltWebP from 'assets/images/avatars/geralt.webp';

const Cast: FC = () => (
  <section>
    <h2>Актерский состав</h2>

    <div>
      <button>Вперед</button>
      <button>Назад</button>
    </div>

    <article>
      <picture>
        <source srcSet={geraltWebP} type="image/webp" />
        <img alt="geralt" src={geralt} />
      </picture>

      <p>
        <span>Геральт</span>
        <span>Генри Кавилл</span>
      </p>
    </article>
  </section>
);

export default Cast;
