import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

class Book {

  login:string;
  id:number;
}

@Injectable()
export class TownService {
  public results;// = {};

  constructor(private http: Http, private httpClient: HttpClient) { }
 

  public searchGit(searchText: string): Observable<any> {
    //const searchText = 'js';
    console.log(searchText);
                
      const url = 'http://api.github.com/search/users?q=' + searchText;
    //  const url = 'http://api.github.com/search/users?q=' + searchText;
    //const url = 'http://localhost:3000/pingcors?ass=wipe'; //http://localhost:4200/detail/11'; //'api/heroes';
    //const  url = 'http://date.jsontest.com/?service=ip'; //http://echo.jsontest.com/key/value/one/two';

      console.log('here', url);
      

      return this.http.get(url).map(
        res => {
          let results =  [];
        const data = res.json();        
        let items = [];
        if (res){
          data.items.forEach(element => {
            //let val = element.id;
            let val = element.id.toString().substring(0, 6);
            //val = val.substring(0, 6);
            results.push({name: element.login, value: val});
          });
        }
        //console.log(data);
        //console.log(`data =  ${JSON.stringify(data)}`);

        return results.slice(1, 11); //{lef:111, right: 222};//data;      
      })
      
    }

  public search(term: string) {
    let url = 'http://date.jsontest.com';//'http://localhost:3000/pingcors?left=right'; //'http://localhost:3000/ping?ass=ffff';//'http://localhost:4200/dashboard';
    this.httpClient.get(url).subscribe(data => {
      console.log('data = ', data);
      this.results = data; //JSON.stringify(data, null, '');
      console.log('results = ', this.results);
    });
    }

}
