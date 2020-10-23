const express = require("express")
const cors = require('cors')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const {ObjectId} = require('mongodb')
const uri = "mongodb+srv://liefe-admin:olx-hackaton@cluster0.dzrbk.mongodb.net/liefe?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(express.json())
app.use(cors())

const collectionExists = async (collectionName, db) => {
  const collectionExists = await db.listCollections({
    name: collectionName
  }).toArray();

  return collectionExists.length > 0;
}

const validate = {
  'users': (data) => ({
    email: data.email
  }),
  'deliveries': null
}

client.connect(err => {
  const db = client.db("liefe");
  const APP_PORT = 5001;

  app.listen(APP_PORT, () => {
    console.log(`Liefe API Listening on port ${APP_PORT}`);
  });

  app.get('/', (req, res) => {
    res.send("Welcome to liefe-api");
  })

  app.get('/:collectionName', async (req, res) => {
    try {
      const collectionName = req.params.collectionName;
      const hasCollection = await collectionExists(collectionName, db)
      if (!hasCollection) {
        return res.send("Collection does not exist");
      }

      const collection = db.collection(collectionName);
      const items = await collection.find().toArray();
      return res.send(items);
    } catch (err) {
      return res.send(err);
    }
  })

  app.get('/:collectionName/:email', async (req, res) => {
    try {
      const collectionName = req.params.collectionName;
      const hasCollection = await collectionExists(collectionName, db)
      if (!hasCollection) {
        return res.send("Collection does not exist");
      }

      const email = req.params.email;
      const collection = db.collection(collectionName);
      const items = await collection.find({
        email: email
      }).toArray();

      if (items.length === 0) {
        return res.status(404).send("Item does not exist");
      }

      return res.send(items);
    } catch (err) {
      return res.send(err);
    }
  })

  app.delete('/:collectionName/:id', async (req, res) => {
    try {
      const { collectionName, id } = req.params;
      const hasCollection = await collectionExists(collectionName, db)
      if (!hasCollection) {
        return res.send("Collection does not exist");
      }
      const collection = db.collection(collectionName);
      const item = await (await collection.findOneAndDelete({ _id: new ObjectId(id) }));

      return res.send(item)
    } catch (err) {
      return res.send(err)
    }

  })

  app.post('/:collectionName', async (req, res) => {
    try {
      const collectionName = req.params.collectionName;

      const hasCollection = await collectionExists(collectionName, db)
      if (!hasCollection) {
        return res.status(404).send({
          message: "Collection does not exist"
        });
      }

      const collection = db.collection(collectionName);
      const body = req.body;

      const validator = validate[collectionName]

      const item = validator && await collection.findOne(validator(body))

      if (item) {
        console.log("Item already exists");
        return await res.status(500).send({
          message: "Item already exits",
          payload: item
        })
      }

      const result = await collection.insertOne(body);

      if (result) {
        console.log("Item created");
        return await res.send({
          message: "Item created",
          payload: result.ops[0]
        })
      }
    } catch (err) {
      return await res.send({
        message: err.message,
        payload: null
      })
    }
  })
  // client.close();
});


const server = require("http").createServer();
const io = require("socket.io")(server);
const CHAT_PORT = 5000;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
});

server.listen(CHAT_PORT, () => {
  console.log(`Liefe Chat Listening on port ${CHAT_PORT}`);
});