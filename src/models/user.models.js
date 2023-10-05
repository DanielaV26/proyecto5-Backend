import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]{4,30}$/.test(v)
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    identification: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
        validate: {
            validator: function (v) {
                return /^[0-9]{1,3}$/.test(v)
            }
        }
    },
    gender: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z]{4,20}$/.test(v)
            }
        }
    },
    region: {
        type: String,
        required: false,
    },
    commune: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
})

export const User = mongoose.model('User', userSchema);

