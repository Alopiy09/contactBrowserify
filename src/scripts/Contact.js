//creates the contact HTML object
const contact = (contactHTML) =>{
    return `
    <section>
        <h2>${contactHTML.name}</h2>
        <h3>${contactHTML.phoneNumber}</h3>
        <h3>${contactHTML.address}</h3>
    </section>
    `
}

export default contact