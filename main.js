

setInterval(() => {
    const door = document.querySelector('#HCB_comment_box #hcb_form .hcb-door-out')
    const aide = document.getElementsByClassName('gintama')[0];

    if (door.style.display !== 'none') {
        aide.style.display = 'none';
    }
}, 500);



