const client = require('../client')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const createUser = async ({ username, password, admin = false }) => {
  const hashPass = await bcrypt.hash(password, SALT_ROUNDS)
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(username, password, admin)
      VALUES($1, $2, $3)
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
    `,
      [username, hashPass, admin]
    )
    delete user.password
    return user
  } catch (err) {
    throw err
  }
}

const getUser = async ({ username, password }) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [username]
    )

    if (!user) {
      throw new Error({
        name: 'UserDoesNotExist',
        message: 'User does not exist',
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new Error({
        name: `IncorrectPassword`,
        message: `Incorrect password, please try again`,
      })
    }

    delete user.password
    return user
  } catch (err) {
    throw err
  }
}

module.exports = {
  createUser,
  getUser,
}
