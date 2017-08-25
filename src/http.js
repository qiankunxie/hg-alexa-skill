var request = require('superagent');

request
   .get('https://gort.highground.com/svc/FeedItem/GetCompanyFeed')
   .set('Accept-Language', 'en')
   .set('Cookie', ['gort.UserToken=s%3A93f93d40-89aa-11e7-b2eb-731bb4221219.oyadN6zeoyaGcUyvT9xiY89VkiJVx4BZBog%2BznhncIc'])
   .end(function(err, result){
        // test the result
        console.log(result);
   });
