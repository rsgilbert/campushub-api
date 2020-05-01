const bcrypt = require('bcryptjs')

bcrypt.hash("1", 10).then(v => console.log(v))