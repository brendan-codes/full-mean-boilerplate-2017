import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

// ===== API SERVICE =====
// =======================
// This is where we can share data across our Angular App,
// the Service acts as a Singleton, which means it gets created
// only once in Angular's life cycle. We can use our service as
// a session alternative.

@Injectable()
export class ApiService {

  notes = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  // getAllNotes runs the line `this.notes.next`, which pings all the observers watching
  // our behavior subject. `.next` also takes a value and updates it.
  getAllNotes() {
    this._http.get('/all').subscribe(
      (response: any[]) => {
        this.notes.next(response);
      }
    );
  }

  // newNote sends a new note to the database, but also calls the getAllNotes() method
  // from above. This way, any time we create a note, we go and get them all again.
  newNote(note) {
    this._http.post('/new', note).subscribe(
      (response: any[]) => {
        this.getAllNotes();
       }
    );
  }

  // We can also return Observables back to the component for a simple data solution
  // newNoteAlt(note) {
  //   return this._http.post('/new', note);
  // }

}
