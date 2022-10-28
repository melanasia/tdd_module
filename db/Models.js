// Artists
// id of the data type UUID (universally unique identifier)
// name of the data type VARCHAR(255)

const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

const Artist = db.define('artist', {
    name: {
        type: DataTypes.VARCHAR(255)
    }
})

// Songs
// id of the data type UUID
// artistId of the data type UUID
// name of the data type VARCHAR(255)
// duration of the data type INTEGER


const Songs = db.define('songs', {
    artistId: {
        type: DataTypes.UUID
    },
    name: {
        type: DataTypes.VARCHAR(255)
    },
    duration: {
        type: DataTypes.INTEGER
    }
})

// Albums
// id of the data type UUID
// artistId of the data type UUID
// name of the data type VARCHAR(255)

const Albums = db.define('albums', {
    artistId: {
        type: DataTypes.UUID
    },
    name: {
        type: DataTypes.VARCHAR(255)
    },
})

// Tracks
// id of the data type UUID
// idx of the data type INTEGER (the order the songs appear in the album)
// songId of the data type UUID
// albumId of the data type UUID

const Tracks = db.define('tracks', {
    idx: {
        type: DataTypes.INTEGER,
    },
    songId: {
       type: DataTypes.VARCHAR(255) 
    },
    albumId: {
       type: DataTypes.VARCHAR(255) 
    },
})

// Associations:
// One to many relationship between Artists and Songs
    // An Artist can have multiple Songs
// One to many relationship between Artists and Albums
    // An Artist can have multiple Albums
// One to many relationship between Albums and Tracks
    // An Album can have multiple Tracks
    // A Song can be a Track on multiple Albums
    
Artist.hasMany(Songs);

Artist.hasMany(Albums);

Albums.hasMany(Tracks);

Songs.belongsTo(Albums, { as: 'tracks' });

