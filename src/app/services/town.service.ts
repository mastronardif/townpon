import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

class Book {

  login:string;
  id:number;
}

@Injectable()
export class TownService {
  public results;// = {};
  private headers = new Headers({'Content-Type': 'application/json'});
  private jsonApi = 'http://jsonplaceholder.typicode.com/posts';

  private hero = {"Data": [
    {
      "name": "foo",            
      "value": 112312
    },
      {
      "name": "Bar",
      "value": 122221
    }
  ]
  };
  constructor(private http: Http, private httpClient: HttpClient) { }

  public getCoupon(searchText: string): Observable<any> {
    console.log("searchGit: ", searchText);    
    searchText= "15300";
    //const url = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + searchText;
    const url = "http://www.thecocktaildb.com/api/json/v1/1/random.php";
      //const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";     
    //  const url = 'http://api.github.com/search/users?q=' + searchText;
    //const url = 'http://localhost:3000/pingcors?ass=wipe'; //http://localhost:4200/detail/11'; //'api/heroes';
    //const  url = 'http://date.jsontest.com/?service=ip'; //http://echo.jsontest.com/key/value/one/two';

      //console.log('here', url);

      return this.http.get(url).map(
        res => {
          let results =  {}; //[];//[{name: "Fred", value: 123123}];
        const data = res.json();        
        let items = [];
        if (res){
          //data.items.forEach(element => {
            data.drinks.forEach(element => {
            //let val = element.id;
            let val = element.idDrink.toString().substring(0, 6);            
            results = {name: element.strDrink, value: val, id: element.idDrink, thumb: element.strDrinkThumb};
          });
        }
        return results; //.slice(0, 21); //{lef:111, right: 222};//data;      
      });
      
    }

 
  public searchGitPromise(searchText: string): Promise<any> {
        // cheesy crap for the rest local api debacle.
        //let max = Math.max.apply(Math, HEROES.map(function(o){return o.id;}))
        //let idd = 0;
        //if (NaN !== max) {idd = max+1};
        let hero = {"Hero": [
          {
            "name": "foo",            
            "value": 112312
          },
            {
            "name": "foo",
            "value": 122221
          }
        ]
        };
    
        //let hero = {"value": 121212, "name":"wtf"};// as Hero;
        //HEROES.push(hero);
        //HEROES.push({id: idd, name: name});
    
        const url = this.jsonApi;
        return this.http
          //.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .post(url, hero)
          .toPromise()
          .then(res => res.json())
          //.then(res => ({"id": idd, "name": name} as Hero)
        //  .then(response => ({ "id": idd, "name": name } 
          //.then(res => res.json() as Hero)
          //.then(res => res.json().data as Hero)
          //.catch(this.handleError);
          .catch((res: Response) => this.handleErrorPromise);

  }

  public searchGitObservable2(searchText: string) : Observable<any> {
    const url = this.jsonApi;
    return this.http.post(url, this.hero).map(
      res => {
        let results =  [];
        results = res.json().Data;
        console.log('results = ', results);
        return results.slice(0, 21); //{lef:111, right: 222};//data;      
    });

  }

  public searchGit(searchText: string): Observable<any> {
    //const searchText = 'js';
    console.log("searchGit: ", searchText);
                
      //const url = 'http://api.github.com/search/users?q=' + searchText;
      const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
      
    //  const url = 'http://api.github.com/search/users?q=' + searchText;
    //const url = 'http://localhost:3000/pingcors?ass=wipe'; //http://localhost:4200/detail/11'; //'api/heroes';
    //const  url = 'http://date.jsontest.com/?service=ip'; //http://echo.jsontest.com/key/value/one/two';

      //console.log('here', url);

      return this.http.get(url).map(
        res => {
          let results =  [];//[{name: "Fred", value: 123123}];
        const data = res.json();        
        let items = [];
        if (res){
          //data.items.forEach(element => {
            data.drinks.forEach(element => {
            //let val = element.id;
            let val = element.idDrink.toString().substring(0, 6);            
            results.push({name: element.strDrink, value: val});
          });
        }
        //console.log(data);
        //console.log(`data =  ${JSON.stringify(data)}`);

        return results.slice(0, 21); //{lef:111, right: 222};//data;      
      });
      
    }

  public search(term: string) {
    let url = 'http://date.jsontest.com';//'http://localhost:3000/pingcors?left=right'; //'http://localhost:3000/ping?ass=ffff';//'http://localhost:4200/dashboard';
    this.httpClient.get(url).subscribe(data => {
      console.log('data = ', data);
      this.results = data; //JSON.stringify(data, null, '');
      console.log('results = ', this.results);
    });
  }

    private handleErrorPromise(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      alert("wtf2 error: " + JSON.stringify(error));      
      return Promise.reject(error.message || error);
    }
}
