import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(postData:{firstname: String; number2: number } )
  {
    this.http.post(
      'https://ng-project-complete.firebaseio.com/posts.json' ,postData
    ).subscribe(responseData =>{
      console.log(responseData);
    })
  }

}
