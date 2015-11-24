import {Component, Input, Output, EventEmitter} from 'angular2/angular2';
import {Def} from '../services/defstore';

@Component({
  selector: 'defdisplay',
  template: `
    <span class="def-title">Def: {{def.title}}</span>
    <div
      class="def-description ellipsis"
      [inner-html]="def.description"
      (click)="onDescriptionClick($event.target)">
    </div>
    <div class="def_options">
      <span class="hover_only" (click)="onEditClick()">Edit</span>
      <span class="hover_only" (click)="onRemoveClick()">Remove</span>
    </div>
  `
})
export class DefDisplay {
  @Input() def: Def;
  @Output() editClick: EventEmitter<Def> = new EventEmitter<Def>();

  onEditClick() {
    //noinspection TypeScriptUnresolvedFunction
    this.editClick.next(this.def);
  }

  onRemoveClick() {
    console.log('remove');
  }

  onDescriptionClick(target: Element) {
    if (target.tagName === 'D') {
      console.log(target.attributes['l'].value);
    }
  }
}