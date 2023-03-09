export const setToSessionStorage = (key,state) => {
    try {
        sessionStorage.setItem(key,JSON.stringify(state));
    } catch (error) {
      console.error(error)  
    }
};

export const getFromSessionStorage = (key) => {
    try {
        const stateStr = sessionStorage.getItem(key);
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (error) {
        console.error(error);
        return undefined;      
    }
};


