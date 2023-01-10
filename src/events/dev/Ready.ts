import {ActivityType, Guild} from "discord.js";
import Event from "~/structures/modules/Event";
import Bot from "~/structures/client/Bot";

module.exports = new Event('ready', (bot: Bot) => {
    bot.user?.setPresence({ activities: [{ name: 'GitHub', type: ActivityType.Watching, url: "https://www.github.com/FreeLance-Toi/ts-bot-template" }], status: 'dnd' })

    if (process.env.DEV_GUILD_ID) {
        const guild: Guild | undefined = bot.guilds.cache.get(process.env.DEV_GUILD_ID ?? '1059967443784708156')
        guild?.commands.set(bot.commands.map(cmd => cmd))
    } else bot.guilds.cache.forEach((guild: Guild) => guild.commands.set(bot.commands.map(cmd => cmd)))
})
