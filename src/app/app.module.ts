import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { JQ_TOKEN, ModalTriggerDirective } from './common/index';
import {
  EventListComponent, EventThumbnailComponent,
  EventService, EventDetailsComponent, CreateEventComponent,
  EventRouteActivator, EventListResolver, CreateSessionComponent,
  SessionListComponent, DurationPipe, UpvoteComponent, VoterService
} from './events/index'
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { AppComponent } from './app.component';
import { EventsAppComponent } from './events-app.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleModalComponent } from './common/index';

let toastr: Toastr = window['toaster'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    EventDetailsComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    {
      provide: EventRouteActivator,
      useClass: EventRouteActivator
    },
    EventListResolver, VoterService, EventRouteActivator, AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel')
  return true
}
