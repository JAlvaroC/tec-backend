
interface SeedProduct {

//   description: string;
//   images: string[];
stock: number;
  name: string;
  price: number;
//   categoty_id: string;
//   categoryId: string;
  categoryId: number;
 //   sizes: ValidSizes[];
//   slug: string;
//   tags: string[];
//   title: string;
//   type: ValidTypes;
//   gender: 'men' | 'women' | 'kid' | 'unisex';
}

interface seedData {
    products: SeedProduct[];
}

export const initialData: seedData = {
    products: [
        {
        name: 'Product 1',
        price: 100,
        stock: 10,
        // categoty_id: '1',
        categoryId: 1,
        },
        {
        name: 'Product 2',
        price: 200,
        stock: 20,
        // categoty_id: '2',
        categoryId: 1,
        },
        {
        name: 'Product 3',
        price: 300,
        stock: 30,
        // categoty_id: '3',
        categoryId: 1,
        },
        {
        name: 'Product 4',
        price: 400,
        stock: 40,
        // categoty_id: '4',
        categoryId:1,
        },
        {
        name: 'Product 5',
        price: 500,
        stock: 50,
        // categoty_id: '5',
        categoryId: 1,
        },
        {
        name: 'Product 6',
        price: 600,
        stock: 60,
        // categoty_id: '6',
        categoryId: 1,
        }

        
        
    ],
}