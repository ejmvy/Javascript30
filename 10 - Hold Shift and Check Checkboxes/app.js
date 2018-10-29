
const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
    //check if they have shiftKey down
    //AND check if they are checking that checkbox
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        //do what we want
        // loop over every single check box and see if inside range
        checkboxes.forEach(box => {
            console.log(box);
            if(box === this || box === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting checkinnnng');
            }

            if (inBetween) {
                box.checked = true;
            }
        })
    }
    
    
    lastChecked = this;
}

checkboxes.forEach(box => box.addEventListener('click', handleCheck));

