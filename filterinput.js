
const filterNameInput = document.getElementById("filterName");
const inputName = document.createElement("input");

const setupFilterInput = (userList) => {
    inputName.addEventListener('change', (event) => {
        let value = event.target.value;
        writeHtml(userList.filter(user => user.firstname.includes(value)));
    });

    filterNameInput.appendChild(inputName);
};

export { setupFilterInput };