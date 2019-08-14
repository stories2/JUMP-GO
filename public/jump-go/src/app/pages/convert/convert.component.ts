import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  url: string;
  convertForm: FormGroup;
  shortURL: string;

  constructor(private fb: FormBuilder) {
    this.initForm();
   }

  ngOnInit() {
  }

  initForm() {
    this.convertForm = this.fb.group({
      url: ['', Validators.required]
    });
  }
}
