const client = require('./client')
const { createComment, createUser, createUserInfo } = require('./')

const dropTables = async (test) => {
  try {
    console.log(`starting to drop tables`)
    await client.query(`
      DROP TABLE IF EXISTS comments;
      DROP TABLE IF EXISTS user_info;
      DROP TABLE IF EXISTS users;
    `)
    console.log(`Dropped all tables`)
  } catch (err) {
    throw err
  }
}

const createTables = async () => {
  try {
    console.log(`Starting to create tables`)
    await client.query(`
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        admin BOOLEAN DEFAULT FALSE
      );

      CREATE TABLE comments(
        id SERIAL PRIMARY KEY,
        "userId" INT REFERENCES users(id) NOT NULL,
        "itemId" VARCHAR(255) UNIQUE NOT NULL, 
        description TEXT NOT NULL
      );

      CREATE TABLE user_info(
        id SERIAL PRIMARY KEY,
        "userId" INT REFERENCES users(id) NOT NULL,
        online BOOLEAN DEFAULT FALSE,
        email VARCHAR(255) UNIQUE
      );
    `)
    console.log('finish creating tables')
  } catch (err) {
    throw err
  }
}

//? ********************************** inital db setup ********************************

const createInitUsers = async () => {
  try {
    const initUsers = [
      { username: 'theBoss', password: 'imTheBoss', admin: false },
      { username: 'billowman', password: 'myPassword', admin: false },
      { username: 'soggySnax', password: 'wetCrackers', admin: false },
    ]

    console.log('creating Inital Users')
    const users = await Promise.all(initUsers.map(createUser))
    console.log('users have been created', users)
  } catch (err) {
    throw err
  }
}

const createInitComments = async () => {
  try {
    const initComments = [
      {
        userId: 1,
        itemId: '17f69448ceel0i0a57bokoqz409yb',
        description: 'Best arrows in the game',
      },
      {
        userId: 2,
        itemId: '17f695dc715l0i0a59pf1x5fb5112r',
        description: 'Bone arrows suck!',
      },
      {
        userId: 3,
        itemId: '17f69878c4al0i1ul0i7dsfou8igrk',
        description: 'My favorite boss!',
      },
    ]

    console.log('creating Inital Comments')
    const comments = await Promise.all(initComments.map(createComment))
    console.log('initial comments created :>> ', comments)
  } catch (err) {
    throw err
  }
}

const createInitUserInfo = async () => {
  try {
    const initUserInfo = [
      { userId: 1, online: false, email: 'ja@gavzi.cu' },
      { userId: 2, online: false, email: 'ez@navbor.edu' },
      { userId: 3, online: false, email: 'da@fe.jo' },
    ]

    console.log('creating Inital UserInfo')
    const userInfo = await Promise.all(initUserInfo.map(createUserInfo))
    console.log('init user info created :>> ', userInfo)
  } catch (err) {
    throw err
  }
}

const rebuildDb = async () => {
  try {
    client.connect()
    await dropTables()
    await createTables()
    await createInitUsers()
    await createInitComments()
    await createInitUserInfo()
  } catch (err) {
    throw err
  }
}

module.exports = { rebuildDb }
