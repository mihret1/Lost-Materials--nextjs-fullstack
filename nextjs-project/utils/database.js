import mongoose from 'mongoose'

let isConnected=false

export const connectToDB=async()=>{
        mongoose.set('strictQuery',true)

        if(isConnected){
            console.log('mongodb already connected')
              return;
        }

        try{
            await mongoose.connect(process.env.MONGODB_URI,{  
                    dbName:"lostMaterial",
                    useNewUrlParser:true,
                    useUnifiedTopology:true})
                 
                isConnected=true
                console.log(' MongoDb is now connected')
       }catch(error){
            console.log(error)
        }
}