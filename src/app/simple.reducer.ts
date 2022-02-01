import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'hello world', action: Action) {
  console.log(action.type, state);

  switch(action.type) {
    case 'SPANISH':
      return state = 'hola mundo'
    case 'FRENCH':
      return state = 'bonjour le monde'
    default:
      return state;
  }
}
