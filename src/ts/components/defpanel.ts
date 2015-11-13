import {Component, Input} from 'angular2/angular2';
import {Def} from '../services/defstore';

@Component({
  selector: 'memry-defpanel',
  template: `
    <span class="def-title">Def: {{def.title}}</span>
    <div class="def-description">
      <span>{{def.description}}</span>
    </div>
    <div class="def_options">
      <span class="hover_only" (click)="turnOnEditMode()">Edit</span>
      <span class="hover_only" (click)="removeDef()">Remove</span>
    </div>
  `,
  directives: []
})
export class DefPanel {
  @Input() def: Def;
}
