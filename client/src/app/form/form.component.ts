import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  note = {
    author: '',
    body: ''
  };

  constructor(private _api: ApiService) { }

  ngOnInit() {
  }

  // Creating a note also updates all the notes. Remember, this Component is not sharing any
  // data directly with the app.component or the list.component. All the data is moving through
  // the service.
  createNote() {
    this._api.newNote(this.note);
    this.note = { author: '', body: '' };
  }


  // If we needed to quickly bring data into a single component, we can subscribe
  // from the component level and get access to the http_response directly.
  // createNoteAlt(note) {
  //   this._api.newNoteAlt(note).subscribe(
  //     (http_response) => { this.data = http_response; }
  //   );
  // }

}
