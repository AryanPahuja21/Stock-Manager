import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@aryanmongo.yd2rer7.mongodb.net/`;

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB server
        await client.connect();

        const database = client.db('aryan');
        const movies = database.collection('inventory');

        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const movie = await movies.findOne(query);

        console.log(movie);
        // Corrected syntax for NextResponse.json()
        return NextResponse.json({ "a": 34, "movie": movie });
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
