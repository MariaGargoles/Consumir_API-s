

const filterNameInput = document.getElementById("filterName");
const inputName = document.createElement("input");

const setupFilterInput = (users) => { 
    console.log(users)
    inputName.addEventListener('change', (event) => {
        let value = event.target.value;
        writeHtml(users.filter(user => user.firstname.includes(value)));
    });

    filterNameInput.appendChild(inputName);
};

export { setupFilterInput };
