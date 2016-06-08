import { createAction } from 'redux-actions';

export const CREATE_SHORTLINK = 'CREATE_SHORTLINK';
export const ADD_LINK_INFO = 'ADD_LINK_INFO';

export const addLinkInfo = createAction(ADD_LINK_INFO);

export function createShortlink(initialLink, tags, description) {
  return {
    type: CREATE_SHORTLINK,
    payload: {
      url: '/links',
      method: 'post',
      body: { initialLink, tags, description },
    },
  };
}