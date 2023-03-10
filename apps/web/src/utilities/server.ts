/**
 * It's checking if the window object is undefined.
 * If it is, then we're on the server.
 */
export const isServer = typeof window === 'undefined';
