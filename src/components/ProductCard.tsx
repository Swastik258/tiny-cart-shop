
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onProductClick }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            onClick={() => onProductClick(product)}
          />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="secondary" size="icon" className="rounded-full bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold bg-red-600 px-3 py-1 rounded-full">Out of Stock</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
          </div>
          <h3 
            className="font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors"
            onClick={() => onProductClick(product)}
          >
            {product.name}
          </h3>
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            <Button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
