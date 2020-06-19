const axios = require('axios');

module.exports = async function (context, req) {
    context.log('Webhook triggered from GitHub');

    axios.post(process.env.DISCORD_WEBHOOK, { "content": req.body.data.discord, "allowed_mentions": { "parse": ["everyone"] } }).then(res => {
        context.log("Successfully sent discord message")
    })
    axios.post(process.env.LINE_WEBHOOK, { text: req.body.data.line }).then(res => {
        context.log("Successfully sent line message")
    })
}