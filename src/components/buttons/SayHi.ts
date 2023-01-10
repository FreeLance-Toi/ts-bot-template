import {Button, ButtonOptions} from "~/structures/modules/Component";
import Bot from "~/structures/client/Bot";
import {ActionRowBuilder, ButtonBuilder, ButtonInteraction} from "discord.js";

module.exports = new Button('say-hi', async (bot: Bot, interaction: ButtonInteraction) => {
    await interaction.reply({
        content: 'Hi :wave:',
        components: [
            new ActionRowBuilder<ButtonBuilder>().setComponents(require('~/components/buttons/SayHi').build())
        ],
        ephemeral: true
    })
}, new ButtonOptions('Say Hi'))
