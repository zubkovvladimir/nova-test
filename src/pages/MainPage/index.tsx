import { FC } from 'react';

import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

import classes from './MainPage.module.scss';
import Header from 'components/shared/Header';

const MainPage: FC = () => {
  useTitle(`${appName} | Главная`);

  return <div>main page</div>;
};

export default MainPage;
