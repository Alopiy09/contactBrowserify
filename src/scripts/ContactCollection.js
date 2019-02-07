const getProducts = () => {
    return fetch("http://localhost:8000/contacts")
    .then(res => res.json)
}
const createOrder = (contactInfo) => {
    return fetch("http://localhost:8000/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactInfo)
    })
        .then(res => res.json())
}


export default getProducts