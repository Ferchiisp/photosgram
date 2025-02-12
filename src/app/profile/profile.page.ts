import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  selectedSegment: string = 'posts';

  posts = [
    { image: 'assets/post1.jpg' },
    { image: 'assets/post2.jpg' },
    { image: 'assets/post3.jpg' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
