# Host Class for connecting to Redis Cloud

## installation
`$ npm install redishostsync`

## How to use
Include npm Package `redishostsync` in you JS file
```
const RedisHostSync = require('redishostsync');
console.log(RedisHostSync);
async function test() {
  try {
    console.log("Connecting ...")
    const client = await new RedisHostSync.RedisHostSync("redis://<redis endpoint>", "<password>")
    console.log("Connected")
    const KEY = "key"
    const rand = Math.random()
    await client.set(KEY, rand)
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
