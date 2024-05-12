import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map, tileLayer, marker} from 'leaflet';

@Component({
  selector: 'app-map-location',
  standalone: true,
  imports: [],
  templateUrl: './map-location.component.html',
  styleUrl: './map-location.component.scss'
})
export class MapLocationComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const map_animal = new Map('map-animal').setView([51.505, -0.09], 13);
    tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png', {
      minZoom: 0,
      maxZoom: 17,
      attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map_animal);

    const markerItem = marker([14.58320401886148, -90.6061193999468]).addTo(map_animal).bindPopup("Animal Garden");

    map_animal.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ]);

  }
}
