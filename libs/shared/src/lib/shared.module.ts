import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { TimeConverationPipe } from './pipes/time-converation.pipe';
import { LoginComponent } from './component/login/login.component';
import { CommentsComponent } from './component/comments/comments.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

// to use this flex layout module you have to install some packages in your project
// "npm i @angular/flex-layout" this is the command used to install the flex layout package
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarPadDirective } from './directive/mar-pad.directive';
import { LastSeenPipe } from './pipes/last-seen.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatCommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTreeModule,
    MatTooltipModule,
    MatTableModule,
    MatStepperModule,
    MatSortModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  declarations: [
    TimeFormatPipe,
    TimeConverationPipe,
    LoginComponent,
    CommentsComponent,
    MarPadDirective,
    LastSeenPipe,
  ],
  exports: [
    LoginComponent,
    CommentsComponent,
    FormsModule,
    RouterModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatCommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTreeModule,
    MatTooltipModule,
    MatTableModule,
    MatStepperModule,
    MatSortModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
})
export class SharedModule {}
