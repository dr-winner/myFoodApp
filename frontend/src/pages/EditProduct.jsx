import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    // const [image, setImage] = useState('');
    // const [imagePreview, setImagePreview] = useState('');
    // const [uploading, setUploading] = useState(false);
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3000/products/${id}`)
            .then((response) => {
                setName(response.data.name);
                setPrice(response.data.price);
                setCategory(response.data.category);
                setDescription(response.data.description);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                alert('Product not found');
            });
    }, [id]);

    const handleeditProduct = () => {
        const data = {
            name,
            price,
            category,
            description,
        };
        setLoading(true);
        axios
            .put(`http://localhost:3000/products/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Product updated successfully', { variant: 'success' });
                navigate('/admin');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Failed to update product', { variant: 'error' });
                console.log(error);
            });
    };

    return (

        <div>
            EditProduct
        </div>)
}

export default EditProduct
