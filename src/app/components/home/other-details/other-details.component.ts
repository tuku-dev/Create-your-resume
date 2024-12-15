import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';

@Component({
  selector: 'other-details',
  imports: [HttpClientModule, AngularEditorModule],
  templateUrl: './other-details.component.html',
  styleUrl: './other-details.component.css',
})
export class OtherDetailsComponent {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '300px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      // { class: 'arial', name: 'Arial' },
      // { class: 'times-new-roman', name: 'Times New Roman' },
      // { class: 'calibri', name: 'Calibri' },
      // { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      // {
      //   name: 'quote',
      //   class: 'quote',
      // },
      // {
      //   name: 'redText',
      //   class: 'redText',
      // },
      // {
      //   name: 'titleText',
      //   class: 'titleText',
      //   tag: 'h1',
      // },
    ],
  };
}
