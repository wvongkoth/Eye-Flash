var KEY = "de1fbac9951e420bab8989a8920e813a"
var SECRET = "fa9ea1be74ab4e23932f00db4bf26fd2"
var OAuth = require('oauth')

const datamuse = require('datamuse');

var imageResponseArray = []


const icon(word) {
    const imageHolder = [];
    var oauth = new OAuth.OAuth(
        'https://api.thenounproject.com',
        'https://api.thenounproject.com',
        KEY,
        SECRET,
        '1.0',
        null,
        'HMAC-SHA1'
    )
    oauth.get(
        'http://api.thenounproject.com/icons/' + word + '?limit_to_public_domain=1&limit=9',
        null,
        null,
        function (e, data, res) {
            if (e) {
                console.log("MY NAME IS BARRY ALLEN AND I AM THE FASTEST MAN ALIVE")
                console.error(e)
                return null
            }
            var wordJSONResponse = {
                "word": word,
                "images": []
            };

            if (JSON.parse(data).icons.length > 9) {
                for (i = 0; i < 9; i++) {
                    //console.log(JSON.parse(data).icons[i].preview_url);


                    wordJSONResponse.images.push(JSON.parse(data).icons[i].preview_url);

                }
            } else {
                for (i = 0; i < JSON.parse(data).icons.length; i++) {
                    //console.log(JSON.parse(data).icons[i].preview_url);
                    wordJSONResponse.images.push(JSON.parse(data).icons[i].preview_url);

                }

            }
            imageResponseArray.push(wordJSONResponse)
            //console.log(wordJSONResponse)
            console.log(imageResponseArray)

            return imageResponseArray;

        }
    )
}