import { FC } from 'react';

import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

import classes from './MainPage.module.scss';

const MainPage: FC = () => {
  useTitle(`${appName} | Вход в кабинет`);

  return <div>dsds</div>;
};

export default MainPage;
