import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false
})
export class DiscoverPage implements OnInit {
  images: string[] = [];

  constructor() {}

  ngOnInit() {
    this.loadInitialImages();
  }

  loadInitialImages() {
    this.images = Array(12).fill(0).map((_, i) => `https://picsum.photos/300/300?random=${i}`);
  }
  
  loadMoreImages(event: any) {
    setTimeout(() => {
      let newImages = Array(6).fill(0).map((_, i) => `https://picsum.photos/300/300?random=${i + this.images.length}`);
      this.images.push(...newImages);
      event.target.complete();
    }, 1000);
  }
  
}
