import Bot from "~/structures/client/Bot";
import Command from "~/structures/modules/Command";
const Ascii = require('ascii-table')

module.exports = (bot: Bot) => {
    const commands: string[] = require('~/handlers/FileHandler')('./src/commands/', true)
    const table = new Ascii('Commandes')

    if (commands.length > 0) {
        commands.forEach((path: string) => {
            const command: Command = require(`~/commands/${path}`)

            if (!command.name) return table.addRow('?', command.description ?? '?', command.category, '🔸 ÉCHOUÉ', `Nom de la commande manquant.`)
            if (!command.description) return table.addRow(command.name, '?', command.category, '🔸 ÉCHOUÉ', `Description de la commande manquante.`)
            if (!command.callback) return table.addRow(command.name, command.description, command.category, '🔸 ÉCHOUÉ', `Fonction d'exécution de la commande manquante.`)

            bot.registerCommand(command)
            table.addRow(command.name, command.description, command.category, '🔹 SUCCÈS')
        })

        return console.log(table.toString())
    }

    table.addRow('Aucune donnée !')
    console.log(table.toString())
}
