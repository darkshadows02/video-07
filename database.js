const { MongoClient }=require("mongodb");

const url="mongodb+srv://Darkshadows01:xG197ONgzQFC70Cy@darkshadows01.2dadx.mongodb.net/";

// making connection to the client.. 
const client =new MongoClient(url);
   const dbname="testing";

   // data to add in database
    const resdata={
           firstname:"deepak",
           secondname:"kalal",
           phonenumber:"8462438723"
    }

     

async function  main() {
     // connnect to the server
       await client.connect();
      console.log("connected sucessfully to server...");
    
      const db=client.db(dbname);
      const collection=db.collection('testdata')
     
      const insertResult = await collection.insertOne(resdata);
      console.log('Inserted documents =>', insertResult);
      
       
// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);
// const countdoucument=await collection.countDocuments({});
//     console.log(countdoucument);
//     const res=await collection.find({firstname:"piyali"}).countDocuments();
//     console.log(res);

  return "done";

}
 
main()
.then(console.log)
.catch(console.error)
.finally(()=>{client.close()});
