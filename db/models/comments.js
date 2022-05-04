const client = require('../client')

const createComment = async ({ userId, itemId, description }) => {
  try {
    const {
      rows: [comment],
    } = await client.query(
      `
      INSERT INTO comments("userId", "itemId", description)
      VALUES ($1, $2, $3)
      ON CONFLICT ("itemId") DO NOTHING
      RETURNING *;
    `,
      [userId, itemId, description]
    )
    return comment
  } catch (err) {
    throw err
  }
}

const getCommentsByItem = async (itemId) => {
  try {
    const { rows: comments } = await client.query(
      `
      SELECT *
      FROM comments
      WHERE "itemId" = $1;
    `,
      [itemId]
    )

    return comments
  } catch (err) {
    throw err
  }
}

module.exports = {
  createComment,
  getCommentsByItem,
}
