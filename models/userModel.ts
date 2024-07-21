import { model, Model, Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

const UserSchema = new Schema<IUser>({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: false 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    required: false,
    default: 'user'
  }
});

const User: Model<IUser> = model("Users", UserSchema);

export default User;