import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'constants/routes';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return <div>Запрашиваемая страница не найдена</div>;
};

export default NotFoundPage;
