const client = require('./client')

module.exports = {
  client,
  ...require('./models/users'),
  ...require('./models/comments'),
  ...require('./models/userInfo'),
}
