import * as React from "react"
import * as MapBox from "mapbox-gl"

import { MapContext } from "./main"
/*

Fly to event callable from a high level component
click on event that sends a notification/trigger to the top level component
*/

export interface MapProps {
}

export class Map extends React.Component<MapProps, {}> {

    private map: MapBox.Map | null = null

    constructor(props: MapProps) {
        super(props);
    }
    componentDidMount() {

        this.map = new MapBox.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: { lng: 153.04370816437722, lat: -27.498025783712994 },
            zoom: 19,
            pitch: 45,
            antialias: true,
            accessToken: 'pk.eyJ1IjoiZ3JhYm9yZW5rbyIsImEiOiJjazdrenBmZmgwMXhjM2xvMDUxczB3bXdrIn0.TuJeI3ekW2M3_ArY0gMeVA'
        })

    }
    render() {

        console.log(MapContext, MapContext, MapContext.Consumer)
        // MapContext.Consumer
        
        return (
            <MapContext.Consumer>
                {value => 
                    <div>
                        INSERT MAP
                <div id='map' style={{ width: '400px', height: '300px' }}>
                            {value}
                        </div>
                    </div>
                }
            </MapContext.Consumer>
        )
    }
}

//////////////////////////