import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images: string[] = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250'
  ];
  newImageUrl: string = '';

  addImage() {
    if (this.newImageUrl) {
      this.images.push(this.newImageUrl);
      this.newImageUrl = '';
    }
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
  }
}
