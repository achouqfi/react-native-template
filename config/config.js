const packageJSON = require('../package.json');

// default values
const APP_ENV = process.env.APP_ENV ?? 'development';
const SCHEME = 'com.my-app';
const APP_NAME = 'react_native_starter';

const development = {
  APP_ENV: 'development',
  name: APP_NAME,
  scheme: `${SCHEME}.development`,
  icon: './assets/icon.development.png',
  foregroundImage: './assets/icon.development.png',
  API_URL: 'https://dummyjson.com/',
  version: packageJSON.version,
};

const staging = {
  APP_ENV: 'staging',
  name: APP_NAME,
  scheme: `${SCHEME}.staging`,
  icon: './assets/icon.staging.png',
  foregroundImage: './assets/icon.staging.png',
  API_URL: 'https://dummyjson.com/',
  version: packageJSON.version,
};
const production = {
  APP_ENV: 'production',
  name: APP_NAME,
  scheme: `${SCHEME}`,
  icon: './assets/icon.png',
  foregroundImage: './assets/icon.png',
  API_URL: 'https://dummyjson.com/',
  version: packageJSON.version,
};

const configs = {development, staging, production};

const Config = configs[APP_ENV];
module.exports = {Config};
