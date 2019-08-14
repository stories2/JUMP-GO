import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { URLModel } from 'src/app/model/URLModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  convertForm: FormGroup;
  shortURL: string;
  data: URLModel;

  urlRef: AngularFirestoreCollection<URLModel>;

  constructor(private fb: FormBuilder, private af: AngularFirestore,
              private hc: HttpClient) {
    this.data = {} as URLModel;
    this.urlRef = this.af.collection<URLModel>('url');
    this.initForm();
   }

  ngOnInit() {
  }

  initForm() {
    this.convertForm = this.fb.group({
      url: ['', Validators.required]
    });
  }

  submitURL() {
    this.hc.get<{ip: string}>('https://jsonip.com')
      .subscribe(data => {
        this.data.entered = 0;
        this.data.reg_ip_address = data.ip;
        console.log('submitURL:', this.data);

        this.urlRef.add(this.data)
          .then(result => {
            console.log('result: ', result, result.id);
            this.shortURL = `https://jump-go.web.app/go/${result.id}`;
          })
          .catch(reason => {
            console.log('reason: ', reason);
          });
      });
  }
}
