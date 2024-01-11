import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({ iconUrl: '/images/marker-icon.png' })
const icon2 = L.icon({ iconUrl: '/images/marker-icon2.png' })

const millenniumLine: [number, number][] = [
    [49.28567177593405, -122.79163317569233],
    [49.28044374128767, -122.79388911506585],
    [49.27482738980893, -122.80072849433257],
    [49.277322402479285, -122.82821023368791],
    [49.27804888003725, -122.84602438288663],
    [49.26150972866124, -122.88979841969197],
    [49.24862762924896, -122.89679343058569],
    [49.25354887492136, -122.91811087048256],
    [49.254802400729154, -122.9391011299794],
    [49.25922912939633, -122.9639987913515],
    [49.26479839330813, -122.98215207933515],
    [49.26642170528799, -123.00160578712159],
    [49.2649592573767, -123.01365081866756],
    [49.26082996955572, -123.0329420775398],
    [49.258986292413354, -123.0453648018164],
    [49.262814275651934, -123.06929417756935],
    [49.26584521563272, -123.07893625425974],
];


const expoLine:[number, number][] = [
    [49.28593860152216, -123.11174339704104],
    [49.28568509280736, -123.12015863571058],
    [49.283233461329814, -123.11555866092021],
    [49.279651530350456, -123.10973766860067],
    [49.27316580267696, -123.10036613620267],
    [49.273268948951596, -123.09961621357783],
    [49.26259553819609, -123.0695285503818],
    [49.2483732392172, -123.05588681296527],
    [49.2441864677827, -123.0462027119529],
    [49.23838242762204, -123.0321934839331],
    [49.22969271886209, -123.01278846756712],
    [49.22575702949864, -123.00438011292175],
    [49.22011727730226, -122.98893238284907],
    [49.21225210873448, -122.95948645152671],
    [49.199914893852586, -122.94908742381617],
    [49.20159714553385, -122.91259916980123],
    [49.20484224198679, -122.90617458705235],
    [49.20434275479686, -122.87434825623305],
    [49.19898393019809, -122.85075261335727],
    [49.18951951128892, -122.84795666290958],
    [49.182799809745454, -122.84498544155421]
];

const yellowOptions = { color: 'yellow' }
const blueOptions = { color: 'blue' }

const center:[number, number] = [49.25299, -123.00600]

const Map = () => {
    return(
        <>
            <MapContainer
                style={{height: "100vh"}}
                center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://github.com/Aaron-Trippy/leaflet-map">By Aaron Tripp</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

    {/* MILLENNIUM LINE MARKERS */}

                <Marker position={[49.28567177593405, -122.79163317569233]} icon={icon}>
                    <Popup>
                        Lafarge Lake-Douglas
                    </Popup>
                </Marker>
                <Marker position={[49.28044374128767, -122.79388911506585]} icon={icon}>
                    <Popup>
                        Lincoln
                    </Popup>
                </Marker>
                <Marker position={[49.27482738980893, -122.80072849433257]} icon={icon}>
                    <Popup>
                        Coquitlam Central
                    </Popup>
                </Marker>
                <Marker position={[49.277322402479285, -122.82821023368791]} icon={icon}>
                    <Popup>
                        Inlet Centre
                    </Popup>
                </Marker>
                <Marker position={[49.27804888003725, -122.84602438288663]} icon={icon}>
                    <Popup>
                        Moody Centre
                    </Popup>
                </Marker>
                <Marker position={[49.26150972866124, -122.88979841969197]} icon={icon}>
                    <Popup>
                        Burquitlam
                    </Popup>
                </Marker>
                <Marker position={[49.24862762924896, -122.89679343058569]} icon={icon}>
                    <Popup>
                        Lougheed Town Centre
                    </Popup>
                </Marker>
                <Marker position={[49.25354887492136, -122.91811087048256]} icon={icon}>
                    <Popup>
                        Production Way-University
                    </Popup>
                </Marker>
                <Marker position={[49.254802400729154, -122.9391011299794]} icon={icon}>
                    <Popup>
                        Lake City Way
                    </Popup>
                </Marker>
                <Marker position={[49.25922912939633, -122.9639987913515]} icon={icon}>
                    <Popup>
                        Sperling-Burnaby Lake
                    </Popup>
                </Marker>
                <Marker position={[49.26479839330813, -122.98215207933515]} icon={icon}>
                    <Popup>
                        Holdom
                    </Popup>
                </Marker>
                <Marker position={[49.26642170528799, -123.00160578712159]} icon={icon}>
                    <Popup>
                        Brentwood Town Centre
                    </Popup>
                </Marker>
                <Marker position={[49.2649592573767, -123.01365081866756]} icon={icon}>
                    <Popup>
                        Gilmore
                    </Popup>
                </Marker>
                <Marker position={[49.26082996955572, -123.0329420775398]} icon={icon}>
                    <Popup>
                        Rupert
                    </Popup>
                </Marker>
                <Marker position={[49.258986292413354, -123.0453648018164]} icon={icon}>
                    <Popup>
                        Renfrew
                    </Popup>
                </Marker>
                
                <Marker position={[49.262814275651934, -123.06929417756935]} icon={icon}>
                    <Popup>
                        Commerical Broadway
                    </Popup>
                </Marker>
                <Marker position={[49.26584521563272, -123.07893625425974]} icon={icon}>
                    <Popup>
                        VCC-Clark
                    </Popup>
                </Marker>

                <Polyline pathOptions={yellowOptions} positions={millenniumLine} />



    {/* EXPO LINE MARKERS */}

                <Marker position={[49.28593860152216, -123.11174339704104]} icon={icon2}>
                    <Popup>
                        Waterfront
                    </Popup>
                </Marker>
                <Marker position={[49.28568509280736, -123.12015863571058]} icon={icon2}>
                    <Popup>
                        Burrard
                    </Popup>
                </Marker>
                <Marker position={[49.283233461329814, -123.11555866092021]} icon={icon2}>
                    <Popup>
                        Granville
                    </Popup>
                </Marker>
                <Marker position={[49.279651530350456, -123.10973766860067]} icon={icon2}>
                    <Popup>
                        Stadium-Chinatown
                    </Popup>
                </Marker>
                <Marker position={[49.27316580267696, -123.10036613620267]} icon={icon2}>
                    <Popup>
                        Main Street-Science World
                    </Popup>
                </Marker>
                <Marker position={[49.262657979065295, -123.06915067139133]} icon={icon2}>
                    <Popup>
                        Commercial-Broadway
                    </Popup>
                </Marker>
                <Marker position={[49.2483732392172, -123.05588681296522]} icon={icon2}>
                    <Popup>
                        Nanaimo
                    </Popup>
                </Marker>
                <Marker position={[49.2441864677827, -123.0462027119529]} icon={icon2}>
                    <Popup>
                        29th Avenue
                    </Popup>
                </Marker>
                <Marker position={[49.23838242762204, -123.0321934839331]} icon={icon2}>
                    <Popup>
                        Joyce-Collingwood
                    </Popup>
                </Marker>
                <Marker position={[49.22969271886209, -123.01278846756712]} icon={icon2}>
                    <Popup>
                        Patterson
                    </Popup>
                </Marker>
                <Marker position={[49.22575702949864, -123.00438011292175]} icon={icon2}>
                    <Popup>
                        Metrotown
                    </Popup>
                </Marker>
                <Marker position={[49.22011727730226, -122.98893238284907]} icon={icon2}>
                    <Popup>
                        Royal Oak
                    </Popup>
                </Marker>
                <Marker position={[49.21225210873448, -122.95948645152671]} icon={icon2}>
                    <Popup>
                        Edmonds
                    </Popup>
                </Marker>
                <Marker position={[49.199914893852586, -122.94908742381617]} icon={icon2}>
                    <Popup>
                        22nd Street Station
                    </Popup>
                </Marker>
                <Marker position={[49.20159714553385, -122.91259916980123]} icon={icon2}>
                    <Popup>
                        New Westminster
                    </Popup>
                </Marker>
                <Marker position={[49.20484224198679, -122.90617458705235]} icon={icon2}>
                    <Popup>
                        Columbia
                    </Popup>
                </Marker>
                <Marker position={[49.20434275479686, -122.87434825623305]} icon={icon2}>
                    <Popup>
                        Scott Road
                    </Popup>
                </Marker>
                <Marker position={[49.19898393019809, -122.85075261335727]} icon={icon2}>
                    <Popup>
                        Gateway
                    </Popup>
                </Marker>
                <Marker position={[49.18951951128892, -122.84795666290958]} icon={icon2}>
                    <Popup>
                        Surrey Central
                    </Popup>
                </Marker>
                <Marker position={[49.182799809745454, -122.84498544155421]} icon={icon2}>
                    <Popup>
                        King George
                    </Popup>
                </Marker>

                <Polyline pathOptions={blueOptions} positions={expoLine} />







                {/* <Marker position={[49.25299, -123.00800]} icon={icon}>
                    <Popup>
                        BCIT
                    </Popup>
                </Marker>
                <Polyline pathOptions={redOptions} positions={polyline} />
                <Polyline pathOptions={orangeOptions} positions={multiPolyline} />

                <Circle center={center} pathOptions={fillBlueOptions} radius={200}/>
                <CircleMarker center={[49.25299, -123.01650]} pathOptions={redOptions} radius={20}>
                    <Popup>
                        Popup in CircleMarker
                    </Popup>
                </CircleMarker> */}
            </MapContainer>
        </>
    )
}

export default Map