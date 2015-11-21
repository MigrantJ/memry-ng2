import {Component, Input} from 'angular2/angular2';
import {Def} from '../services/defstore';

@Component({
  selector: 'memry-defpanel',
  template: `
    <span class="def-title">Def: {{def.title}}</span>
    <div class="def-description" [inner-html]="def.description" (click)="descriptionClick($event.target)"></div>
    <div class="def_options">
      <span class="hover_only" (click)="turnOnEditMode()">Edit</span>
      <span class="hover_only" (click)="removeDef()">Remove</span>
    </div>
  `,
  directives: []
})
export class DefPanel {
  @Input() def: Def;

  descriptionClick(target: Element) {
    if (target.tagName === 'D') {
      console.log(target.attributes['l'].value);
    }
  }
}
