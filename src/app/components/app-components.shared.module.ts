import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { StyleguideSpecimenComponent } from './shared/styleguide-specimen/styleguide-specimen.component';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatFormFieldModule } from '@angular/material/form-field';
/*
  This module is imported by the generated app-components.module.ts.
  You can use this module to provide shared Angular components that are not
  JSS components, etc to the generated module.

  Don't want code generation? See ./.gitignore for instructions to turn it off.
*/
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    JssModule,
    FormsModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
   // MatFormFieldModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    StyleguideSpecimenComponent
  ],
  declarations: [
    StyleguideSpecimenComponent
  ],
})
export class AppComponentsSharedModule { }
