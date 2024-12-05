import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  @Input() locations: any[] | undefined;
}
