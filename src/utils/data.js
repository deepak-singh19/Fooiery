import I1 from '../img/i1.png';
import F1 from '../img/f1.png';
import C3 from '../img/c3.png';
import Fi1 from '../img/fi1.png';



const HeroData = [
    { id: 1, name: 'IceCream', descp: 'Choclate & Vanilla', price: '5', imageSrc: I1 },
    { id: 1, name: 'Strawberries', descp: 'Fresh Strawberries', price: '55', imageSrc: F1 },
    { id: 1, name: 'Chicken Kebab', descp: 'Mixed Kebab Plates', price: '299', imageSrc: C3 },
    { id: 1, name: 'Fish Kebab', descp: 'Fish Masala Kebeb', price: '579', imageSrc: Fi1 }
]


export default HeroData;

export const categories = [{
        id: 1,
        name: "Chicken",
        urlParamName: "chicken",
    },
    {
        id: 2,
        name: "Curry",
        urlParamName: "curry",
    },
    {
        id: 3,
        name: "Rice",
        urlParamName: "rice",
    },
    {
        id: 4,
        name: "Fish",
        urlParamName: "fish",
    },
    {
        id: 5,
        name: "Fruits",
        urlParamName: "fruits",
    },
    {
        id: 6,
        name: "Icecreams",
        urlParamName: "icecreams",
    },

    {
        id: 7,
        name: "Soft Drinks",
        urlParamName: "drinks",
    },
];