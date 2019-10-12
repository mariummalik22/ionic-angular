import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  profileForm = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    lastName: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('',[
      Validators.email
    ]),
  });
  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
