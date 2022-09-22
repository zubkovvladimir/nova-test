import { FC, useState } from 'react';

import geralt from 'assets/images/avatars/geralt.jpg';
import geraltWebP from 'assets/images/avatars/geralt.webp';
import classNames from 'classnames';
import { Container } from 'components/shared/Container';
import { swiperConfigBreakpoints } from 'constants/swiper';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './Cast.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';

const Cast: FC = () => {
  const [progress, setProgress] = useState<string>();

  const getProgress = (index: number, amount: number): string => {
    const progress = (50 / amount) * (index === 0 ? 0 : index + 1) + 50;

    return `${progress > 100 ? 100 : progress}%`;
  };

  return (
    <section className={classes.cast}>
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
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className={classes['cast__list-item']}>
                  <article className={classes['cast__article']}>
                    <picture className={classes.cast__picture}>
                      <source srcSet={geraltWebP} type="image/webp" />
                      <img alt="geralt" className={classes.cast__img} src={geralt} />
                    </picture>

                    <p className={classes.cast__actor}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>
                  </article>
                  <div className={classes.cast__shade}>
                    <p className={classes['cast__actor-shade']}>
                      <span>Геральт</span>
                      <span className={classes.cast__name}>Генри Кавилл</span>
                    </p>

                    <p className={classes.cast__desc}>
                      Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и
                      бабник
                    </p>
                  </div>
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
