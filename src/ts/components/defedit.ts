import {Component, Input, Output, EventEmitter} from 'angular2/angular2';
import {Def} from '../services/defstore';

@Component({
  selector: 'defedit',
  template: `
    <input
      name="title"
      class="title-input"
      [(value)]="def.title"
      type="text"
    />
    <textarea
      name="description"
      placeholder="Describe '{{def.title}}' here..."
      class="description-input"
      [rows]="getDescRows()"
      maxlength="1024"
      required
      [(value)]="def.description"
      (keyup.enter)="submitDef()"
    ></textarea>
    <div class="def_options">
        <span (click)="onCancelClick()">Cancel</span>
        <span (click)="submitDef()">Submit</span>
    </div>
  `
})
export class DefEdit {
  @Input() def: Def;
  @Output() cancelClick: EventEmitter<Def> = new EventEmitter<Def>();

  onCancelClick() {
    //noinspection TypeScriptUnresolvedFunction
    this.cancelClick.next(this.def);
  }

  getDescRows(): number {
    return 5;
  }

  submitDef() {
    console.log('def submitted');
  }
}
