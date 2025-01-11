const User = require('../models/User');


// search for users by username, location, or id
const searchUsers = async (req, res) => {
    
    const { username, location, id } = req.query;
    const query = {};
    if (username) query.login = username;
    if (location) query.location = location;
    if (id) query.id = id;

    try {
        const users = await User.find(query).where('soft_delete').equals(false);
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

// soft delete a user by username
const softDeleteuser = async (req, res) => {
    const login = req.params.username;

    try{
        const user = await User.findOneAndUpdate({login: login}, {soft_delete: true});
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }
        res.status(200).json({message: 'User soft-deleted successfully', user: user.login});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
};

// update user information by username (location, blog, bio, email, twitter_username)
const updateUserInfo = async (req, res) => {
    const { username } = req.params;
    const { location, blog, bio, email, twitter_username } = req.body;
  
    try {
      const user = await User.findOneAndUpdate(
        { login: username },
        { location, blog, bio, email, twitter_username },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}


const fetchUserSorted = async (req, res)=>{
    const { sortBy } = req.query;

    try {
      const users = await User.find()
        .sort(sortBy ? { [sortBy]: 1 } : { created_at: -1 }); // Default sort by created_at in descending order
  
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const fetchUsers = async (req, res) => {
    const { username } = req.body;
  
    try {
      const user = await User.findOne({ login: username });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({message:user});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

module.exports = { searchUsers, softDeleteuser, updateUserInfo, fetchUserSorted, fetchUsers };