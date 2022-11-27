import { MapContainer, TileLayer, Popup, Marker, ImageOverlay, LatLngBounds } from 'react-leaflet'


export function TibiaMap() {
    const position = [0,0]
    
    // TODO: image bound needs work
    const bound = [
        [-250,-200], 
        [200, 200]
    ];

    // TODO: bounds need work to keep from panning too far from map
    const bounds = [
        [-350, -250], 
        [350, 250]
    ];
    return (
        <div id="map">
            <MapContainer 
                center={position} 
                zoom={3} 
                scrollWheelZoom={true}
                maxZoom={6}
                minZoom={2}
                trackResize={true}
                maxBounds={bounds}
                maxBoundsViscosity={1.0}
                >
                    <ImageOverlay
                        url={"https://tibiamaps.github.io/tibia-map-data/floor-07-map.png"}
                        bounds={bound}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href= "https://www.tibiamaps.io">TibiaMaps.io</a>'
                    />
            </MapContainer>
        </div>
    );
}