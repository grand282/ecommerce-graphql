import odersModel from '../model/oders.model.js';
import productSchema from '../model/products.model.js'
const products = [

  //clothes

  {
      productIndex: 1,
      id: "price_1McAgPGEitcaOef22aCxNGLX",
      title: "backpack",
      price: 44.99,
      description: "description" 
  },
  {
      productIndex: 2,
      id: "price_1McAwdGEitcaOef28Crr3iD5",
      title: "jordan nike",
      price: 85.99,
      description: "description"
  },
  {
      productIndex: 3,
      id: "price_1McAy7GEitcaOef2EeJchTj1",
      title: "white sweater",
      price: 35.99,
      description: "description" 
  }, 
  {
      productIndex: 4,
      id: "price_1McAzGGEitcaOef2xIyzw8KW",
      title: "puma sneakers",
      price: 55.99,
      description: "description"
  }, 
  {
      productIndex: 5,
      id: "price_1McB0dGEitcaOef2MlE20HwW",
      title: "red handbag",
      price: 400,
      description: "description" 
  },
  {
      productIndex: 6,
      id: "price_1McB25GEitcaOef2QFUgtgvq",
      title: "white tshirt",
      price: 25.99,
      description: "description" 
  },
  {
      productIndex: 7,
      id: "price_1McB3CGEitcaOef2SMRQPHrW",
      title: "Air force 1",
      price: 60.99,
      description: "description" 
  },
  {
      productIndex: 8,
      id: "price_1McB4FGEitcaOef2aO7JJgRP",
      title: "LA shirt",
      price: 25,
      description: "description" 
  },
  {
      productIndex: 9,
      id: "price_1McB5OGEitcaOef2URTMk4ue",
      title: "black tshirt",
      price: 23.99,
      description: "description" 
  },
  {
      productIndex: 10,
      id: "price_1McB6kGEitcaOef2CLsSF7KN",
      title: "tshirt",
      price: 26.99,
      description: "description" 
  },
  {
      productIndex: 11,
      id: "price_1McB80GEitcaOef2j42yJr37",
      title: "jeans",
      price: 42.99,
      description: "description"
  },
  // tech products
  {
      productIndex: 12,
      id: "price_1McB9KGEitcaOef2XXugsGJu",
      title: "samsung galaxy s21 ultra",
      price: 5500,
      description: "description" 
  },
  {
      productIndex: 13,
      id: "price_1McBAWGEitcaOef2HSD0uJQ0",
      title: "iphone 11",
      price: 4000,
      description: "description" 
  },
  {
      productIndex: 14,
      id: "price_1McBCKGEitcaOef2ysSolLWX",
      title: "iphone 12",
      price: 4500,
      description: "description" 
  },
  {
      productIndex: 15,
      id: "price_1McBDPGEitcaOef2BmjnFEpd",
      title: "xbox",
      price: 3000,
      description: "description"
  },
  {
      productIndex: 16,
      id: "price_1McBEUGEitcaOef2WGLFSABl",
      title: "mac laptop",
      price: 1200,
      description: "description"
  },
  {
      productIndex: 17,
      id: "price_1McBFUGEitcaOef2tOHglgVy",
      title: "sonny headphones",
      price: 300,
      description: "description" 
  },
  {
      productIndex: 18,
      id: "price_1McBGOGEitcaOef2AWOpe0GS",
      title: "white earpods",
      price: 200,
      description: "description"
  },
  {
      productIndex: 19,
      id: "price_1McBHQGEitcaOef2FraODzrO",
      title: "black earpods",
      price: 200,
      description: "description"
  },
  {
      productIndex: 20,
      id: "price_1McBIRGEitcaOef22K40gJBZ",
      title: "nitendo game console",
      price: 800,
      description: "description"
  },
  {
      productIndex: 21,
      id: "price_1McBJPGEitcaOef2m2OE7G61",
      title: "white keyboard",
      price: 350,
      description: "description" 
  },
  {
      productIndex: 22,
      id: "price_1McBKaGEitcaOef2jy4Pd6k6",
      title: "black keyboard",
      price: 350,
      description: "description" 
  },
  {
      productIndex: 23,
      id: "price_1McBLfGEitcaOef2cbIEZiOT",
      title: "xbox gamepad",
      price: 300,
      description: "description" 
  },
  {
      productIndex: 24,
      id: "price_1McBMnGEitcaOef2COGYzSpQ",
      title: "Apple monitor",
      price: 855.99,
      description: "description" 
  },
   // accessories
  {
      productIndex: 25,
      id: "price_1McBNcGEitcaOef2p0QcxU9Q",
      title: "watch",
      price: 1000,
      description: "description"
  },
  {
      productIndex: 26,
      id: "price_1McBOJGEitcaOef2bn8J9HWA",
      title: "ring",
      price: 2800,
      description: "description" 
  },
  {
      productIndex: 27,
      id: "price_1McBPSGEitcaOef2XwHM6kVR",
      title: "rolve necklace",
      price: 2000,
      description: "description" 
  },
  {
      productIndex: 28,
      id: "price_1McBQSGEitcaOef2AjR6J2C2",
      title: "moonlate necklace",
      price: 1800,
      description: "description" 
  },
  {
      productIndex: 29,
      id: "price_1McBRGGEitcaOef2WsJgLOdK",
      title: "pedant necklace",
      price: 1600,
      description: "description" 
  },
 
  {
      productIndex: 30,
      id: "price_1McBRyGEitcaOef22v1f0ho5",
      title: "beach sunglasses",
      price: 700,
      description: "description" 
  },
  {
      productIndex: 31,
      id: "price_1McBTFGEitcaOef2RMFRs83y",
      title: "brit sunglasses",
      price: 800,
      description: "description" 
  }
]

  const orders = [
    {
      date: '2005-05-05',
      subtotal: 90.22,
      items: [ 
        {
          product: {
            id: 'redshoe',
            description: 'Old Red Shoe',
            price: 45.11,
          },
          quantity: 2,
        }
      ]
    }
  ];

  async function loadDataProduct() {
    try {
      await productSchema.deleteMany(); // Clear existing products
      await productSchema.insertMany(products); // Insert new products
      console.log('Products loaded successfully!');
    } catch (err) {
      console.error(err);
    }
  }

  async function loadDataOrder() {
    try {
      await odersModel.deleteMany(); // Clear existing products
      await odersModel.insertMany(orders); // Insert new products
      console.log('Orders loaded successfully!');
    } catch (err) {
      console.error(err);
    }
  }

  

 async function getAllOrders() {
    await loadDataOrder()
    return await odersModel.find({});
  }


  
  async function getAllProducts() {
    await loadDataProduct()
    return await productSchema.find({});
  }
  
  
  async function getProductsByPrice(min, max) {
    try {
      const products = await productSchema.find({
        price: { $gte: min, $lte: max }
      });
      return products;
    } catch (err) {
      console.error(err);
      return []; // Return an empty array or handle the error accordingly
    }
  }
  
  
  async function getProductById(id) {
    try {
      const product = await productSchema.findOne({ id: id });
      return product;
    } catch (err) {
      console.error(err);
      return null; // Return null or handle the error accordingly
    }
  }
  
  
  function addNewProduct(id, description, price) {
    const newProduct = {
      id,
      price,
      description,
      reviews: []
    };
  
    products.push(newProduct);
    return newProduct;
  }
  
  function addNewProductReview(id, rating, comment) {
    const matchedProduct = getProductById(id);
  
    if (matchedProduct) {
      const newProductReview = {
        rating,
        comment,
      };
  
      matchedProduct.reviews.push(newProductReview);
  
      return newProductReview;
    }
  }

  const resolvers = {
    Query: {
      products: () => {
        return getAllProducts();
      },
      productsByPrice: (_, args) => {
        return getProductsByPrice(args.min, args.max);
      },
      product: (_, args) => {
        return getProductById(args.id);
      },
      orders: ()=>{
        return getAllOrders();
      }
    },
    Mutation: {
      addNewProduct: (_, args) => {
        return addNewProduct(args.id, args.description, args.price);
      },
      addNewProductReview: (_, args) => {
        return addNewProductReview(args.id, args.rating, args.comment);
      }
    }
  };

export default resolvers
