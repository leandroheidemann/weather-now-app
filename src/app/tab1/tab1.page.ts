import {Component} from '@angular/core';
import {Geolocation} from '@awesome-cordova-plugins/geolocation/ngx';
import {Coordinates} from "@awesome-cordova-plugins/geolocation";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    providers: [Geolocation]
})
export class Tab1Page {

    constructor(private geolocation: Geolocation) {
    }

    async ionViewDidEnter(): Promise<void> {
        try {
            const coordinates = await this.getCurrentCoordinates();

            
        } catch (e) {
            console.log(e);
        }
    }

    private async getCurrentCoordinates(): Promise<Coordinates> {
        const {coords} = await this.geolocation.getCurrentPosition();
        return coords;
    }
}
