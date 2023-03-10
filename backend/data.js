import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'MeronMeklit',
      email: 'admin@example.com',
      password: bcrypt.hashSync('abcdefg'),
      isAdmin: true,
    },
    {
      name: 'Alew',
      email: 'user@example.com',
      password: bcrypt.hashSync('abcdefg'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Red lipstick',
      slug: 'red-lipstick',
      category: 'lipstick',
      image: '/images/REDlip.jpg',
      price: 60,
      countInStock: 0,
      brand: 'Gucci',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality',
    },
    {
      name: 'Purple lipstick',
      slug: 'purple-lipstick',
      category: 'lipstick',
      image: '/images/Purplelip.jpeg',
      price: 60,
      countInStock: 10,
      brand: 'Gucci',
      rating: 4.4,
      numReviews: 10,
      description: 'high quality',
    },
    {
      name: 'Liquid lipstick',
      slug: 'liqud-lipstick',
      category: 'lipstick',
      image: '/images/Liquidlip.jpeg',
      price: 60,
      countInStock: 10,
      brand: 'Gucci',
      rating: 4.6,
      numReviews: 10,
      description: 'high quality',
    },
    {
      name: 'eyeliner',
      slug: 'eyeliner',
      category: 'eyeliner',
      image: '/images/eyeliner.jpeg',
      price: 75,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.8,
      numReviews: 10,
      description: 'high quality',
    },
  ],
};
export default data;
