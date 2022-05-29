const Users = require("../models/userModel");

const userCtrl = {
    getUser: async (req, res) => {
        try {
            const user = await Users.findOne({ _id : req.params.id})
            .select("-password")
            if(!user) return res.status(500).json({ msg: "No user Exists" })
            res.json({ user })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updateUser: async (req,res) =>{
        try {
            
        const { fullName, story, phone, address } = req.body;
            if(!fullName)  return res.status(500).json({msg: "Fullname is requires"})

            await Users.findOneAndUpdate({_id: req.user._id},{
                fullName, story, phone, address
            }) 

            res.json({msg:"update success"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = userCtrl;