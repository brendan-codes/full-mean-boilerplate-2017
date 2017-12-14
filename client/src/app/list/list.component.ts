import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  notes;

  constructor(private _api: ApiService) { }

  // Our ListComponent subscribes to the BehaviorSubject, making it
  // an observer. We can subscribe to the notes even if there hasn't been
  // any data loaded into them. It also runs getAllNotes() to fetch the
  // notes from our DB. These can be run in either order, we can subscribe 
  // before or after we getAllNotes().
  ngOnInit() {
    this._api.notes.subscribe(
      (data) => { this.notes = data; }
    );
    this._api.getAllNotes();
  }

}
