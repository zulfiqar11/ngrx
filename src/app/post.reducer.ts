import * as PostActions from './post.actions';
import { Actions } from './post.actions';

export const defaultState = {
  text: 'Hello, I am the default post',
  likes: 0
}

export function postReducer(state = defaultState, action: Actions) {
  console.log(action.type, state, action);

  switch(action.type) {
    case PostActions.EDIT_TEXT: {
      let message = '';
      if (action.hasOwnProperty('payload')) {
        message = (<PostActions.EditText>action).payload;
      }
      return {...state, text: message };
    }
    case PostActions.UPVOTE: return {...state, likes: state.likes + 1};
    case PostActions.DOWNVOTE: return {...state, likes: state.likes - 1};
    case PostActions.RESET: return {... state, text: defaultState.text, likes: defaultState.likes} ;
    default: return defaultState;
  }
}
