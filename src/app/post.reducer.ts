import * as PostActions from './post.actions';
import { Actions } from './post.actions';
import { Post } from './post.model';

export const defaultState = {
  text: 'Hello, I am the default post',
  likes: 0
}

export function postReducer(state = defaultState, action: Actions) : Post {

  switch(action.type) {
    case PostActions.EDIT_TEXT: {
      return {...state, text: (<PostActions.EditText>action).payload };
    }
    case PostActions.UPVOTE: return {...state, likes: state.likes + 1};
    case PostActions.DOWNVOTE: return {...state, likes: state.likes - 1};
    case PostActions.RESET: return defaultState ;
    default: return defaultState;
  }
}
