# Host Class for connecting to Redis Cloud

## installation
`$ npm install redishostsync`

## How to use
Include npm Package `redishostsync` in you JS file
`const redishostsync = require('redishostsync');`

### Creating Instance

`RedisHostSync` is a class with Sync Constructor, and the Constructor return a instance of Promise
The constructrs also connects to Redis DB, using url & password in the parameter

Constructor : RedisHostSync(<string>url, <string>password)
```
(async()=>{
  //replace <redis endpoint>, with endpoint provied to you in Redis cloud
  //replace <password>, with password of your Redis DB
  try{
    const client = await new redishostsync.RedisHostSync("redis://<redis endpoint>", "<password>")
  }catch(e){
    console.error(e)
  }
})()
```

**Or**

Use Callback function with : RedisHost( <string>url, <string>password, <function>callback(error, <RedisHostSync>client))

```
redishostsync.RedisHost(<string>url, <string>password, (error, client)=>{
    if(error) { 
      //deal with error
      return
    }
    //client is instance of RedisHostSync
})
```

## Complete Example
```
const redishostsync = require('redishostsync');
console.log(RedisHostSync);
async function test() {
  try {
    console.log("Connecting ...")
    const client = await new redishostsync.RedisHostSync("redis://<redis endpoint>", "<password>") //create Instance of RedisHostSync class and connect to Redis Cloud
    console.log("Connected")
    const KEY = "key"
    const rand = Math.random()
    await client.set(KEY, rand) //
    console.log(`added { ${KEY}, ${rand} }`)
    console.log(`retrived { ${KEY}, ${await client.get("key")} }`)
    console.log("DisConnecting ...")
    await client.disconnect()
    console.log("DisConnected")
  } catch (e) {
    console.error(e);
  }
}

test()
```
