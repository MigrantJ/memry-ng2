import {Component, Input, NgIf} from 'angular2/angular2';
import {DefDisplay} from './defdisplay';
import {DefEdit} from './defedit';
import {Def} from '../services/defstore';

@Component({
  selector: 'memry-defpanel',
  template: `
    <article
      class="definition"
      [class.definition_hover]="isMouseOver"
      id=def{{def.id}}
      (mouseover)="isMouseOver = true"
      (mouseout)="isMouseOver = false"
    >
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
  isMouseOver: boolean;

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
