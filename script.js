const form = document.getElementById('form')
const inputName = document.getElementById('name')
const inputTel = document.getElementById('tel')

let contacts = '<tr>'

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userName = inputName.value
    const userTel = inputTel.value

    let contact = `<tr>`
    contact += `<td>${userName}</td>`
    contact += `<td>${userTel}</td>`
    contact += '</tr>'

    contacts += contact

    inputName.value = ""
    inputTel.value = ""

    const contactList = document.querySelector('tbody')
    contactList.innerHTML = contacts
})