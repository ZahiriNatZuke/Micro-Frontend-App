import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as GalleryActions from './gallery.actions';
import { GalleryApiService } from '../api/gallery-api.service';
import { map } from 'rxjs';

@Injectable()
export class GalleryEffects {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  init$ = createEffect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.actions$.pipe(
        ofType(GalleryActions.init),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fetch({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          run: () => {
            return this.galleryApiService.getCatsList().pipe(
              map((res) => GalleryActions.loadGallerySuccess({
                  gallery: res,
                })
              )
            );
          },
          onError: (action, error) => {
            console.error('Error', error);
            return GalleryActions.loadGalleryFailure({ error });
          },
        })
      );
    }
  );

  constructor(private readonly actions$: Actions, private galleryApiService: GalleryApiService) {
  }
}
