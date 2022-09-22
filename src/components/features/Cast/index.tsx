import { FC, useState } from 'react';

import ciri from 'assets/images/avatars/ciri.jpg';
import ciriWebP from 'assets/images/avatars/ciri.webp';
import emgir from 'assets/images/avatars/emgir.jpg';
import emgirWebP from 'assets/images/avatars/emgir.webp';
import enifer from 'assets/images/avatars/enifer.jpg';
import eniferWebP from 'assets/images/avatars/enifer.webp';
import geralt from 'assets/images/avatars/geralt.jpg';
import geraltWebP from 'assets/images/avatars/geralt.webp';
import lutik from 'assets/images/avatars/lutik.jpg';
import lutiktWebP from 'assets/images/avatars/lutik.webp';
import { ReactComponent as ArrowLeft } from 'assets/images/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/images/icons/arrow-right.svg';
import { Button } from 'components/shared/Button';
import { Container } from 'components/shared/Container';
import { swiperConfigBreakpoints } from 'constants/swiper';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './Cast.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import classNames from 'classnames';

const Cast: FC = () => {
  const [progress, setProgress] = useState<string>();

  const getProgress = (index: number, amount: number): string => {
    const progress = (50 / amount) * (index + 1) + 50;

    return `${progress > 100 ? 100 : progress}%`;
  };

  return (
    <section>
      <div className={classes['cast__swiper-shade']}>
        <Container>
          <div className={classes.cast__top}>
            <div className={classes.cast__wrap}>
              <h2 className="title --mb-24">Актерский состав</h2>

              <div className={classNames(classes.cast__controls)}>
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </div>
            </div>

            <div className={classes.cast__progress}>
              <div className={classes.cast__line} style={{ width: progress }} />
              <div className={classes.cast__fill} />
            </div>
          </div>

          <ul className={classes.cast__list}>
            <Swiper
              breakpoints={swiperConfigBreakpoints}
              modules={[Navigation]}
              navigation={{ nextEl: '.swiper-button-prev', prevEl: '.swiper-button-next' }}
              // @ts-ignore
              onSlideChange={({ realIndex, params, imagesLoaded }) => {
                if (typeof params.slidesPerView === 'number') {
                  return setProgress(getProgress(realIndex, imagesLoaded - Math.floor(params.slidesPerView)));
                }

                return 0;
              }}
              spaceBetween={24}
            >
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={geraltWebP} type="image/webp" />
                        <img alt="geralt" className={classes.cast__img} src={geralt} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Геральт</span>
                        <span>Генри Кавилл</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={lutiktWebP} type="image/webp" />
                        <img alt="lutik" className={classes.cast__img} src={lutik} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Лютик</span>
                        <span>Джои Бэти</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={eniferWebP} type="image/webp" />
                        <img alt="geralt" className={classes.cast__img} src={enifer} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Йеннифэр</span>
                        <span>Аня Чалотра</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={ciriWebP} type="image/webp" />
                        <img alt="geralt" className={classes.cast__img} src={ciri} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Цири</span>
                        <span>Фрейя Аллан</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={emgirWebP} type="image/webp" />
                        <img alt="geralt" className={classes.cast__img} src={emgir} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Эмгыр вар Эмрейс</span>
                        <span>Барт Эдвардс</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={geraltWebP} type="image/webp" />
                        <img alt="geralt" className={classes.cast__img} src={geralt} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Геральт</span>
                        <span>Генри Кавилл</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={geraltWebP} type="image/webp" />
                        <img alt="geralt" className={classes.cast__img} src={geralt} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Геральт</span>
                        <span>Генри Кавилл</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={geraltWebP} type="image/webp" />
                        <img alt="geralt" className={classes.cast__img} src={geralt} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Геральт</span>
                        <span>Генри Кавилл</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <a href="">
                    <article>
                      <picture className={classes.cast__picture}>
                        <source srcSet={geraltWebP} type="image/webp" />
                        <img alt="geralt" className={classes.cast__img} src={geralt} />
                      </picture>

                      <p className={classes.cast__actor}>
                        <span>Геральт</span>
                        <span>Генри Кавилл</span>
                      </p>
                    </article>
                  </a>
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default Cast;
