const API_URL = "http://localhost:8080"

export async function registration(name, email, password) {
    const response = await fetch(`${API_URL}/users`, {
        method: "POST", 
        headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            name: name,
            profilePic: "Ref foto", 
            email: email, 
            password: password
        })
    })
    const json = await response.json()
    const isSucces = json.success
    return isSucces
}
// https://apidevto.onrender.com/users