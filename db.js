// db.js 
const { MongoClient } = require('mongodb'); // this line tells this file, that we need mongodb for this

// Replace with your actual MongoDB connection string
const uri = 'mongodb+srv://murphynathan2005:4h44D8EvXAZRmB70@cluster0.vn4jl.mongodb.net/Test?retryWrites=true&w=majority&appName=Cluster0'

async function withDb(operation) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("Test");
    await operation(db);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

module.exports = { withDb };