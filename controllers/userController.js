const User = require('../models/userModel')

exports.addUser = async (req, res) => {
	try {
		const user = await User.create(req.body)
		res.status(200).json(user)
	} catch (error) {
		console.log(error.mesage)
		res.status(500).json({message: error.message})
	}
	
}

exports.getUsers = async (req, res) => {
	try {
		const user = await User.find({})
		res.status(200).json(user)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}

