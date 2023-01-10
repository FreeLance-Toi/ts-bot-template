import {ButtonBuilder, ButtonStyle, ModalBuilder} from "discord.js";

// * COMPONENTS * \\
export class Component {
    id: string
    callback: Function

    constructor(id: string, callback: Function) {
        this.id = id
        this.callback = callback
    }
}

// MODALS \\
export class Modal extends Component {
    constructor(id: string, callback: Function) {
        super(id, callback);
    }

    build(): ModalBuilder {
        const modal: ModalBuilder = new ModalBuilder()

        return modal
    }
}

// BUTTONS \\
export class ButtonOptions {
    label: string
    icon: string | undefined
    style: ButtonStyle
    disabled: boolean

    constructor(label: string, icon?: string, style?: ButtonStyle, disabled?: boolean) {
        this.label = label
        this.icon = icon
        this.style = style || ButtonStyle.Primary
        this.disabled = disabled || false
    }
}
export class Button extends Component {
    options: ButtonOptions
    constructor(id: string, callback: Function, options: ButtonOptions) {
        super(id, callback);
        this.options = options
    }

    build(): ButtonBuilder {
        const button: ButtonBuilder = new ButtonBuilder()
            .setCustomId(this.id)
            .setLabel(this.options.label)
            .setStyle(this.options.style)

        if (this.options.disabled) button.setDisabled(true)
        if (this.options.icon) button.setEmoji(this.options.icon)

        return button
    }
}
