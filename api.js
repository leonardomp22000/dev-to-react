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
    return json.success
}

export async function logIn(email, password) {
    const response = await fetch(`${API_URL}/auth/login`,{
        method: "POST", 
        headers: {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify({
            email: email, 
            password, password 
        })
    })

    const json = await response.json()
    return json.data?.token
    
}
// https://apidevto.onrender.com/users