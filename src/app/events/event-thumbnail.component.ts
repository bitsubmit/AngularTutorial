import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{ event?.name }}</h2>
        <div>Date: {{ event?.date }} </div>
        <div>Time: {{ event?.time }}</div>
        <div>Price: \${{ event?.price }}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
            <span *ngSwitchCase="'8:00 am'">Early start</span>
            <span *ngSwitchCase="'10:00 am'">Late start</span>
            <span *ngSwitchDefault>Normal start</span>
        </div>
        <div [hidden]="!event?.location">
            <span>Location: {{ event?.location?.address }} </span>
            <span class="pad-left"> {{ event?.location?.city }}, {{ event?.location?.country }}</span>
        </div>
    </div>
    `,
    styles: [`
        .green { 
            color: #003300!important; 
        }
        .bold { 
            font-weight: bold;
        }
        .pad-left { 
            margin-left:10px; 
        }
        .well div {
            color: #bbb; 
        }
        .thumbnail{
            min-height: 210px;
        }
        `]

})

export class EventThumbnailComponent {
    @Input() event: any
    someProperty: any = "some value"

    logFoo() {
        console.log('foo')
    }

    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' }
        return {}
    }
}