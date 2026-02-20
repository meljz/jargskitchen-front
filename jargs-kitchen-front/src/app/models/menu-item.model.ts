export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'burger' | 'fries';
  image: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
