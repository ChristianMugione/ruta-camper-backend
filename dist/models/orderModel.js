"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    items: {
        type: [
            {
                title: {
                    type: String,
                    required: true
                },
                id: {
                    type: mongoose_1.Schema.Types.ObjectId,
                    ref: "Products",
                    required: true
                },
                description: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
            }
        ],
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
const Order = (0, mongoose_1.model)("Orders", OrderSchema);
exports.default = Order;
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
