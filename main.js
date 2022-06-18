

setInterval(() => {
    const door = document.querySelector('#HCB_comment_box #hcb_form .hcb-door-out')
    const aide = document.getElementsByClassName('gintama')[0];


    if (door !== null && door.style.display !== 'none') {
        aide.style.display = 'none';
    }


}, 500);

setInterval(() => {
    const aide = document.getElementsByClassName('gintama')[0];
    const help = document.querySelector('#hcb_msg')


    aide.style.top = help && help.textContent ? '34vh' : '31vh';



}, 100);




