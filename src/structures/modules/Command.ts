import {ApplicationCommandOption} from "discord.js";

export default class Command {
    name: string
    category: string
    callback: Function
    description: string
    options: ApplicationCommandOption[]

    constructor(name: string, description: string, callback: Function, options?: ApplicationCommandOption[], category?: string) {
        this.name = name
        this.description = description
        this.callback = callback
        this.options = options ?? []
        this.category = category ?? 'Undefined'
    }
}
