const Following = require('../models/Following');
const User = require('../models/User');
const axios = require('axios');

const mutualFollowers = async (req, res) => {
    const {username} = req.body;

    try{
        let user = await User.findOne({login: username});
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }


        const followersResponse = await axios.get(user.followers_url);
        const followingResponse = await axios.get(user.following_url.replace('{/other_user}', ''));
    
        const followers = followersResponse.data;
        const following = followingResponse.data;
    
        const mutualFollowers = followers.filter(follower =>
          following.some(followingUser => followingUser.login === follower.login)
        );
    
        for (const friend of mutualFollowers) {
          const friendUser = await User.findOne({ login: friend.login });
          if (friendUser) {
            await Following.updateOne(
              { userId: user._id, friendId: friendUser._id },
              { $set: { userId: user._id, friendId: friendUser._id } },
              { upsert: true }
            );
          }
        }
    
        res.status(200).json({ mutualFollowers: mutualFollowers.map(f => f.login) });
    }catch(error){
        console.log(error);
    }
};




module.exports = mutualFollowers