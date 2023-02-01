/**
 * Checking if the environment is in development mode.
 */
export const isDev = process.env.NODE_ENV === 'development';

/**
 * Checking if the environment is in production mode.
 */
export const isProd = process.env.NODE_ENV === 'production';

/**
 * Checking if the environment is in test mode.
 */
export const isTest = process.env.NODE_ENV === 'test';
