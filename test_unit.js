const sequelize = require('./database')
const User = require("./models/User");


async function find_user(val){
		let user = await User.findOne({
		  where: {
		    Mobile : val
		  }
		})
		return user;
	}

console.log(find_user("919030380074"));
