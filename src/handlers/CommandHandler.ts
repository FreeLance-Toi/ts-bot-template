import Bot from "~/structures/client/Bot";
import Command from "~/structures/modules/Command";
const Ascii = require('ascii-table')

module.exports = (bot: Bot) => {
    const commands: string[] = require('~/handlers/FileHandler')('./src/commands/', true)
    const table = new Ascii('Commandes')

    if (commands.length > 0) {
        commands.forEach((path: string) => {
            const command: Command = require(`~/commands/${path}`)

            if (!command.name) return table.addRow()
            if (!command.description) return table.addRow()
            if (!command.callback) return table.addRow()

            bot.registerCommand(command)
        })
    }
}
