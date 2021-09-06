import pino from 'pino';

import { isDevelopment } from '.';

const logger = pino({ prettyPrint: isDevelopment() });

export { logger };
