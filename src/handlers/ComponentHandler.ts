import {Component} from "~/structures/modules/Component";
import Bot from "~/structures/client/Bot";

const Ascii = require('ascii-table')

module.exports = (bot: Bot) => {
    const components: string[] = require('./FileHandler')('./src/components/', true)
    const table = new Ascii('Components')

    if (components.length > 0) {
        components.forEach((path: string) => {
            const component: Component = require(`~/components/${path}`)

            const type: string = bot.registerComponent(component)

            if (!component.id) return table.addRow('?', type, '🔸 ÉCHOUÉ', `ID du composant manquant.`)
            table.addRow(component.id, type, '🔹 SUCCÈS')
        })

        return console.log(table.toString())
    }

    table.addRow('Aucune donnée')
    console.log(table.toString())
}
