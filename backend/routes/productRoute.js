import express from 'express';
import { Product } from '../models/productModel.js';

const router = express.Router();


// POST new product
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.price ||
            !req.body.image ||
            !req.body.brand ||
            !req.body.category ||
            !req.body.description ||
            !req.body.countInStock ||
            !req.body.rating ||
            !req.body.numReviews
        ) {
            return res.status(400).send({ message: 'Please fill all fields' });
        }
        const newProduct = {
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            brand: req.body.brand,
            category: req.body.category,
            description: req.body.description,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews
        };

        const product = await Product.create(newProduct);
        return res.status(201).send(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

});
// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({
            data: products
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// GET product by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        return res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// DELETE product by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully', deletedProduct: product });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// UPDATE product by ID
router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.price ||
            !req.body.image ||
            !req.body.brand ||
            !req.body.category ||
            !req.body.description ||
            !req.body.countInStock ||
            !req.body.rating ||
            !req.body.numReviews
        ) {
            return res.status(400).send({
                message: 'Please fill all fields'
            });
            const { id } = req.params;
            const product = await Product.findByIdAndUpdate
                (id, req.body, { new: true });
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            return res.status(200).send({ message: 'Product updated successfully' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
export default router;