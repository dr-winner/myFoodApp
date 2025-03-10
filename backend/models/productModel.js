import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: [
            "Refrigerators",
            "Microwaves",
            "Blenders",
            "Toasters",
            "Coffee Makers",
            "Electric Kettles",
            "Gas Cookers",
            "Induction Cookers",
            "Dishwashers",
            "Rice Cookers",
            "Pressure Cookers",
            "Air Fryers",
            "Ovens",
            "Mixers & Grinders",
            "Food Processors",
            "Water Dispensers",
            "Juicers",
            "Deep Fryers",
            "Electric Grills",
            "Vacuum Sealers",
            "Bread Makers",
            "Washing Machines",
            "Dryers",
            "Fans",
            "Air Conditioners",
            "Water Heaters",
            "Iron & Steamers",
            "Humidifiers & Dehumidifiers",
            "Smart Home Appliances"
        ]
    },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
});

export const Product = mongoose.model("Product", productSchema);
