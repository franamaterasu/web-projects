import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private apiUrlCharacter = 'https://rickandmortyapi.com/api/character';
  private apiUrlLocations = 'https://rickandmortyapi.com/api/location';

  constructor() {}

  async getCharacters() {
    try {
      const response = await axios.get(this.apiUrlCharacter);
      return response.data.results;
    } catch (error) {
      console.error('Error al obtener los personajes:', error);
      throw error;
    }
  }

  async getLocations() {
    try {
      const response = await axios.get(this.apiUrlLocations);
      return response.data.results;
    } catch (error) {
      console.error('Error al obtener los personajes:', error);
      throw error;
    }
  }
}
