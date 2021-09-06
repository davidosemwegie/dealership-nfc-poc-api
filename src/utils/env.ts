const isProduction = (): boolean => {
  return process.env.APP_ENV === 'production';
};

const isDevelopment = (): boolean => {
  return process.env.APP_ENV === 'development';
};

const isStaging = (): boolean => {
  return process.env.APP_ENV === 'development';
};

export { isDevelopment, isStaging, isProduction };
