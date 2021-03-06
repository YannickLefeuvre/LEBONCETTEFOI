import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAlbumPhoto } from '../album-photo.model';
import { DataUtils } from 'app/core/util/data-util.service';

@Component({
  selector: 'jhi-album-photo-detail',
  templateUrl: './album-photo-detail.component.html',
})
export class AlbumPhotoDetailComponent implements OnInit {
  albumPhoto: IAlbumPhoto | null = null;

  constructor(protected dataUtils: DataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ albumPhoto }) => {
      this.albumPhoto = albumPhoto;
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  previousState(): void {
    window.history.back();
  }
}
