

setInterval(() => {
    const door = document.querySelector('#HCB_comment_box #hcb_form .hcb-door-out')
    const aide = document.getElementsByClassName('gintama')[0];
    const help = document.getElementById('hcb_msg');
    if (door.style.display !== 'none') {
        aide.style.display = 'none';
    }
    if(help.style.display !== 'none'){
        aide.style.top = '34vh';
    }
}, 500);



