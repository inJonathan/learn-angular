import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms'; // 添加@angular/forms模块

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { AuthService } from './core/auth.service'; // 导入要注入的service

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // 导入FormsModule
  ],
  providers: [
    { provide: 'auth', useClass: AuthService } // 在全局声明一个叫 auth 的依赖注入
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
