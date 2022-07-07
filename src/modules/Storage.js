const Storage = () => {
  const storage = localStorage;

  const get = (key) => {
    const getter = storage.getItem(key);
    return JSON.parse(getter);
  };

  const set = (key, value) => {
    let existingData = [];
    const temp = [];
    let array = [];
    if (get(key) !== null) {
      existingData = get(key);
    }
    temp.push(value);
    array = temp.concat(existingData);
    storage.setItem(key, JSON.stringify(array));
  };

  return { set, get };
};

export default Storage;
