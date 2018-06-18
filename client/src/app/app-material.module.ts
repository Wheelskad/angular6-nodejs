import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatRadioModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatTooltipModule,
  MatExpansionModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatPaginatorModule
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';

@NgModule({
  imports: [
    CommonModule,

    // CDK
    A11yModule,
    BidiModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    LayoutModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class AppMaterialModule {}
