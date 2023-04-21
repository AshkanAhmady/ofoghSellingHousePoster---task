export const setStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getStorage = (name: string) => {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage.getItem(name) || "");
  } else {
    return null
  }
};

export const removeStorage = (name: string) => {
  localStorage.removeItem(name)
}
