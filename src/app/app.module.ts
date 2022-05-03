import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { PhoneMaskDirective } from './phone-mask.directive';
import { PasswordComponent } from './password/password.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {DateAdapter, MatNativeDateModule} from '@angular/material/core';
import {MaterialExampleModule} from '../app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import './../polyfills';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MaterialExampleModule, 
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatIconModule,
    NgbModule
    ],
  declarations: [
    AppComponent,
    RootComponent,
    PhoneMaskDirective,
    PasswordComponent,
    DatePickerComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
