import { ACTIONS } from 'providers/authProvider/actions';

export const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case ACTIONS.SHOW_SPLASH:
      return { ...state, isLoading: true };
    case ACTIONS.HIDE_SPLASH:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
