import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLModel } from 'src/app/model/URLModel';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  uid: string;
  data: URLModel;

  urlRef: AngularFirestoreCollection<URLModel>;

  constructor(private route: ActivatedRoute, private af: AngularFirestore) {
    this.data = {} as URLModel;
    this.urlRef = this.af.collection<URLModel>('url');
   }

  ngOnInit() {
    this.uid = this.route.snapshot.params.uid;
    this.getOriginalURL();
  }

  getOriginalURL() {
    this.urlRef.doc(this.uid).ref.get()
      .then(doc => {
        const data = doc.data();
        this.data = {
          url: data.url
        } as URLModel;
        console.log('doc: ', data);

        window.location.href = this.data.url;
      })
      .catch(reason => {
        console.log('reason: ', reason);
      });
  }
}
