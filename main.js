

setInterval(() => {
    const door = document.querySelector('#HCB_comment_box #hcb_form .hcb-door-out')
    const aide = document.getElementsByClassName('gintama')[0];
    const help = document.querySelector('#hcb_msg');
    if (help.style.display !== 'none') {
        aide.style.top = '34vh';
    } else {
      aide.style.top = '31vh';
}
    if (door.style.display !== 'none') {
        aide.style.display = 'none';
    }
    
}, 500);




