const translate = require('Google-translate-API');

const translateObject = {
    translateMe: (phrase, language) => {
        return translate(phrase, {to: language})
        // .then((res) => {
        //     return res.text;
        // }).catch((e) => {
        //     return e;
        // });
    }
};
module.exports = translateObject;
