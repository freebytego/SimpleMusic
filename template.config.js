// SimpleMusic v2 Config

module.exports = {
  commands: {
    // Colours = The colours to display on the embed messages depending on the response type.
    colors: {
      ok: "0x9b59b6",
      warn: "0xf39c12",
      error: "0xe74c3c"
    },

    // Whitelist = If a Guild is added with a list of roles, it will only let members in *that* guild with the role use commands.
    whitelist: {
      enabled: true,
      guilds: {
        // For all roles in a whitelisted guild, set to '*'
        "guild-id": ["some-role-id", "another-role-id"],
        "guild-2-id": ["not-the-same-role-id"]
      }
    }
  },

  music: {
    // Max Song Time = The maximum allowed time from a song to be added to the queue.
    maxSongTime: 3600,
    // Volume = The volume to use to play music, Can only range from 0 - 200.
    volume: 25,
    // Disconnect Time = The time (milliseconds) to wait to disconnect when there is no stream playing. 0 = Instant disconnect.
    disconnectTime: 600000
  },

  credentials: {
    // Discord = A Discord token used to login to Discord. | Obtainable from the Discord Developer Portal.
    discord: "",
    // Youtube = YouTube API v3 key used to obtain search results for video querys | Obtainable from the Google Developers Console.
    youtube: ""
  }
};