import { FC } from 'react';

import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

import classes from './MainPage.module.scss';
import Header from 'components/shared/Header';
import Promo from 'components/features/Promo';
import Cast from 'components/features/Cast';
import Footage from 'components/features/Footage';
import Map from 'components/features/Map';

const MainPage: FC = () => {
  useTitle(`${appName} | Главная`);

  return (
    <main>
      <h1 className="visually-hidden">
        Ведьмак — мистический сериал, вышедший на телеканале Netflix, по циклу романов польского писателя.
      </h1>

      <Promo />
      <Cast />
      <Footage />
      <Map />
    </main>
  );
};

export default MainPage;
