import * as Sentry from '@sentry/browser';

import config from 'config';
import { PRODUCTION } from 'constants/env';

export const initSentry = () => {
  if (config.env === PRODUCTION) {
    Sentry.init({ dsn: config.sentryDSN });
  }
};

export const catchErrorsWithScope = (error, errorInfo) => {
  if (config.env === PRODUCTION) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }
};
