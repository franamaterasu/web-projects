import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService } from './rick-morty.service';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { LocationComponent } from "./location/location.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, ListComponent, LocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rick-and-morty';

  characters: any[] = [];
  locations: any[] = [];

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.rickMortyService.getCharacters().then(
      (data) => {
        this.characters = data;
      },
      (error) => {
        console.error('Error al obtener los personajes:', error);
      }
    );

    this.rickMortyService.getLocations().then(
      (data) => {
        this.locations = data;
      },
      (error) => {
        console.error('Error al obtener las localizaciones:', error);
      }
    );
  }
}
