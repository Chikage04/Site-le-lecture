


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
    const flag = document.querySelector('.hcb-flag')
    const flag2 = document.getElementsByClassName('hcb-flag');
    const repl = document.querySelector("#HCB_comment_box #hcb_form #replying_to_container")

    if (help && help.textContent) {
        if (screen.width < 1090) {
            aide.style.top = '37vh'
        } else {
            aide.style.top = '34vh'
        }
    }
    if (help && help.textContent) {
        help.textContent = 'Connectez-vous pour commenter'
    }
    if (flag && flag.textContent) {
        flag.textContent = 'Report'
    }
    if (flag2 && flag2.textContent) {
        flag2.textContent = 'Report'
    }
    if (repl && repl.textContent) {
        if (screen.width < 1090) {
            aide.style.top = '34vh'
        }
    }
    if (help && help.textContent && repl && repl.textContent) {
        if (screen.width < 1090) {
            aide.style.top = '41vh'
        }
    }
}, 10);



