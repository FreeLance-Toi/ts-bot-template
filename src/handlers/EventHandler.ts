import Bot from "~/structures/client/Bot";
import Event from "~/structures/modules/Event";
const Ascii = require('ascii-table')

module.exports = (bot: Bot) => {
    const events: string[] = require('~/handlers/FileHandler')('./src/events/', true)
    const table = new Ascii('Événements')

    if (events.length > 0) {
        events.forEach((path: string) => {
            const event: Event = require(`~/events/${path}`)

            if (!event.name) return table.addRow('?', event.once ? '✔' : '❌', '🔸 ÉCHOUÉ', `Nom de l'événement manquant.`)
            if (!event.callback) return table.addRow('', event.once ? '✔' : '❌', '🔸 ÉCHOUÉ', `Fonction d'exécution manquante.`)

            bot.registerEvent(event)
            table.addRow('', event.once ? '✔' : '❌', '🔹 SUCCÈS')
        })

        return console.log(table.toString())
    }

    table.addRow('Aucun donnée !')
    console.log(table.toString())
}
