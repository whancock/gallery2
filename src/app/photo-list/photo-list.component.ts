import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
	moduleId: module.id,
	selector: 'app-photo-list',
	templateUrl: 'photo-list.component.html',
	styleUrls: ['photo-list.component.css'],
	providers: [PhotoService]
})
export class PhotoListComponent implements OnInit {

	photos: Photo[];
	mode = 'Observable';

	constructor(
		private _photoService: PhotoService) { }

	ngOnInit() {
		this.getPhotos();
	}

	getPhotos() {
		this._photoService.getPhotos().subscribe(photos => this.photos = photos);
	}

}