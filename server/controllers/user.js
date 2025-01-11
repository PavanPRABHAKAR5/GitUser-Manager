const User = require('../models/User');
const axios = require('axios');
const {body, validationResult} = require('express-validator');


const checkUserExists = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {

        let username = req.body.username;
        let user = await User.findOne({login: username});

        if(user){
            return res.status(200).json({message: 'User already exists'});
        }

        const response = await axios.get(`https://api.github.com/users/${req.body.username}`);
        const data = response.data;
         user = new User({
            login: data.login,
            id: data.id,
            avatar_url: data.avatar_url,
            followers_url: data.followers_url,
            following_url: data.following_url,
            repos_url: data.repos_url,
            name: data.name,
            company: data.company,
            blog: data.blog,
            location: data.location,
            email: data.email,
            hireable: data.hireable,
            bio: data.bio,
            twitter_username: data.twitter_username,
            public_repos: data.public_repos,
            public_gists: data.public_gists,
            followers: data.followers,
            following: data.following,
            created_at: data.created_at,
            updated_at: data.updated_at
        });

        let userData = await User.create(user);
        return res.status(200).json({message: userData});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'An error occurred'});
    }
}

module.exports = checkUserExists;