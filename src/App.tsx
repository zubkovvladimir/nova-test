import { FC } from 'react';

import { compose } from 'hocs/compose';
import { withProviders } from 'hocs/withProviders';

import { RenderRoute } from './routes';

const App: FC = () => <RenderRoute />;

export default compose(App, withProviders);
