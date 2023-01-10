import { Client, Collection, ColorResolvable } from 'discord.js'
import {Button, Component, Modal} from '~/structures/modules/Component'
import Command from "~/structures/modules/Command";
import Event from "~/structures/modules/Event";
const { TOKEN } = process.env

export default class Bot extends Client {
    color: ColorResolvable
    commands: Collection<string, Command>
    events: Collection<string, Event>
    buttons: Collection<string, Button>
    modals: Collection<string, Modal>

    constructor(color?: ColorResolvable) {
        super({ intents: 32767})

        this.color = color || '#000000'
        this.events = new Collection()
        this.commands = new Collection()
        this.buttons = new Collection()
        this.modals = new Collection()
    }

    registerComponent(component: Component): string {
        if (component instanceof Button) {
            this.buttons.set(component.id, component)
            return "Button"
        } else if (component instanceof Modal) {
            this.modals.set(component.id, component)
            return "Modal"
        }
        return "-"
    }

    registerEvent(event: Event) {
        this.events.set(event.name, event)
    }

    registerCommand(command: Command) {
        this.commands.set(command.name, command)
    }

    up() {
        require('~/handlers/ComponentHandler')(this)
        require('~/handlers/CommandHandler')(this)
        require('~/handlers/EventHandler')(this)

        this.login(TOKEN)
            .then(_ => {
                console.log(`Logged in!`)
            })
            .catch((err: Error) => {
                console.log(`An error occurred!`, err)
            })
    }
}
