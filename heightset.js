function updateHeight() {
    // Sidebar Positioning 
    var ig = document.getElementById('infographic');
    var cm = document.getElementById('contentMain');

    var cmHeight = cm.clientHeight;
    ig.style.height = cmHeight;

};

window.onload = function () {
    updateHeight();
};

window.addEventListener('resize', function() {
    updateHeight();
});