import '../mock/exampleMock';
import utRequest from '../request/instance';

/**
 * @param {{ matchId: string }}
 * @returns {any}
 */
export const getExampleInfo = async ({ id } = {}) => {
  try {
    return await utRequest.post('/exampleApi', { id });
  } catch (e) {
    console.log('getExampleInfo error:', e);
    return null;
  }
};
