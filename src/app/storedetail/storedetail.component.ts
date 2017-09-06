import { Component, OnInit } from '@angular/core';
//import { Location } from '@angular/common';
import { Router }      from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-storedetail',
  templateUrl: './storedetail.component.html',
  styleUrls: ['./storedetail.component.css']
})
export class StoredetailComponent implements OnInit {
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description: string = '';
  name: string = '';
  storecode: string = "";
  coupon: string = "";
  //secret:string = '';
  titleAlert:string = 'This field is required';

  constructor(private router: Router, private fb: FormBuilder) { 
    this.rForm = fb.group({
      'storecode' : [null, Validators.required],
      'coupon' : [null, Validators.required],

      'name': [null, Validators.required],

      'description': [null, Validators.compose([Validators.required, 
        Validators.minLength(10), Validators.maxLength(500)])],
      'validate' : ''
    });
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
    console.log(post);
  }

  goHome(): void {
    //this.location.back();
    //let home = ['/'];
    
    //this.router.navigateByUrl("/charttwo");
    this.router.navigateByUrl('/');
    //this.router.navigate(home, { replaceUrl: false, skipLocationChange: true });    
  }

  // save(): void {
  //   this.heroService.update(this.hero)
  //     .then(() => this.goBack());
//}

}
