// /api/new-meetup
import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mycluster.xq6fs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: 'Successfully a new meetup was created' });
  }
};

export default handler;
