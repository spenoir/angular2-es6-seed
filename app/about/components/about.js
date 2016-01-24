import { Component, Inject } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'about',
  templateUrl: './app/about/components/about.html',
  directives: [ FORM_DIRECTIVES, CORE_DIRECTIVES ]
})
export class AboutCmp {
  newName: string;
  constructor(@Inject(NameList) list) {
    this.list = list;
  }
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(): boolean {
    this.list.add(this.newName);
    this.newName = '';
    return false;
  }
}
