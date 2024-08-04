import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImagesConfig } from '../../../core/images-config/images-config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  ImagesConfig = ImagesConfig;

  logo = ImagesConfig.logo;
}
