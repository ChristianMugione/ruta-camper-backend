import { model, Model, Schema } from "mongoose";

export interface IProduct {
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
  featured: boolean;
}

const ProductSchema = new Schema<IProduct>({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: false 
  },
  price: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  thumbnail: { 
    type: String, 
    required: false 
  },
  images: { 
    type: [String], 
    required: false
  },
  featured: { 
    type: Boolean, 
    required: true 
  }
});

const Products: Model<IProduct> = model("Products", ProductSchema);

export default Products;