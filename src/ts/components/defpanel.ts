import {Component, Input, NgIf} from 'angular2/angular2';
import {DefDisplay} from './defdisplay';
import {DefEdit} from './defedit';
import {Def} from '../services/defstore';

@Component({
  selector: 'memry-defpanel',
  template: `
    <article class="definition" id=def{{def.id}}>
      <defdisplay
        *ng-if="!isEditMode"
        [def] = "def"
        (editClick) = "toggleEditMode()"
      ></defdisplay>
      <defedit
        *ng-if="isEditMode"
        [def] = "def"
        (cancelClick)="toggleEditMode()"
      ></defedit>
    </article>
  `,
  directives: [NgIf, DefDisplay, DefEdit]
})
export class DefPanel {
  @Input() def: Def;
  isEditMode: boolean = false;

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
