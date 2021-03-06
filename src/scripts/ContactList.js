import contact from "./Contact"
import allContacts from "./ContactCollection"

const listOfContacts = () => {

    allContacts.get()
        .then(
            (parsedInfo) => {
                parsedInfo.forEach((targetObject) => {
                    let contactElement = document.querySelector("allContacts")
                    let contactHTML = contact(targetObject)
                    contactElement.innerHTML += contactHTML
                })
            }
        )
}

export default listOfContacts