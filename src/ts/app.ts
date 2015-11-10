import {Component, bootstrap} from 'angular2/angular2';
import {Header} from './components/header';
import {List} from './components/list';

@Component({
  selector: 'memry',
  template: `
    <memry-header></memry-header>
    <memry-list></memry-list>
  `,
  directives: [Header, List]
})
class AppComponent {

}

bootstrap(AppComponent);
