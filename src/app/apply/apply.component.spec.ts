import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ApplyComponent } from './apply.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture } from '@angular/core/testing';
import { By } from 'protractor';
import { element } from '@angular/core/src/render3';
import { Element } from '@angular/compiler';

describe('AppComponent', () => {

  let component: ApplyComponent;
  let fixture: ComponentFixture<ApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule
      ],
      declarations: [
        ApplyComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ApplyComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    

  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.applyLeaveForm.valid).toBeFalsy();
  });

  it('form valid when filled', () => {
    component.applyLeaveForm.controls['Start_Date'].setValue('02-03-2019');
    component.applyLeaveForm.controls['End_Date'].setValue('02-05-2019');
    component.applyLeaveForm.controls['Number_Of_Days'].setValue('3');
    component.applyLeaveForm.controls['Leave_Type'].setValue('sick leave');
    component.applyLeaveForm.controls['Leave_Reason'].setValue('TEST');
    expect(component.applyLeaveForm.valid).toBeTruthy();
  });

  it('should send data on submit', () => {
  fixture.detectChanges();
  component.onSubmit();
  expect(component.applyLeaveForm.updateValueAndValidity).toBeTruthy();
  
    
  });
});