import Event from "~/structures/modules/Event";
import Bot from "~/structures/client/Bot";
import {ButtonInteraction} from "discord.js";
import {Button} from "~/structures/modules/Component";

module.exports = new Event('interactionCreate', (bot: Bot, interaction: ButtonInteraction) => {
    if (!interaction.isButton()) return

    const button: Button | undefined = bot.buttons.get(interaction.customId)

    if (!button) return
    button.callback(bot, interaction)
})
