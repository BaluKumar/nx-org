import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommentsComponent, LoginComponent, TimeConverationPipe, TimeFormatPipe } from '@org/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LastSeenPipe } from 'libs/shared/src/lib/pipes/last-seen.pipe';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent, 
        NxWelcomeComponent,
        LoginComponent,
        CommentsComponent,
        TimeFormatPipe,
        TimeConverationPipe,
        LastSeenPipe
      ],
    }).compileComponents();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Welcome admin-portal'
  //   );
  // });

  it(`should have as title 'admin-portal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('admin-portal');
  });
});
