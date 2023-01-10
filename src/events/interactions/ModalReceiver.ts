import Event from "~/structures/modules/Event";
import Bot from "~/structures/client/Bot";
import {ModalSubmitInteraction} from "discord.js";
import {Modal} from "~/structures/modules/Component";

module.exports = new Event('interactionCreate', (bot: Bot, interaction: ModalSubmitInteraction) => {
    if (!interaction.isModalSubmit()) return

    const modal: Modal | undefined = bot.modals.get(interaction.customId)

    if (!modal) return
    modal.callback(bot, interaction)
})
