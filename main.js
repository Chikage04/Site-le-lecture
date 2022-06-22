


setInterval(() => {
    const door = document.querySelector('#HCB_comment_box #hcb_form .hcb-door-out')
    const aide = document.getElementsByClassName('gintama')[0];


    if (door !== null && door.style.display !== 'none') {
        aide.style.display = 'none';
    }


}, 500);

setInterval(() => {
    const Lscreen = screen.width;
    const aide = document.getElementsByClassName('gintama')[0];
    const help = document.querySelector('#hcb_msg')

    if(help && help.textContent){
        if(screen.width < 1090){
            aide.style.top = '37vh'
        } else {
            aide.style.top = '34vh'
        }
    }

}, 100);




