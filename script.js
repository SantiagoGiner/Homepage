document.addEventListener('DOMContentLoaded', function() {
    /* Buttons that toggle information */
    let toggle_buttons = document.querySelectorAll('.toggle_button');
    let toggle_info = document.querySelectorAll('.toggle_information');

    /* Hide the information for now */
    toggle_info.forEach(function(toggle_info) {
        toggle_info.style.display = 'none';
    });
    /* Text asking for suggestions; hide it at first, if it exists */
    let suggestions = document.querySelector('#suggestions');
    if (suggestions) {
        suggestions.style.display = 'none';
    }
    /* When a button is clicked, show the information */
    toggle_buttons.forEach(function(toggle_button) {
       toggle_button.onclick = function() {
           toggle_button.nextElementSibling.style.display = 'block';
           if (suggestions) {
               suggestions.style.display = 'block';
               suggestions.innerHTML = 'Any suggestions? Do just contact me!';
           }
       };
    });
});