
import React from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from './ProductCard';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h2>
              </div>

              <div className="flex items-center">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-500 ml-2">({product.rating})</span>
              </div>

              <div className="text-4xl font-bold text-gray-900">
                ${product.price}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              <div className="flex space-x-4">
                <Button
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-2">Product Details</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Free shipping on orders over $50</li>
                  <li>• 30-day return policy</li>
                  <li>• 1-year warranty included</li>
                  <li>• Secure payment processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
