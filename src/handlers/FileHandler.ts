const fs = require('fs')

module.exports = function handle(path: string, subDirectories?: boolean): string[] {
    const list: string[] = []

    fs.readdirSync(path).forEach((file: string) => {
        if (subDirectories && isDirectory(`${path}/${file}`)) handle(`${path}/${file}/`, subDirectories).forEach((f: string) => list.push(`${file}/${f}`))
        else if (file.endsWith('.ts')) list.push(`${file}`)
    })

    return list
}

function isDirectory(path: string): boolean {
    return fs.lstatSync(path).isDirectory()
}
