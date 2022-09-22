import { FC } from 'react';

import { useTitle } from 'ahooks';
import Cast from 'components/features/Cast';
import Footage from 'components/features/Footage';
import Map from 'components/features/Map';
import Promo from 'components/features/Promo';
import { appName } from 'constants/app';

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
