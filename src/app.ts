import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv'
import UserModel from './users';


dotenv.config()

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4700');
const DATABASE_URL = process.env.DATABASE_URL;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const clientPath = path.join(__dirname, '../', 'client/build')

app.use(express.static(clientPath));

app.get('/users', async (req, res) => {
  const users = await UserModel.find()
  return res.json({ data: users });
});

app.get('/*', (req, res) =>{
  res.sendFile(path.join(clientPath, 'index.html'))
})




app.listen(PORT, async () => {
  await mongoose.connect(`${DATABASE_URL}`)
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
