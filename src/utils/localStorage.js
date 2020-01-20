export const getStateLocalStorage = () => {
    const tweetsStorage = localStorage.getItem("tweetList");
    if (tweetsStorage === null) return undefined;
    return JSON.parse(tweetsStorage);
}

export const setStateLocalStorage = (state) => {
    localStorage.setItem("tweetList", JSON.stringify(state))
}