import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, HostListener } from '@angular/core';
import { IonContent } from '@ionic/angular';

interface Reel {
  videoUrl: string;
  liked: boolean;
  userImage: string;
  username: string;
}

@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
  standalone: false
})
export class ReelsPage implements AfterViewInit {
  @ViewChildren('videoElement') videos!: QueryList<ElementRef>;

  reels: Reel[] = [
    { videoUrl: 'assets/video/reel1.mp4', 
      liked: false, 
      userImage: 'assets/profile6.jpg', 
      username: 'usuario1' 
    },

    { videoUrl: 'assets/video/reel2.mp4', 
      liked: false, 
      userImage: 'assets/profile3.png', 
      username: 'usuario2' 
    },

    { videoUrl: 'assets/video/reel3.mp4', 
      liked: false, 
      userImage: 'assets/profile5.jpg', 
      username: 'usuario3' 
    },

    { videoUrl: 'assets/video/reel4.mp4', 
      liked: false, 
      userImage: 'assets/profile2.png', 
      username: 'usuario4' 
    },

    { videoUrl: 'assets/video/reel5.mp4', 
      liked: false, 
      userImage: 'assets/profile4.png', 
      username: 'usuario5' 
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    this.autoplayVideo();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.autoplayVideo();
  }

  autoplayVideo() {
    // Pausar todos los videos y asegurarnos que estén en silencio por defecto
    this.videos.forEach((video) => {
      const videoElement = video.nativeElement;
      videoElement.pause();  // Pausar todos los videos
      videoElement.muted = true;  // Silenciar todos los videos
    });
  
    // Encontrar el video visible en el viewport
    const visibleVideo = this.videos.find(video => {
      const rect = video.nativeElement.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;  // Verifica si el video está visible en el viewport
    });
  
    // Reproducir el video visible y desmutearlo
    if (visibleVideo) {
      const videoElement = visibleVideo.nativeElement;
      videoElement.play();
      videoElement.muted = false;  // Desmutear solo el video visible
    }
  }
  

  // Método likeReel
  likeReel(i: number) {
    this.reels[i].liked = !this.reels[i].liked;
  }

  // Método commentReel
  commentReel(i: number) {
    console.log(`Comentando en el reel: ${i}`);
  }

  // Método shareReel
  shareReel(i: number) {
    console.log(`Compartiendo el reel: ${i}`);
  }

  // Método togglePlay
  togglePlay(i: number) {
    const videoElement = this.videos.toArray()[i].nativeElement;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }
}
