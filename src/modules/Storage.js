export default Storage = () => {

    const Set = (key, value) => {
        localStorage.setItem(key, value)
    }

    return {Set}
}