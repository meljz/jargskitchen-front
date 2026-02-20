import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface ArticleBlock {
  type: 'p' | 'h3';
  text: string;
}

interface Article {
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  content: ArticleBlock[];
}

const ARTICLES: Record<string, Article> = {
  'Jargs Kitchen Launched': {
    title: 'Jargs Kitchen Launched',
    date: 'October 12, 2026',
    author: 'Chef Jarg',
    category: 'Food Guide',
    readTime: '5 min read',
    image: 'images/jargs-kitchen-3.jpg',
    content: [
      { type: 'h3', text: 'Jargs Kitchen Launched' },
      {
        type: 'p',
        text: 'When Jargs Kitchen first opened its doors, it wasn’t just about serving food—it was about creating meals that make people happy. What started as a small kitchen with a big dream quickly became a local favorite for juicy burgers, crispy chicken, and bold, flavorful sides.',
      },
      {
        type: 'p',
        text: 'The launch of Jargs Kitchen marked a new chapter in bringing Filipino-style comfort food with a twist to everyday dining. From the very first day, our team focused on using fresh ingredients, signature sauces, and homemade chili oil garlic to ensure every meal packed a punch.',
      },
      {
        type: 'p',
        text: 'Whether it’s a quick lunch, a family dinner, or a late-night snack, Jargs Kitchen has become a go-to spot for flavorful, satisfying meals. And it all began with one simple mission: to make delicious food that anyone can enjoy without breaking the bank.',
      },
      // Add other blocks similarly
    ],
  },
  'Behind the Scenes: How Jargs Kitchen Sources Fresh Ingredients': {
    title: 'Behind the Scenes: How Jargs Kitchen Sources Fresh Ingredients',
    date: 'September 28, 2026',
    author: 'Mike Torres',
    category: 'Technique',
    readTime: '4 min read',
    image: 'images/jargs-kitchen-2.jpg',
    content: [
      {
        type: 'p',
        text: 'Yasdadasdads.',
      },
      // Add other blocks
    ],
  },
  'Atsara: The Filipino Sidekick That Makes Every Meal Better': {
    title: 'Atsara: The Filipino Sidekick That Makes Every Meal Better',
    date: 'September 28, 2026',
    author: 'Mike Torres',
    category: 'Technique',
    readTime: '4 min read',
    image: 'images/burger.jpg',
    content: [
      {
        type: 'p',
        text: 'Yasdadasdads.',
      },
      // Add other blocks
    ],
  },
  'The History of Jargs Kitchen: From Simple Recipes to Flavorful Favorites': {
    title:
      'The History of Jargs Kitchen: From Simple Recipes to Flavorful Favorites',
    date: 'September 28, 2026',
    author: 'Mike Torres',
    category: 'Technique',
    readTime: '4 min read',
    image: 'images/jargs-kitchen-1.jpg',
    content: [
      {
        type: 'p',
        text: 'Jargs Kitchen started as a small passion project in [City/Province] with one goal: to bring juicy burgers, crispy chicken, and bold flavors to everyday meals. What began in a humble kitchen, experimenting with recipes and homemade chili oil garlic, soon became a local favorite.',
      },
      {
        type: 'p',
        text: 'Our secret sauces, atsara, and spicy condiments weren’t just additions—they became the heart of our meals. Word of mouth spread, and more and more people came for our flavorful, budget-friendly meals that feel like home.',
      },
      {
        type: 'p',
        text: 'Today, Jargs Kitchen isn’t just a place to eat—it’s a community of food lovers who crave comfort food with a twist, from classic Filipino sides like atsara to burgers that pack a punch.',
      },
      {
        type: 'p',
        text: 'We continue to innovate while staying true to our roots, ensuring that every meal we serve is fresh, flavorful, and made with love.',
      },
      // Add other blocks
    ],
  },
};

@Component({
  selector: 'app-blog-article-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-article.component.html',
})
export class BlogArticlePageComponent implements OnInit {
  article: Article | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.article = ARTICLES[slug] ?? null;

    // Scroll to top
    window.scrollTo(0, 0);

    // Optional redirect
    // if (!this.article) this.router.navigate(['/blog']);
  }
}
