import { FC, ReactElement, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function withProviders<T = any>(Component: FC<T>) {
  return (props: T): ReactElement => (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Component {...props} />
      </Suspense>
    </BrowserRouter>
  );
}
