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
  'Jargs Kitchen in Mabalacat, Pampanga has quickly become a favorite destination for bold flavors and satisfying comfort food. From juicy burgers to crispy fried chicken and signature sauces, the kitchen continues to attract food lovers looking for delicious and affordable meals.',
      date: 'October 12, 2026',
      author: 'who',
      image: 'images/jargs-kitchen-3.jpg',
    },
    {
      id: 2,
      title: 'Behind the Scenes: How Jargs Kitchen Sources Fresh Ingredients',
      slug: 'Behind the Scenes: How Jargs Kitchen Sources Fresh Ingredients',
      excerpt:
  'Great food starts with great ingredients. Discover how Jargs Kitchen carefully selects fresh meats, vegetables, and spices to create the bold flavors behind their burgers, fried chicken, and signature dishes.',
      date: 'October 12, 2026',

      author: 'who',
      image: 'images/jargs-kitchen-2.jpg',
    },
    {
      id: 3,
      title: 'Atsara: The Filipino Sidekick That Makes Every Meal Better',
      slug: 'Atsara: The Filipino Sidekick That Makes Every Meal Better',
      excerpt:
  'Atsara, the classic Filipino pickled papaya side dish, brings a sweet and tangy balance to rich comfort food. Learn how this refreshing favorite perfectly complements burgers, fried chicken, and other meals at Jargs Kitchen.',
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
  'From a small kitchen with a passion for cooking to a beloved local food spot in Pampanga, the story of Jargs Kitchen shows how simple recipes and bold flavors turned into customer favorites.',
      date: 'August 30, 2026',
      author: 'who',
      image: 'images/jargs-kitchen-1.jpg',
    },
  ];
}
