// ======================== js for flex grow ============================
function toggleGrowBox(box) {
    if (box.classList.contains('grow-box')) {
        box.classList.remove('grow-box');
    } else {
        const boxes = document.querySelectorAll('.inner-box');
        boxes.forEach(item => item.classList.remove('grow-box'));
        box.classList.add('grow-box');
    }
}