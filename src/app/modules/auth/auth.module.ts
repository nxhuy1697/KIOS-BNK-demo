import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        LoginComponent

  ],
    imports: [CommonModule, AuthRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule],
    
  })

  export class AuthModule {}