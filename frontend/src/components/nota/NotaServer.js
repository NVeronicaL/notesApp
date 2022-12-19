// Nos conectamos a la API
const API_URL = "http://127.0.0.1:8000/nota/";

export const getNota = async (id) => {
    return await fetch(API_URL+'detail-nota/'+id);
}

export const updateNota = async(id) => {
    return await fetch(API_URL+'detail-nota/'+id);
}

export const listNota = async() => {
    return await fetch(API_URL+'nota-list',{
        method: "GET"
    });
}

export const deleteNota = async(id) => {
    return await fetch(API_URL+'detail-nota/'+id);
}

export const createNota = async(newNota) => {
    console.log('newNota:', JSON.stringify(newNota))

    return await fetch(API_URL+'create-nota/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNota),
        // mode: 'no-cors',
    });
}