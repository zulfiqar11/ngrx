import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class EditText implements Action {
  type = EDIT_TEXT;
  constructor(public payload: string) {}
}

export class Upvote implements Action {
  type = UPVOTE;
}

export class DownVote implements Action {
  type = DOWNVOTE;
}

export class Reset implements Action {
   type = RESET;
}

export type Actions = EditText | Upvote | DownVote | Reset;
