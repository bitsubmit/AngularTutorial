import { Component } from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <!-- <ng-component></ng-component>-->
    <router-outlet></router-outlet> 
    `
})

export class EventsAppComponent{

}