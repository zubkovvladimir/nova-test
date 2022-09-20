import React, { FC } from 'react';

import classNames from 'classnames';

import classes from './Container.module.scss';

interface ContainerProps {
  modifier?: '--center-collumn-elements' | '--footer' | '--no-paddings';
}

export const Container: FC<ContainerProps> = ({ children, modifier }) => {
  const classNamesPair = classNames(classes.container, { [classes[modifier ?? '']]: modifier });

  return <div className={classNamesPair}>{children}</div>;
};
