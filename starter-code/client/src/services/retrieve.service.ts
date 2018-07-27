import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

interface Pepe {
  title: String;
  content: String;
  date: Date;
}

@Injectable({
  providedIn: "root"
})
export class RetrieveService {
  aux: any;
  pepeList: Array<Pepe>;

  constructor(public http: Http) {}

  getPepeList() {
    this.http
      .get('http://localhost:3000/api/journal-entries')
      .pipe(map(res => {
        res.json()}))
      .subscribe();
  }

}
