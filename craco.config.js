// READ THE ARTICLE HERE: https://raviolicode.hashnode.dev/how-to-load-custom-env-variables-in-webpack-with-craco

const path = require('path');
const DotEnv = require('dotenv');
const webpack = require('webpack');
const alias = require('./src/Config/aliases');

const aliases = alias('./src');

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ]),
);

// You need to have an .env file for each defined DEPLOY_ENV
// The .env file naming convention is .env.[DEPLOY_ENV]
// DO NOT PUT SECRETS in the .env files on the FE
const ENV = process.env.DEPLOY_ENV || 'dev';

const result = DotEnv.config({ path: `./.env.${ENV}` });

if (result.error) {
  throw result.error;
}

const env = DotEnv.config({ path: `./.env.${ENV}` }).parsed;
const envLocal = DotEnv.config({ path: './.env.local' }).parsed || {};

const envKeys = Object.keys(env).reduce((prev, next) => {
  // .env.local variables have priority over other .env files
  prev[`process.env.${next.trim()}`] = (envLocal[next]) ? JSON.stringify(envLocal[next].trim()) : JSON.stringify(env[next].trim());

  return prev;
}, {});

// eslint-disable-next-line no-console
console.log(`We are in the ${ENV.toLocaleUpperCase()} mode`, process.env.REACT_APP_DEPLOY_ENV);
// eslint-disable-next-line no-console
console.log('The following configuration will be used:', envKeys);

module.exports = {
  eslint: {
    enable: true,
  },
  webpack: {
    alias: resolvedAliases,
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ],
  },
};
