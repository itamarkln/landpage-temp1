import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from "../../services/contact.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  err: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onFormSubmit() {
    this.err = '';
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    this.contactService.sendEmail({
      fullname: this.f.fullname.value,
      email: this.f.email.value,
      subject: this.f.subject.value,
      message: this.f.message.value,
    })
    .subscribe(res => {
      this.loading = false;
      if (res.success) {
        alert(res.message);
      } else {
        this.err = res.message;
      }
    }, err => {
      this.err = err;
      this.loading = false;
    });
  }
}
