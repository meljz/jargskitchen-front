import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { trigger, transition, style, animate } from '@angular/animations';

import { Calendar, User, ArrowRight } from 'lucide-angular';

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent {
  posts: Post[] = [
    {
      id: 1,
      title: 'Jargs Kitchen Launched',
      slug: 'Jargs Kitchen Launched',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: 'October 12, 2026',
      author: 'who',
      image: 'images/jargs-kitchen-3.jpg',
    },
    {
      id: 2,
      title: 'Behind the Scenes: How Jargs Kitchen Sources Fresh Ingredients”',
      slug: 'Behind the Scenes: How Jargs Kitchen Sources Fresh Ingredients”',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: 'October 12, 2026',

      author: 'who',
      image: 'images/jargs-kitchen-2.jpg',
    },
    {
      id: 3,
      title: 'Atsara: The Filipino Sidekick That Makes Every Meal Better',
      slug: 'Atsara: The Filipino Sidekick That Makes Every Meal Better',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: 'September 15, 2026',
      author: 'who',
      image: 'images/atsara.png',
    },
    {
      id: 4,
      title:
        'The History of Jargs Kitchen: From Simple Recipes to Flavorful Favorites',
      slug: 'The History of Jargs Kitchen: From Simple Recipes to Flavorful Favorites',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: 'August 30, 2026',
      author: 'who',
      image: 'images/jargs-kitchen-1.jpg',
    },
  ];
}
