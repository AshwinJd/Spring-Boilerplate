import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  userProfileSubmitForm;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
    this.userProfileSubmitForm = this.formBuilder.group({
      name: "",
      age: 0
    });
  }

  ngOnInit() {
  }

  onSubmit(userData) {
    // Process checkout data here
    // const url = "/userservice/api/v1/users";
    console.warn('User data that is getting saved::-', userData);
    this.http.post('/userservice/api/v1/users', userData).subscribe(data => console.log("Saved Info::", data));
    return;
  }
}
