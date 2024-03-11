const db = require("../db/dbConfig.js");

const getAllWinners = async () => {
  try {
    const allWinners = await db.any('SELECT * FROM "oscarWinners2024"');
    return allWinners;
  } catch (error) {
    return error;
  }
};

const getOneWinner = async (winnerId) => {
  try {
    const oneWinner = await db.one(
      'SELECT * FROM "oscarWinners2024" WHERE id=$1',
      winnerId
    );

    return oneWinner;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllWinners, getOneWinner };