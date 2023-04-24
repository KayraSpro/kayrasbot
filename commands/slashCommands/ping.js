const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pingi ölçer'),

  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
