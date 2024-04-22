function searchFunction() {
    var input, filter, sections, i, txtValue;
    input = document.querySelector('input[name="search"]');
    filter = input.value.toUpperCase();
    sections = document.getElementsByTagName("section");

    for (i = 0; i < sections.length; i++) {
        txtValue = sections[i].textContent || sections[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            sections[i].style.display = "";
        } else {
            sections[i].style.display = "none";
        }
    }
}