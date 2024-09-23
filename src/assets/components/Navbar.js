// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null); 

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index); 
//   };

//   return (
//     <nav className="bg-white shadow-lg p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://via.placeholder.com/40x40"
//             alt="Printify Logo"
//             className="h-8 w-8"
//           />
//           <span className="text-green-600 font-bold text-lg ml-2">Printify</span>
//         </div>

//         {/* Links */}
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Catalog
//           </a>

//           {/* Dropdown: How it works */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500"
//               onClick={() => toggleDropdown(1)}
//             >
//               How it works
//             </button>
//             {dropdownOpen === 1 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   How Printify Works
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Print on Demand
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Quality Promise
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                  What to Sell?
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Pricing
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Blog
//           </a>
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500"
//               onClick={() => toggleDropdown(1)}
//             >
//               Services
//             </button>
//             {dropdownOpen === 2 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Studio
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Print on Demand
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Quality Promise
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                  What to Sell?
//                 </a>
//               </div>
//             )}
//           </div>
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Use-cases
//           </a>

//           {/* Dropdown: Need Help */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500"
//               onClick={() => toggleDropdown(2)}
//             >
//               Need help?
//             </button>
//             {dropdownOpen === 2 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Help Center
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Contacts
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   My Requests
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Auth Buttons */}
//         <div className="hidden md:flex space-x-4">
//           <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded">
//             Log in
//           </button>
//           <button className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
//             Sign up
//           </button>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-2 space-y-2">
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Catalog
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             How it works
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Pricing
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Blog
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Services
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Use-cases
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Need help?
//           </a>
//           <div className="mt-2 space-x-2">
//             <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded w-full">
//               Log in
//             </button>
//             <button className="bg-green-500 text-white py-1 px-4 rounded w-full mt-2 hover:bg-green-600">
//               Sign up
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   return (
//     <nav className="bg-white shadow-lg p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://via.placeholder.com/40x40"
//             alt="Printify Logo"
//             className="h-8 w-8"
//           />
//           <span className="text-green-600 font-bold text-lg ml-2">Printify</span>
//         </div>

//         {/* Links */}
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Catalog
//           </a>

//           {/* Dropdown: How it works */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500"
//               onClick={() => toggleDropdown(1)}
//             >
//               How it works
//             </button>
//             {dropdownOpen === 1 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   How Printify Works
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Print on Demand
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Quality Promise
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   What to Sell?
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Pricing
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Blog
//           </a>

//           {/* Dropdown: Services */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500"
//               onClick={() => toggleDropdown(2)}
//             >
//               Services
//             </button>
//             {dropdownOpen === 2 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Studio
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Design Services
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify API
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Use-cases
//           </a>

//           {/* Dropdown: Need Help */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500"
//               onClick={() => toggleDropdown(3)}
//             >
//               Need help?
//             </button>
//             {dropdownOpen === 3 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Help Center
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Contacts
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   My Requests
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Auth Buttons */}
//         <div className="hidden md:flex space-x-4">
//           <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded">
//             Log in
//           </button>
//           <button className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
//             Sign up
//           </button>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-2 space-y-2">
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Catalog
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             How it works
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Pricing
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Blog
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Services
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Use-cases
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Need help?
//           </a>
//           <div className="mt-2 space-x-2">
//             <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded w-full">
//               Log in
//             </button>
//             <button className="bg-green-500 text-white py-1 px-4 rounded w-full mt-2 hover:bg-green-600">
//               Sign up
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   return (
//     <nav className="bg-white shadow-lg p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://via.placeholder.com/40x40"
//             alt="Printify Logo"
//             className="h-8 w-8"
//           />
//           <span className="text-green-600 font-bold text-lg ml-2">Printify</span>
//         </div>

//         {/* Links for larger screens */}
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Catalog
//           </a>

//           {/* Dropdown: How it works */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500 flex items-center"
//               onClick={() => toggleDropdown(1)}
//             >
//               How it works
//               <svg
//                 className={`ml-1 w-4 h-4 transition-transform ${
//                   dropdownOpen === 1 ? 'rotate-180' : 'rotate-0'
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </button>
//             {dropdownOpen === 1 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   How Printify Works
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Print on Demand
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Quality Promise
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   What to Sell?
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Pricing
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Blog
//           </a>

//           {/* Dropdown: Services */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500 flex items-center"
//               onClick={() => toggleDropdown(2)}
//             >
//               Services
//               <svg
//                 className={`ml-1 w-4 h-4 transition-transform ${
//                   dropdownOpen === 2 ? 'rotate-180' : 'rotate-0'
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </button>
//             {dropdownOpen === 2 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Studio
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Product Sourcing
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Design Tools
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Branding Services
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Use-cases
//           </a>

//           {/* Dropdown: Need help */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-green-500 flex items-center"
//               onClick={() => toggleDropdown(3)}
//             >
//               Need help?
//               <svg
//                 className={`ml-1 w-4 h-4 transition-transform ${
//                   dropdownOpen === 3 ? 'rotate-180' : 'rotate-0'
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </button>
//             {dropdownOpen === 3 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Help Center
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Contacts
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   My Requests
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Auth Buttons */}
//         <div className="hidden md:flex space-x-4">
//           <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded">
//             Log in
//           </button>
//           <button className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
//             Sign up
//           </button>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-2 space-y-2">
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Catalog
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             How it works
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Pricing
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Blog
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Services
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Use-cases
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-green-500">
//             Need help?
//           </a>
//           <div className="mt-2 space-x-2">
//             <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded w-full">
//               Log in
//             </button>
//             <button className="bg-green-500 text-white py-1 px-4 rounded w-full mt-2 hover:bg-green-600">
//               Sign up
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const handleMouseEnter = (index) => {
//     setDropdownOpen(index);
//   };

//   const handleMouseLeave = () => {
//     setDropdownOpen(null);
//   };

//   return (
//     <nav className="bg-white shadow-lg p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://via.placeholder.com/40x40"
//             alt="Printify Logo"
//             className="h-8 w-8"
//           />
//           <span className="text-green-600 font-bold text-lg ml-2">Printify</span>
//         </div>

//         {/* Links for larger screens */}
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Catalog
//           </a>

//           {/* Dropdown: How it works */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter(1)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button className="text-gray-700 hover:text-green-500 flex items-center">
//               How it works
//               <svg
//                 className="ml-1 w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//             {dropdownOpen === 1 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   How Printify Works
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Print on Demand
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Quality Promise
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   What to Sell?
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Pricing
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Blog
//           </a>

//           {/* Dropdown: Services */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter(2)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button className="text-gray-700 hover:text-green-500 flex items-center">
//               Services
//               <svg
//                 className="ml-1 w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//             {dropdownOpen === 2 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Printify Studio
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Product Sourcing
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Design Tools
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Branding Services
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-green-500">
//             Use-cases
//           </a>

//           {/* Dropdown: Need help */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter(3)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button className="text-gray-700 hover:text-green-500 flex items-center">
//               Need help?
//               <svg
//                 className="ml-1 w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//             {dropdownOpen === 3 && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Help Center
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   Contacts
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                   My Requests
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Auth Buttons */}
//         <div className="hidden md:flex space-x-4">
//           <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded hover:text-green-600">
//             Log in
//           </button>
//           <button className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
//             Sign up
//           </button>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden flex items-center">
//           <button className="text-gray-700 focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // state for mobile menu

  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-lg p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40x40"
              alt="Printify Logo"
              className="h-8 w-8"
            />
            <span className="text-green-600 font-bold text-lg ml-2">Printify</span>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-500">
              Catalog
            </a>

            {/* Dropdown: How it works */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-green-500 flex items-center">
                How it works
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {dropdownOpen === 1 && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    How Printify Works
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Print on Demand
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Printify Quality Promise
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    What to Sell?
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-green-500">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Blog
            </a>

            {/* Dropdown: Services */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-green-500 flex items-center">
                Services
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {dropdownOpen === 2 && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Printify Studio
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Product Sourcing
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Design Tools
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Branding Services
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-green-500">
              Use-cases
            </a>

            {/* Dropdown: Need help */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-green-500 flex items-center">
                Need help?
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {dropdownOpen === 3 && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Help Center
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Contacts
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    My Requests
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded hover:text-green-600">
              Log in
            </button>
            <button className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
              Sign up
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Catalog
            </a>

            <div className="relative">
              <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                How it works
              </button>
              <div className="pl-4">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  How Printify Works
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Print on Demand
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Printify Quality Promise
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  What to Sell?
                </a>
              </div>
            </div>

            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Pricing
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Blog
            </a>

            <div className="relative">
              <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Services
              </button>
              <div className="pl-4">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Printify Studio
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Product Sourcing
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Design Tools
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Branding Services
                </a>
              </div>
            </div>

            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Use-cases
            </a>

            <div className="relative">
              <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Need help?
              </button>
              <div className="pl-4">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Help Center
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Contacts
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  My Requests
                </a>
              </div>
            </div>

            <div className="flex flex-col px-4 py-2 space-y-4">
              <button className="text-gray-700 border border-gray-300 py-1 px-4 rounded hover:text-green-600">
                Log in
              </button>
              <button className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Padding for the fixed navbar */}
      <div className="pt-16">
        {/* Content of the page goes here */}
        <h1 className="text-2xl font-bold text-center">Welcome to Printify</h1>
        {/* Add the rest of your content here */}
      </div>
    </>
  );
};

export default Navbar;

