const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Botun gecikme süresini gösterir.'),
  async execute(interaction) {
    await interaction.reply(`Pong! Bot gecikme süresi: ${Date.now() - interaction.createdTimestamp}ms.`);
  },
};
