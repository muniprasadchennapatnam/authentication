const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../Models/Log")

const login = async (req, res) => {
  const { username, password } = req.body
 
  const user = await User.findOne({ username })
  console.log("user existed")
  
  if (!user) return res.status(400).json({ message: "User not found" })
 
   const isMatch = await bcrypt.compare(password, user.password)
  
  if ( !isMatch ) return res.status(400).json({ message: "Invalid password" })
  console.log("password match")
 
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_KEY,
    { expiresIn: "1h" }
  )

  res.json({ token })
  
}

module.exports = login


