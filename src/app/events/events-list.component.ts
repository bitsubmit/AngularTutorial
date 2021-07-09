import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared'

declare let toastr

@Component({
    // selector: 'events-list',
    // templateUrl: './events-list.component.html'
    template: `
    <div>
        <h1>Upcoming Angluar Events</h1>
        <hr />
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]
                ="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventListComponent implements OnInit {
    events: IEvent[]

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(event: string){
        
    }
}