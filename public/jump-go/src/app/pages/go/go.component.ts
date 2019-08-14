import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  uid: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params.uid;
  }

}
