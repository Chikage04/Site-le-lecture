const door = document.getElementsByClassName('hcb-icon hcb-door-out')[0];
const door2 = document.getElementsByClassName('hcb-icon hcb-door-in')[0];
const aide = document.getElementsByClassName('gintama')[0];
if (door.style.display !== 'none') {
    aide.style.display = 'none';
}
if (door2.style.display === 'none') {
    aide.style.display = 'none';
}

