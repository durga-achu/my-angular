import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { FindComponent } from './find/find.component';
import { CreateComponent } from './create/create.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataComponent } from './data/data.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { ShowComponent } from './show/show.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FindComponent,
    CreateComponent,
    FormComponent,
    DataComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
  
    MatInputModule,
    MatRadioModule,
    FormsModule
   
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
