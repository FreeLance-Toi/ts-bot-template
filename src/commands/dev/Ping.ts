import Command from "~/structures/modules/Command";
import Bot from "~/structures/client/Bot";
import {CommandInteraction} from "discord.js";

module.exports = new Command("ping", "Soliciter le bot et recevoir 'pong' en réponse.", async (bot: Bot, interaction: CommandInteraction) => {
    await interaction.reply({
        content: `Pong :ping_pong:`,
        ephemeral: true
    })
})
