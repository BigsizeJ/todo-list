let Project = []
let Temp = []
let Task = []
export default Storage = () => {
    const Set = (key, value) => {
        let existingData = Get('task')
        if(existingData !== null) {
            Task = Temp.concat(existingData)
        }
        Task.push(value)
        localStorage.setItem(key, JSON.stringify(Task))
    }

    const Get = (key) => {
        let parse = localStorage.getItem(key)
        return JSON.parse(parse)
    }

    return {Set, Get}
}