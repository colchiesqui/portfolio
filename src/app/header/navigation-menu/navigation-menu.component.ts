import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  navigationItems = [
    {
      key: 'about-me',
      title: 'About Me',
      link: '/about-me',
    },
    {
      key: 'portfolio',
      title: 'My Portfolio',
      link: '/portfolio',
    },
    {
      key: 'technologies',
      title: 'Technologies',
      link: '/technologies',
    },
    {
      key: 'testimonials',
      title: 'Testimonials',
      link: '/testimonials',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
