const PRODUCTS = [
    {
        id: 100,
        name: 'Adidas Gazelle',
        price: 100,
        image: require('../assets/Products/Adidas Gazelle.jpg'),
        description: 'A simple and very comfortable sneaker.',
    }, 

    {
        id: 101,
        name: 'Adidas Samba',           
        price: 150,
        image: require('../assets/Products/Adidas Samba.jpg'),
        description: 'Very simple for outing.'
    },

    {
        id: 102,
        name: 'Adidas Yeezy',
        price: 350,
        image: require('../assets/Products/Adidas Yeezy.jpg'),
        description: 'A simple sneaker suitable for everyone.'
    }
];

export function getProducts() {
    return PRODUCTS;
}
