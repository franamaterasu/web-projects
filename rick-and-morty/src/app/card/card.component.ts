import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroInformationCircle,
  heroSignal,
  heroUser,
  heroSparkles,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [NgIcon],
  viewProviders: [
    provideIcons({ heroInformationCircle, heroSignal, heroUser, heroSparkles }),
  ],
})
export class CardComponent {
  @Input() character: any;
}
