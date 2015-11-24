import {Component, Input, NgIf} from 'angular2/angular2';
import {DefDisplay} from './defdisplay';
import {Def} from '../services/defstore';

@Component({
  selector: 'memry-defpanel',
  template: `
    <article class="definition" id=def{{def.id}}>
      <defdisplay
        *ng-if="!isEditMode"
        [def] = "def"
        (toggle) = "toggleEditMode()"
      />
      <div *ng-if="isEditMode" (dblclick)="turnOffEditMode()">
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
            <span (click)="turnOffEditMode()">Cancel</span>
            <span (click)="submitDef()">Submit</span>
        </div>
      </div>
    </article>
  `,
  directives: [NgIf, DefDisplay]
})
export class DefPanel {
  @Input() def: Def;
  isEditMode: boolean = false;

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  getDescRows(): number {
    return 5;
  }

  submitDef() {
    console.log('def submitted');
  }
}
