import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import * as PostActions from './post.actions'
interface AppState {
  post: Post;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post$: Observable<Post>;
  text: string = '';

  constructor (private store: Store<AppState>) {
    this.post$ = this.store.select('post');
  }

  editText() {
    this.store.dispatch({type: PostActions.EDIT_TEXT, payload: this.text});
  }

  resetPost() {
   this.store.dispatch({type: PostActions.RESET});
  }

  upvote() {
    this.store.dispatch({type: PostActions.UPVOTE});
  }

  downvote() {
    this.store.dispatch({type: PostActions.DOWNVOTE});
  }

}
