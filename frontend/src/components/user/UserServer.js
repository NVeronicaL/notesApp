// Nos conectamos a la API
const API_URL = "http://127.0.0.1:8000/user/";

export const getUser = async (id) => {
    return await fetch(API_URL+'detail-user/'+id);
}

export const updateUser = async(id) => {
    return await fetch(API_URL+'detail-user/'+id);
}

export const listUser = async() => {
    return await fetch(API_URL+'user-list');
}

export const deleteUser = async(id) => {
    return await fetch(API_URL+'detail-user/'+id);
}

export const createUser = async(newUser) => {
    console.log('newUser:', JSON.stringify(newUser))
    
    return await fetch(API_URL+'create-user/', 
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
            // mode: 'no-cors',
        });
}
