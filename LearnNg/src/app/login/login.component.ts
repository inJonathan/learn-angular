import { Component, OnInit, Inject } from '@angular/core';

// [()] 符号是双向绑定的意思，就是说HTML对应控件的状态的改变会反射设置到组件的 model 中
// input增加了required属性，表示必填。
// input后面显式的渲染了验证的状态，当你在输入时就会反映出来，这就是双向数据绑定。
@Component({
  selector: 'app-login',
  template: `
    <div>
      <input required type="text"
        [(ngModel)]="username"
        #usernameRef="ngModel"
        />
        {{usernameRef.valid}}
      <input required type="password"
        [(ngModel)]="password"
        #passwordRef="ngModel"
        />
        {{passwordRef.valid}}
      <button (click)="onClick()">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  // 声明2个数据变量 username 和 password
  username = '';
  password = '';

  constructor(@Inject('auth') private service) {
  }

  ngOnInit() {
  }

  // 去掉 onClick 方法的参数，并将内部的语句改造成如下样子
  // 因为通过数据成员变量就可以知道用户名和密码了
  onClick() {
    console.log('auth result is: '
      + this.service.loginWithCredentials(this.username, this.password));
  }

}