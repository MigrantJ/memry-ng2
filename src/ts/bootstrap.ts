import {bootstrap} from 'angular2/angular2';
import {AppComponent} from './components/app';
import {DefStore} from './services/defstore';

bootstrap(AppComponent, [DefStore]);
