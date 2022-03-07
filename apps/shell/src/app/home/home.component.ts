import { Component } from '@angular/core';
import { GalleryFacade } from '@mf-app/shared/data-store';
import { map } from 'rxjs';

@Component({
  selector: 'mf-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cats = this.galleryFacade.selectedCats$.pipe(
    map((selectedCats: any) => Array.from(selectedCats.values()))) as any;

  constructor(private galleryFacade: GalleryFacade) {
  }

}
