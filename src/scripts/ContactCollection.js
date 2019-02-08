const allContacts = {
    get: function () {
        return fetch("http://localhost:8000/contacts")
            .then(res => res.json()
            )
},

    Post: function (addNewContact) {
        fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addNewContact)
        })
    }
}

export default allContacts