



import React from 'react';
import Testimonials from './Testimonials';
import Store from './Store';
import Banner from './Banner';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="hero-text flex-1 text-center lg:text-left p-6 lg:pl-20 lg:p-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Create and sell custom products
          </h1>
          <ul className="text-lg lg:text-xl text-gray-600 mb-6">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              100% Free to use
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              900+ High-Quality Products
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Largest global print network
            </li>
          </ul>

          {/* Buttons */}
          <div className="buttons flex justify-center lg:justify-start space-x-4">
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
              Start for free
            </button>
            <button className="flex items-center py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197 3.197m1.197-4.368v4.368h-4.368" />
              </svg>
              How it works?
            </button>
          </div>

          {/* Trust Text */}
          <p className="text-gray-500 mt-4">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right Side Image */}
        <div className="hero-image flex-1 p-6 lg:p-0">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Custom T-Shirt"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* New Section with Icons */}
     {/* New Section with Icons */}
<div className="features-section py-12 bg-gray-100">
  <div className="container mx-auto max-w-6xl px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-16 text-center">
    {/* Feature 1 */}
    <div className="feature-item">
      <img
        src="https://via.placeholder.com/100"
        alt="Higher Profits"
        className="mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">Higher Profits</h3>
      <p className="text-gray-600">
        We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="feature-item">
      <img
        src="https://via.placeholder.com/100"
        alt="Robust Scaling"
        className="mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">Robust Scaling</h3>
      <p className="text-gray-600">
        Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="feature-item">
      <img
        src="https://via.placeholder.com/100"
        alt="Best Selection"
        className="mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">Best Selection</h3>
      <p className="text-gray-600">
        With 900+ products and top-quality brands, you can choose the best products for your business.
      </p>
    </div>
  </div>
 </div>
 {/* New Section */}
{/* New Section with Grey Background */}
{/* New Section with Grey Background */}
<div className="custom-design-section py-12 bg-gray-100">
  <div className="container mx-auto max-w-6xl px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Image Column */}
    <div className="image-column">
      <img
        src="https://via.placeholder.com/400"
        alt="Product Design"
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* Text Column with White Background */}
    <div className="text-column bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">
        Easily add your design to a wide range of products
      </h2>
      <p className="text-gray-600 mb-6">
        With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
      </p>
      <a href="#" className="text-green-600 font-semibold">
        All products &rarr;
      </a>
    </div>
  </div>
</div>
<div className="features-section py-12 bg-gray-100">
  <div className="container mx-auto max-w-6xl px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-16 text-center">
    {/* Feature 1 */}
    <div className="feature-item">
      <img
        src="https://via.placeholder.com/100"
        alt="Higher Profits"
        className="mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2 text-green-600 font-semibold">CREATE</h3> <h3 className="text-2xl font-semibold mb-2">custom products</h3>
      <p className="text-gray-600">
       Easily add your designs to a wide range of products using our free tools
      </p>
    </div>

    {/* Feature 2 */}
    <div className="feature-item">
      <img
        src="https://via.placeholder.com/100"
        alt="Robust Scaling"
        className="mx-auto mb-4"
      />
       <h3 className="text-2xl font-semibold mb-2 text-green-600 font-semibold">SELL</h3> <h3 className="text-2xl font-semibold mb-2">on your terms</h3>
      <p className="text-gray-600">
        You choose the products, sale price and where to sell
      </p>
    </div>

    {/* Feature 3 */}
    <div className="feature-item">
      <img
        src="https://via.placeholder.com/100"
        alt="Best Selection"
        className="mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2 text-green-600">WE HANDLE</h3><h3 className="text-2xl font-semibold mb-2">fulfillment</h3>
      <p className="text-gray-600">
       Once an order is placed, we automatically handle all the printing and delivery logistics 
      </p>
      
    </div>
  </div>
  
 </div>
 <Store />
 <Banner />
 <Testimonials />
 <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      {/* Existing Sections */}
      {/* Add your previous sections here */}
      
      {/* New Make Money Section */}
     
      <section className="w-full flex flex-col lg:flex-row justify-between items-center py-12 px-6 bg-black">
        {/* Text Section */}
        <div className="lg:w-1/2 text-left p-6 bg-darkblue text-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Make Money, Risk-Free</h2>
          <p className="mb-6">You pay for fulfillment only when you make a sale</p>
          
          {/* Pricing Box */}
          <div className="bg-darkblue-light p-6 rounded-md shadow-md">
            <div className="flex justify-between mb-4">
              <span>You sell a t-shirt</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>You pay for its production</span>
              <span>$12</span>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between text-green-400 font-bold">
              <span>Your profit</span>
              <span>$18</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600">
            Start Selling
          </button>

          <p className="text-sm mt-4">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </div>

        {/* Illustration Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
          <img
            src="/path-to-your-uploaded-image.png"  // Replace with your image path
            alt="Profit Growth Illustration"
            className="w-3/4 lg:w-full"
          />
        </div>
      </section>
    </div>
 


    </section>
  );
};

export default Hero;

