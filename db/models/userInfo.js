const client = require('../client')

const createUserInfo = async ({
  userId,
  online = true,
  email = 'example@email.com',
}) => {
  try {
    const { rows: userInfo } = await client.query(
      `
      INSERT INTO user_info("userId", online, email)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
      [userId, online, email]
    )

    return userInfo
  } catch (err) {
    throw err
  }
}

module.exports = { createUserInfo }
