import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contactForm = this.fb.group({
    firstName: ["",[Validators.required]],
    secondName: ["", [Validators.required]],
    email: ["",[Validators.required,Validators.email]]
  })

  sendMessage(): void{
    
  }

  ngOnInit(): void {
  }

}
