import { Chair, Controller, Monitor, RGBKeyboard } from "./../../public/assets";

export const navLinks = [
	{ label: 'home', url: '/' },
	{ label: 'about', url: '/about-us' },
	{ label: 'contact', url: '/contact-us' },
	{ label: 'sign up', url: '/auth/sign-up' },
	{ label: 'wishlist', url: '/wishlist' },
	{ label: 'cart', url: '/cart' },
];

export const categories = [
	{ label: "Women's Fashion", subcategories: [] },
	{ label: "Men's Fashion", subcategories: [] },
	{ label: 'Electronics' },
	{ label: 'Home & Lifestyle' },
	{ label: 'Medicine' },
	{ label: 'Sports & Outdoor' },
	{ label: "Baby's Toys" },
	{ label: 'Groceries & Pets' },
	{ label: 'Health & Beauty' },
];

export const saleProducts = [
    { 
        id: 1, 
        name: 'HAVIT HV-G92 Gamepad',
        image: Controller,
        discount: 40,
        discountPrice: 120,
        originalPrice: 160,
        rating: 4,
        numOfRatings: 75
    },
    { 
        id: 2, 
        name: 'S-Series Comfort Chair',
        image: Chair,
        discount: 25,
        discountPrice: 375,
        originalPrice: 400,
        rating: 4.5,
        numOfRatings: 99
    },
    { 
        id: 3, 
        name: 'AK-900 Wired Keyboard',
        image: RGBKeyboard,
        discount: 35,
        discountPrice: 960,
        originalPrice: 1160,
        rating: 4,
        numOfRatings: 75
    },
    { 
        id: 4, 
        name: 'IPS LCD Gaming Monitor',
        image: Monitor,
        discount: 30,
        discountPrice: 370,
        originalPrice: 400,
        rating: 4,
        numOfRatings: 75
    },
];
