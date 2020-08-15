class RedisHostSync {
  constructor(url, password) {
    const redis = require('redis');
    const this_class = this
    return new Promise( (resolve, reject) => {
      try{
        this_class.client = redis.createClient({url:url});
        this_class.client.auth(password, ()=>{
          resolve(this)
        })
      }catch(e){
        reject(e);
      }
    });
  }

  get(key){
    const this_class = this
    return new Promise(function(resolve, reject) {
      try {
        this_class.client.get(key, (err, reply)=>{
          if(err) reject(err)
          resolve(reply)
        })
      } catch (e) {
        reject(e)
      }
    });
  }

  set(key, value){
    const this_class = this
    return new Promise(function(resolve, reject) {
      try {
        this_class.client.set(key, value, (err)=>{
          if(err) reject(err)
          resolve()
        })
      } catch (e) {
        reject(e)
      }
    });
  }

  disconnect(){
    const this_class = this
    return new Promise((resolve, reject) => {
      try{
        this_class.client.quit(()=>{
          resolve()
        })
      }catch(e){
        reject(e)
      }
    });
  }
}

module.exports = RedisHostSync
