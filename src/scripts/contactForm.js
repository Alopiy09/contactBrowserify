import allContacts from "./ContactCollection"

const contactForm = () => {
    const contactName = document.querySelector("#contactName").value
    const contactNumber = document.querySelector("#phoneNumber").value
    const contactAddress = document.querySelector("#address").value

    const contactObject = {
        name: contactName,
        number: contactNumber,
        address: contactAddress
    }
    allContacts.Post(contactObject)
}

export default contactForm