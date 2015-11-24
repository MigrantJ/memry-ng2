import {Component, Input, Output, EventEmitter} from 'angular2/angular2';
import {Def} from '../services/defstore';

@Component({
  selector: 'defdisplay',
  template: `
    <span class="def-title">Def: {{def.title}}</span>
    <div
      class="def-description ellipsis"
      [inner-html]="def.description"
      (click)="descriptionClick($event.target)">
    </div>
    <div class="def_options">
      <span class="hover_only" (click)="toggle()">Edit</span>
      <span class="hover_only" (click)="removeDef()">Remove</span>
    </div>
  `
})
export class DefDisplay {
  @Input() def: Def;
  @Output() toggle = new EventEmitter();

  descriptionClick(target: Element) {
    if (target.tagName === 'D') {
      console.log(target.attributes['l'].value);
    }
  }
}