import {Client, Collection, ColorResolvable} from 'discord.js'
const { token } = process.env

export default class Bot extends Client {
    color: ColorResolvable
    events: Collection<string, any>
    commands: Collection<string, any>

    constructor(color?: ColorResolvable) {
        super({ intents: 32767})

        this.color = color || '#000000'
        this.events = new Collection()
        this.commands = new Collection()
    }

    up() {
        // LOAD COMPONENTS
        // LOAD COMMANDS
        // LOAD EVENTS

        this.login(token)
            .then(_ => {
                console.log(`Logged in!`)
            })
            .catch((err: Error) => {
                console.log(`An error occurred!`, err)
            })
    }
}
