"use client";

import { faker } from '@faker-js/faker';
import { FC, useState } from 'react'; 

// Define a type for the product
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  department: string;
}

// Generate an array of fake products
const generateFakeProducts = (count: number): Product[] => {
  const products: Product[] = [];
  
  for (let i = 0; i < count; i++) {
    products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      image: faker.image.imageUrl(),
      department: faker.commerce.department(),
    });
  }

  return products;
};

const Products: FC = () => {
  // Generate 100 fake products
  const products = generateFakeProducts(100);
  
  // State for the selected department filter
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  // Get unique departments for the filter options
  const departments = Array.from(new Set(products.map(p => p.department)));
  
  // Handle department filter change
  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(event.target.value);
  };

  // Filter products based on selected department
  const filteredProducts = selectedDepartment === 'All'
    ? products
    : products.filter(product => product.department === selectedDepartment);

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">Products</h1>

      <div className="mb-4">
        <label htmlFor="department-filter" className="mr-2">Filter by department:</label>
        <select
          id="department-filter"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="All">All</option>
          {departments.map(department => (
            <option key={department} value={department}>{department}</option>
          ))}
        </select>
      </div>

      <ul className="grid grid-cols-1 m-10 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <li key={product.id} className="border border-gray-300 bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{product.department}</h3>
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
            <h2 className="text-xl font-bold mb-1">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
