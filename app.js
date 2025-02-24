// import 'dotenv/config'
// import { App } from '@slack/bolt';

require('dotenv').config()
const { App } = require('@slack/bolt');


// Initialize your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,       // e.g. 'xoxb-123...'
  signingSecret: process.env.SLACK_SIGNING_SECRET  // e.g. 'abc123...'
});

// Listen for the slash command `/hello`
app.command('/hello', async ({ command, ack, say }) => {
  // Acknowledge the command to avoid timeouts
  await ack();

  // Respond in the channel
  await say(`Hello, <@${command.user_id}>!`);
});

// Start the Bolt app (defaults to port 3000)
(async () => {
  const port = process.env.PORT || 3000;
  await app.start(port);
  console.log(`⚡️ Bolt app is running on port ${port}!`);
})();