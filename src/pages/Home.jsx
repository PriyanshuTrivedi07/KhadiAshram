import React from 'react'
import { Carousel } from '../components/index';
function Home() {

  const salesData = [
    { image: 'https://via.placeholder.com/800x400?text=Sale+1', title: 'Summer Sale', description: 'Up to 50% off' },
    { image: 'https://via.placeholder.com/800x400?text=Sale+2', title: 'Winter Sale', description: 'Up to 70% off' },
    { image: 'https://via.placeholder.com/800x400?text=Sale+3', title: 'Spring Sale', description: 'Up to 40% off' },
  ];

  const topProductsData = [
    { image: 'https://via.placeholder.com/800x400?text=Product+1', title: 'Product 1', description: 'Best selling product' },
    { image: 'https://via.placeholder.com/800x400?text=Product+2', title: 'Product 2', description: 'Popular choice' },
    { image: 'https://via.placeholder.com/800x400?text=Product+3', title: 'Product 3', description: 'Top rated product' },
  ];

  return (

    // <div className='flex flex-col items-center justify-center h-screen'>
    //   <h1 className='text-4xl font-bold'>Welcome to Khadi Ashram</h1>
    //   <p className='text-lg mt-4'>Explore our collection of handcrafted products</p>
    //   <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
    //     Explore Now
    //   </button>
    // </div>

    <section className="my-8">
      <h2 className="text-2xl font-bold text-center mb-4">Recent Sales</h2>
      <Carousel>
        {salesData.map((sale, index) => (
          <div key={index}>
            <img src={sale.image} alt={sale.title} />
            <p className="legend">{sale.title} - {sale.description}</p>
          </div>
        ))}
      </Carousel>
      <h2 className="text-2xl font-bold text-center my-8">Top Products</h2>
      <Carousel>
        {topProductsData.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.title} />
            <p className="legend">{product.title} - {product.description}</p>
          </div>
        ))}
      </Carousel>
    </section>

  )

}

export default Home