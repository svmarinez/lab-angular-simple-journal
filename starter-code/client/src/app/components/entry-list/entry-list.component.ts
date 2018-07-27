import { Component, OnInit } from '@angular/core';
import { RetrieveService } from 'services/retrieve.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor( public pepe: RetrieveService, public master: any) { }

  ngOnInit() {
    console.log(this.pepe.getPepeList())

  }

}
