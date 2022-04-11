const {Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Book extends Model {}

Book.init({
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    summary:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    isbn:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    genre:{
        
    },
    author:{

    }
})