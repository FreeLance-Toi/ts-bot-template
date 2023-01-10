import Event from "~/structures/modules/Event";
import Bot from "~/structures/client/Bot";
import {CommandInteraction} from "discord.js";
import Command from "~/structures/modules/Command";

module.exports = new Event('interactionCreate', (bot: Bot, interaction: CommandInteraction) => {
    if (!interaction.isCommand()) return

    const command: Command | undefined = bot.commands.get(interaction.commandName)

    if (!command) return
    command.callback(bot, interaction)
})
