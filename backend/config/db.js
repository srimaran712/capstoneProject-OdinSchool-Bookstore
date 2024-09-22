const Mongoose=require('mongoose')

//connecting to our mongodatabase atlas
 const connectionDB=async()=>{
  await Mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connected')
  }).catch((error)=>{
    console.log(error)
  })
}

module.exports={connectionDB}