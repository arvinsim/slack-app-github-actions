# Slack App Github Actions

## Setup Slack App

### Create App

1. Create an app in [Slack Apps Dashboard](https://api.slack.com/apps)

### Configure Slash Command

1. Navigate to `Features -> Slash Commands`
2. Click Create New Command:
    - Command: /hello
    - Request URL: Your app’s URL (e.g., <https://yourdomain.com/hello>), but if you’re running locally you can use a tool like ngrok to expose <http://localhost:3000>.
    - Short Description: “Says hello”
    - Usage Hint: e.g. [nothing needed]
3. Click Save.

### Add scopes

1. Navigate to `Features -> OAuth & Permissions -> Scopes`
2. In Bot token scopes, add these scopes
    - `chat:write`
    - `channel:read`

### Get bot token and signing secret

1. Navigate to `Features -> OAuth & Permissions -> OAuth Tokens`
2. Install the app to workspace you want it to be in
3. Copy the `Bot User OAuth Token` into your `.env` file

### Get the signing secret

1. Navigate to `Basic Information -> App Credentials`
2. Copy the signing secret into your `.env` file

## Running stuff

### Run the app

`node app.js`

### Setup request url for testing

1. Run ngrok, `ngrok http <PORT>`
2. Copy the static url,
3. Navigate to `Features -> Slash Commands`
4. Edit the Slash Command and set the request url to `<static url>/slack/events`
