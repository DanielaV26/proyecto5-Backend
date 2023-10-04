import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z]{1,30}$/.test(v)
            }
        }
    },
    lastname: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z]{1,30}$/.test(v)
            }
        }
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
        validate: {
            validator: function (v) {
                return /^[A-Z0-9]{9,10}$/.test(v)
            }
        }
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
        required: false,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z]{5,10}$/.test(v)
            }
        }
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
        validate: {
            validator: function (v) {
                return /^[a-zA-Z]{4,30}$/.test(v)
            }
        }
    },
    commune: {
        type: String,
        required: false,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z]{4,20}$/.test(v)
            }
        }
    },
    address: {
        type: String,
        required: false,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]{2,50}$/.test(v)
            }
        }
    },
    phone: {
        type: Number,
        required: false,
        validate: {
            validator: function (v) {
                return /^[0-9]{9,11}$/.test(v)
            }
        }
    },
})

export const User = mongoose.model('User', userSchema);

