var KEY = "de1fbac9951e420bab8989a8920e813a"
var SECRET = "fa9ea1be74ab4e23932f00db4bf26fd2"
var OAuth = require('oauth')

const datamuse = require('datamuse');

var imageResponseArray = []


const getImages = {
    getIcons: (word) => {
        const imageHolder = [];
        var oauth = new OAuth.Oauth(
            'https://api.thenounproject.com',
            'https://api.thenounproject.com',
            KEY,
            SECRET,
            '1.0',
            null,
            'HMAC-SHA1'
        )
        oauth.get(
            `http://api.thenounproject.com/icons/${word}?limit_to_public_domain=1&limit=9`,
            null,
            null,
            (e, data, res) => {
                if (e) {
                    return e
                }
                const wordJSONResponse = {
                    "word": word,
                    "images": []
                };

                if (JSON.parse(data).icons.length > 9) {
                    for (i = 0; i < 9; i++) {
                        wordJSONResponse.images.push(JSON.parse(data).icons[i].preview_url);
                    }
                } else {
                    for (i = 0; i < JSON.parse(data).icons.length; i++) {
                        wordJSONResponse.images.push(JSON.parse(data).icons[i].preview_url);
                    }
                }
                return wordJSONResponse;
            }
        )
    }
}

module.exports = getImages;