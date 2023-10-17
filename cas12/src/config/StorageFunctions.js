export const getToken = () => {
    return localStorage.getItem("token"); //proverka za dali ima token
}

export const setUserStorage = (token,user) => {
    localStorage.setItem("token",token);
    localStorage.setItem("user",user); // posle login zapis vo localStorage
}

export const removeUserStorage = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
}