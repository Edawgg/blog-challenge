const { User } = require("../models")

const userData = [
  {
    username: "ghost1",
    email: "ghost1@afterlife.com",
    password: "12356",
  },
  {
    username: "ghost2",
    email: "ghost2@afterlife.com",
    password: "12356",
  },
  {
    username: "ghost3",
    email: "ghost3@afterlife.com",
    password: "12356",
  },
  {
    username: "ghost4",
    email: "ghost4@afterlife.com",
    password: "12356",
  },
  {
    username: "ghost5",
    email: "ghost5@afterlife.com",
    password: "12356",
  },
  {
    username: "ghost6",
    email: "ghost6@afterlife.com",
    password: "12356",
  },
  {
    username: "ghost7",
    email: "ghost7@afterlife.com",
    password: "12356",
  },
  {
    username: "ghost8",
    email: "ghost8@dogmail.com",
    password: "12356",
  },
  {
    username: "ghost9",
    email: "ghost9@afterlife.com",
    password: "12356",
  },
  {
    username: "ghost10",
    email: "ghost10@afterlife.com",
    password: "12356",
  },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers