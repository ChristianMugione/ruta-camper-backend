import { model, Model, Schema, Types } from "mongoose";

interface IItem {
  title: string;
  id: number;
  description: string;
  price: number;
  quantity: number;
}

interface IShippingDetail {
  name: string;
  address: string;
  location: string;
  phone: string;
}

export interface IOrder {
  date: Date;
  userId: Types.ObjectId;
  items: IItem[];
  price: number;
  shippingDetail: IShippingDetail;
  total: number;
  status: string;
}

const OrderSchema = new Schema<IOrder>({
  date: { 
    type: Date, 
    default: Date.now, 
  },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: "Users",
    required: true 
  },
  items: {
    type: [
    {
      image: {
        type: String,
        required: true
      },
      title: { //title
        type: String, 
        required: true 
      },
      id: { //index
        type: Schema.Types.ObjectId, 
        ref: "Products",
        required: true 
      },
      description: { //title
        type: String, 
        required: true 
      },
      price: { //price
        type: Number, 
        required: true 
      },
      quantity: { //quantity
        type: Number, 
        required: true 
      },
    }],
    required: true,
  },
  price: { 
    type: Number, 
    required: true 
  },
  shippingDetail: {
    name: { 
      type: String, 
      required: true 
    },
    address: { 
      type: String, 
      required: true 
    },
    location: { 
      type: String, 
      required: true 
    },
    phone: { 
      type: String, 
      required: true 
    },
  },
  total: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    default: 'pending',
    required: true 
  },
});

const Order: Model<IOrder> = model("Orders", OrderSchema);

export default Order;

//create a example of order

// {
//   date: new Date(),
//   userId: '',
//   items: [],
//   price: 0,
//   shippingDetail: {
//     name: '',
//     address: '',
//     location: '',
//     phone: '',
//   },
//   total: 0,
//   status: 'pending',
// }