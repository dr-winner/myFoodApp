import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios
            .get('http://localhost:3000/api/products')
            .then((res) => {
                setProduct(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className="px-4 py-8 max-w-7xl bg-gray-500 mx-auto">
            <div className="overflow-x-auto">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                <Link to=""
                                    className='bg-green-600 hover:bg-green-900 text-white py-2 px-4 font-medium rounded-lg shadow-md'>
                                    Add Product +
                                </Link >
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Count In Stock</th>
                            <th>Rating</th>
                            <th>Reviews</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product, index) => (
                            <tr key={product._id} className="bg-white hover:bg-gray-300">
                                <td>
                                    <div className='avatar'>
                                        <div className='mask mask-squircle w-12 h-12'>
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                    </div>
                                </td>
                                <td className='py-3 px-5'>{product.name}</td>
                                <td className='py-3 px-5'>{product.price}</td>
                                <td className='py-3 px-5'>{product.image}</td>
                                <td className='py-3 px-5'>{product.brand}</td>
                                <td className='py-3 px-5'>{product.category}</td>
                                <td className='py-3 px-5'>{product.description}</td>
                                <td className='py-3 px-5'>{product.countInStock}</td>
                                <td className='py-3 px-5'>{product.rating}</td>
                                <td className='py-3 px-5'>{product.numReviews}</td>
                                <td className='py-3 px-5'>
                                    <div className='flex justify-center gap-x-4 '>
                                        <Link to={`/admin/product/edit/${product._id}`}
                                            className='bg-orange-500 hover:bg-orange-900 text-white py-2 px-4 font-medium rounded-lg shadow-md text-sm'>Edit</Link>
                                        <Link to={`/admin/product/delete/${product._id}`}
                                            className='bg-red-500 hover:bg-red-900 text-white py-2 px-4 font-medium rounded-lg shadow-md text-sm'>Delete</Link>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h1>Admin</h1>
        </div >
    )
}

export default Admin;
