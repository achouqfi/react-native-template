import { Config as NConfig } from './config.js';

// TODO: check how we can use typescript for this
type APP_ENV_Type = 'development' | 'staging' | 'production';
type ConfigType = {
  scheme: string;
  icon: string;
  foregroundImage: string;
  APP_ENV: APP_ENV_Type;
  API_URL: string;
  version: string;
  name: string;
};
const Config = NConfig as ConfigType;

export default Config;