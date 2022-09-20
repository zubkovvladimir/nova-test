import { FC } from 'react';

import geralt from 'assets/images/avatars/geralt.jpg';
import geraltWebP from 'assets/images/avatars/geralt.webp';
import { Container } from 'components/shared/Container';

import classes from './Cast.module.scss';

const Cast: FC = () => (
  <section>
    <Container>
      <div className={classes.cast__top}>
        <h2 className="title --mb-24">Актерский состав</h2>

        <div>
          <button>Вперед</button>
          <button>Назад</button>
        </div>
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
