import {Component} from 'angular2/angular2';
import {Header} from './header';
import {List} from './list';

@Component({
  selector: 'memry',
  template: `
    <memry-header></memry-header>
    <memry-list />
  `,
  directives: [Header, List]
})
export class AppComponent {

}
