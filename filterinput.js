

const inputFilterName = () => {
    const filterNameInput = document.getElementById("filterName");
    filterNameInput.addEventListener("input", (event) => {
      const filteredUsers = users.filter(user => user.firstname.toLowerCase().includes(event.target.value.toLowerCase()));
      writeHtml(filteredUsers);
    });
  };