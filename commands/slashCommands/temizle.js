module.exports = {
    name: 'temizle',
    description: 'Belirtilen kadar mesajı siler',
    async execute(interaction) {
      const amount = interaction.options.get('sayi').value;
      if (amount <= 0 || amount > 100) {
        return interaction.reply({
          content: '1 ile 100 arasında bir sayı girin',
          ephemeral: true
        });
      }
  
      try {
        await interaction.channel.bulkDelete(amount, true);
        await interaction.reply({
          content: `${amount} adet mesaj silindi`,
          ephemeral: true
        });
      } catch (error) {
        console.error(error);
        return interaction.reply({
          content: 'Bir hata oluştu ve mesajlar silinemedi',
          ephemeral: true
        });
      }
    },
  };
    