import '../mock/exampleMock';
import utRequest from '../request/instance';

/**
 * @param {{ matchId: string }}
 * @returns {any}
 */
export const getExampleInfo = async ({ matchId } = {}) => {
  try {
    return await utRequest.post('/exampleApi', { matchId });
  } catch (e) {
    console.log('getMatchHeader error:', e);
    return null;
  }
};
