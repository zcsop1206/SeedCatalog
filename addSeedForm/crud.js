import seed from ""
const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://aditbhargava:nJsOjDvekE0Qn97T@seedcatalogcluster.4ijiqfq.mongodb.net/?retryWrites=true&w=majority";
   
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

        // Create a single new listing
        await createSeed(client,
            seed.seedDetails
        );

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Create a new Airbnb listing
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object} newSeed The new listing to be added
 */
async function createSeed(client, newSeed){
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne for the insertOne() docs
    const result = await client.db("seeds").collection("seeds").insertOne(newSeed);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}