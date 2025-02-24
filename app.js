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

app.command('/github-action', async({ command, ack, say }) => {
  await ack();

  // `command.text` contains whatever the user typed AFTER the slash command
  const userInput = command.text.trim(); // e.g., "production"

  // For multiple parameters, you can split by space or parse however you want
  const [githubAction] = userInput.split(' ');

  if (!githubAction) {
    await say('You need to pass a github action name i.e. `/github-action hello-world`');
  } else if (githubAction === 'hello-world') {
    await say('TODO: Run the hello-world github action');
  } else {
    await say(`The github action you provided, ${githubAction}, is not supported`);
  }
});

// Start the Bolt app (defaults to port 3000)
(async () => {
  const port = process.env.PORT || 3000;
  await app.start(port);
  console.log(`⚡️ Bolt app is running on port ${port}!`);
})();