import React, { useEffect } from 'react';
import { ProductProvider, useProductContext } from './context/productContext';
import ProductList from './components/productList';
import Filters from './components/Filter';
import Sorting from './components/Sorting';
import Search from './components/Search';

const mockData = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics', rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2_maCNlnNWZktlwaB1cwDX8sEJI-ZUzgDw&swidth="150 height="150"' },
  { id: 2, name: 'Shirt', price: 599, category: 'Clothing', rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRwirlovA7UzpOaDHrWtIDkn4EqwAdfccsQ&s width="150 height="150"' },
  { id: 3, name: 'Phone', price: 999, category: 'Electronics', rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBNKtES-ygkVQAnI86oQ3GM72Pulh0SdNzg&s   width="150 height="150"' },
  { id: 4, name: 'Shoes', price: 659, category: 'Clothing', rating: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0BxljyWie62u76kFnv6n0TvsIHNKt-6frQ&s width="150 height="150" ' },
  { id: 5, name: 'formal pant', price: 359, category: 'Clothing', rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Gkt4Mu68lkH_oqv-BFbhV9zcXyS4wYwMFg&swidth="150 height="150" ' },
  { id: 6, name: 'Macbook', price: 1000, category: 'Electronics', rating: 5, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVVNv8lvNIBC69abDGO7rHz_M_CkWS_XDTO97T5KSVvAHyJPFDT3eOiQcQtRIet6qg9mREu_TzU0pPulNUHfdhTYDKUFtN9CNaOylkBCvuGdOd5P66G9pA&usqp=CAE  width="150 height="150"' },
];

const AppContent = () => {
  const { dispatch } = useProductContext();

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: mockData });
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 mb-4 md:mb-0">
          <Filters />
        </aside>
        <main className="w-full md:w-3/4">
          <Search />
          <Sorting />
          <ProductList />
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <AppContent />
    </ProductProvider>
  );
};

export default App;
