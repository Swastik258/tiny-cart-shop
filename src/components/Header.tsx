
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">TinyCart</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Shop</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="mb-4">
                <Input type="text" placeholder="Search products..." />
              </div>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Shop</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
