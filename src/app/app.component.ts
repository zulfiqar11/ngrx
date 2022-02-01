import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import * as PostActions from './post.actions'

// interface AppState {
//   message: string;
// }

interface AppState {
  post: Post;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxfire';
  // message$: Observable<string> | undefined;
  post: Observable<Post>;
  text: string = '';

  constructor (private store: Store<AppState>) {
    // this.message$ = this.store.select('message');
    this.post = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote);
  }

  downvote() {
    this.store.dispatch(new PostActions.DownVote);
  }


  // spanishMessage() {
  //   this.store.dispatch({type: 'SPANISH'})
  // }
  // frenchMessage() {
  //   this.store.dispatch({type: 'FRENCH'})
  // }
}
