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
        text: 'Jargs Kitchen in Mabalacat, Pampanga has quickly become a favorite destination for food lovers who are searching for bold flavors and satisfying comfort meals. Since its launch, Jargs Kitchen has focused on serving high quality dishes that combine Filipino style comfort food with a modern twist. What started as a humble kitchen with a big dream has grown into a well loved local food spot known for its juicy burgers, crispy fried chicken, and flavorful side dishes. By using fresh ingredients and carefully crafted recipes, Jargs Kitchen continues to attract customers who want delicious and affordable meals in Pampanga. Visitors can explore the menu and learn more about the brand through the official website jargskitchen.online, which helps bring the experience of Jargs Kitchen to more people online.',
      },
      {
        type: 'p',
        text: 'From the beginning, the philosophy of Jargs Kitchen Mabalacat Pampanga has been simple. The goal is to create food that brings happiness to every table. Every dish is prepared with care, from the juicy burgers filled with rich flavor to the crispy chicken that customers love to order again and again. One of the highlights of the kitchen is the homemade chili oil garlic and signature sauces that give every meal a bold and unforgettable taste. These unique flavors help Jargs Kitchen stand out among many food spots in Pampanga. By combining authentic Filipino taste with creative flavor ideas, Jargs Kitchen offers a memorable dining experience that keeps customers coming back.',
      },
      {
        type: 'p',
        text: 'Today, Jargs Kitchen continues to grow as more people discover its flavorful dishes and welcoming atmosphere. Whether customers are looking for a quick lunch, a relaxing family dinner, or a satisfying late night snack, Jargs Kitchen offers meals that are both filling and affordable. As the brand grows, its online presence through jargskitchen.online also helps more food lovers find one of the most exciting comfort food destinations in Mabalacat City, Pampanga. With a commitment to quality food, friendly service, and bold flavors, Jargs Kitchen continues to build a strong reputation as a must visit food spot for anyone craving satisfying meals in Pampanga.',
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
        text: 'At Jargs Kitchen in Mabalacat, Pampanga, great food always begins with great ingredients. Behind every juicy burger, crispy chicken, and flavorful side dish served at Jargs Kitchen is a careful process of selecting fresh and high quality ingredients. The team believes that delicious meals start long before cooking begins. By choosing trusted suppliers and fresh produce, Jargs Kitchen ensures that every dish served to customers delivers the rich flavor and satisfying quality that people expect. This commitment to freshness is one of the reasons why many locals continue to visit jargskitchen.online to discover more about the menu and the story behind the brand.',
      },
      {
        type: 'p',
        text: 'Sourcing fresh ingredients is an important part of how Jargs Kitchen Mabalacat Pampanga maintains its signature taste. The kitchen prioritizes quality meats, fresh vegetables, and carefully selected spices to create dishes that stand out in flavor. Every ingredient plays an important role in creating the bold taste that customers enjoy, from the juicy burger patties to the crispy chicken that has become a favorite among diners. The kitchen also prepares its own homemade chili oil garlic and special sauces, adding a unique flavor that enhances many dishes. This attention to quality ingredients allows Jargs Kitchen to maintain consistency and deliver meals that feel freshly made every time.',
      },
      {
        type: 'p',
        text: 'The dedication to fresh ingredients reflects the passion behind Jargs Kitchen and its mission to serve meals that make people happy. Whether someone is ordering a quick lunch, enjoying dinner with friends, or looking for a late night comfort meal, customers can trust that their food is prepared using ingredients selected with care. This behind the scenes effort is part of what makes Jargs Kitchen stand out in the growing food scene of Mabalacat City, Pampanga. As more people discover the brand through jargskitchen.online, Jargs Kitchen continues to build its reputation as a trusted local kitchen that values freshness, quality, and flavorful dining experiences.',
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
        text: 'In Filipino cuisine, side dishes often play an important role in balancing flavors, and one of the most beloved examples is atsara. This sweet and tangy pickled papaya dish has long been a favorite partner to many Filipino meals. At Jargs Kitchen in Mabalacat, Pampanga, atsara adds a refreshing contrast to rich and savory dishes such as burgers, fried chicken, and other comfort food favorites. The crisp texture and bright flavor of atsara help cleanse the palate and make every bite more enjoyable. For customers exploring the menu at jargskitchen.online, this classic Filipino side dish offers a familiar taste that perfectly complements many of the kitchen’s flavorful offerings.',
      },
      {
        type: 'p',
        text: 'Atsara is traditionally made from shredded green papaya mixed with carrots, onions, garlic, and bell peppers, all preserved in a sweet and slightly sour vinegar mixture. This combination creates a balanced flavor that enhances many Filipino dishes. At Jargs Kitchen Mabalacat Pampanga, atsara is appreciated not only for its taste but also for how it adds a refreshing element to hearty meals. When paired with crispy fried chicken or juicy burgers, the tangy sweetness of atsara cuts through the richness of the food, creating a well rounded dining experience. This simple yet flavorful side dish shows how traditional Filipino ingredients can elevate modern comfort food.',
      },
      {
        type: 'p',
        text: 'Today, atsara continues to be a timeless part of Filipino dining culture, enjoyed in homes and restaurants across the country. At Jargs Kitchen, it remains a perfect example of how small additions can make a big difference in a meal. Whether customers are enjoying a quick lunch, sharing a meal with friends, or ordering their favorite comfort food, atsara adds a bright and satisfying flavor that enhances the overall experience. As more people discover the delicious offerings of Jargs Kitchen through jargskitchen.online, classic sides like atsara continue to highlight the rich culinary traditions that inspire the kitchen’s flavorful menu in Mabalacat City, Pampanga.',
      },
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
        text: 'The story of Jargs Kitchen in Mabalacat, Pampanga began with a simple passion for cooking and a desire to share flavorful meals with the community. What started as a small kitchen with a few carefully prepared recipes quickly grew into a local favorite known for satisfying comfort food. From the very beginning, the goal of Jargs Kitchen was clear. The kitchen wanted to create meals that bring people together and deliver bold flavors that customers can enjoy any time of the day. As more diners discovered the delicious menu, the reputation of Jargs Kitchen continued to grow, and many people began exploring its offerings through jargskitchen.online.',
      },
      {
        type: 'p',
        text: 'In the early days, the focus of Jargs Kitchen Mabalacat Pampanga was on perfecting simple but delicious recipes. Burgers were crafted with juicy patties and fresh ingredients, fried chicken was prepared to achieve the perfect crisp texture, and side dishes were designed to complement every meal. Over time, the kitchen introduced signature sauces and homemade chili oil garlic that added a unique and unforgettable flavor to many of its dishes. These special touches helped transform simple recipes into flavorful favorites that customers kept coming back for. By combining creativity with traditional comfort food ideas, Jargs Kitchen created a menu that stands out in the growing food scene of Pampanga.',
      },
      {
        type: 'p',
        text: 'Today, Jargs Kitchen continues to build on the foundation that started it all. The kitchen remains committed to serving delicious food made with care, quality ingredients, and bold flavors. Whether customers are visiting for a quick meal, enjoying dinner with family, or searching for their next comfort food craving, Jargs Kitchen offers dishes that are both satisfying and affordable. As the brand continues to grow, its presence through jargskitchen.online helps more food lovers discover one of the most exciting comfort food destinations in Mabalacat City, Pampanga. The journey from simple recipes to flavorful favorites shows how passion for great food can turn a small kitchen into a beloved local name.',
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
