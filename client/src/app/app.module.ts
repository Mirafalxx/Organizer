import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { SelectorComponent } from "./selector/selector.component";
import { OrganizerComponent } from "./organizer/organizer.component";
import { MomentPipe } from "./shared/moment.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegistrationComponent } from "./registration/registration.component";
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MyDialogComponent } from "./my-dialog/my-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe,
    RegistrationComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [MyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
