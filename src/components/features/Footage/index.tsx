import { FC } from 'react';

import geralt from 'assets/images/footage/Photo 1.jpg';
import classNames from 'classnames';
import { Button } from 'components/shared/Button';
import { Container } from 'components/shared/Container';

import classes from './Footage.module.scss';

const Footage: FC = () => (
  <section className={classes.footage}>
    <Container>
      <h2 className={classNames('title', classes.footage__title)}>Кадры со съемок</h2>

      <div className={classes.footage__gallery}>
        <img alt="geralt" className={classes['footage__first-img']} src={geralt} />
        <img alt="geralt" className={classes.footage__img} src={geralt} />
        <img alt="geralt" className={classes.footage__img} src={geralt} />
        <img alt="geralt" className={classes.footage__img} src={geralt} />
        <img alt="geralt" className={classes.footage__img} src={geralt} />
      </div>

      <Button fullWidth size="normal" variant="outlined">
        Показать еще
      </Button>
    </Container>
  </section>
);

export default Footage;
