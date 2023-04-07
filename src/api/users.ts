const BASE_NETLIFY_URL = "https://main--lucky-kitsune-021289.netlify.app/.netlify/functions/server";

export const getAllUsers = async() => {
    try {
        const userResponse = await fetch(`${BASE_NETLIFY_URL}/users`)
        return userResponse.json();
    } catch(error) {
        console.log(`Error - ${error}`)
    }
};

export const getUserWithRandomImg = async(userId : number) => {
    try {
        const userResponse = await fetch(`${BASE_NETLIFY_URL}/users/${userId}`)
        return userResponse.json();
    } catch (error) {
        console.log(`Error - ${error}`)
    }
}