import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: Schema.Types.String
    }
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel