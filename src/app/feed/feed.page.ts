import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: false
})
export class FeedPage implements OnInit {
  stories = [
    { username: 'karherdz', image: 'assets/profile1.jpg' },
    { username: 'christbap', image: 'assets/profile2.png' },
    { username: 'fa_peralta15', image: 'assets/profile3.png' },
    { username: 'xime_meny', image: 'assets/profile4.png' },
    { username: 'antuan.gh', image: 'assets/profile5.jpg' },
    { username: 'juanpablo.g', image: 'assets/profile6.jpg' },

  ];

  posts = [
    {
      username: 'karherdz',
      profilePic: 'assets/profile1.jpg',
      image: 'assets/post6.jpg',
      caption: 'Un hermoso día en la playa',
      likes: 120
    },
    {
      username: 'christbap',
      profilePic: 'assets/profile2.png',
      image: 'assets/post2.jpg',
      caption: 'Café y buena compañía',
      likes: 85
    },
    {
      username: 'fa_peralta15',
      profilePic: 'assets/profile3.png',
      image: 'assets/post3.jpg',
      caption: 'Explorando la ciudad',
      likes: 150
    },
    {
      username: 'xime_meny',
      profilePic: 'assets/profile4.png',
      image: 'assets/post4.jpg',
      caption: 'Un día en el parque',
      likes: 200
    },
    {
      username: 'antuan.gh',
      profilePic: 'assets/profile5.jpg',
      image: 'assets/post5.jpg',
      caption: 'Un día en la montaña',
      likes: 180
    },
    {
      username: 'bazan_majo04',
      profilePic: 'assets/profile6.jpg',
      image: 'assets/post6.jpg',
      caption: 'Un día en el campo',
      likes: 130
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
