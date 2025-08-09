module.exports = userRegsitration = (req,res) =>{
    console.log("User Registration Data", req.body)

    res.status(200).json({message:"Hello"})
}