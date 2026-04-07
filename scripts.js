// Dark Mode Toggle
function toggleDark(){
    document.body.classList.toggle("dark");
}

// Smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Open Modal
function openModal(id){
    document.getElementById(id).style.display='block';
}

// Close Modal
function closeModal(id){
    document.getElementById(id).style.display='none';
}

// Close modal when clicking outside
window.onclick = function(event){
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal=>{
        if(event.target == modal){
            modal.style.display='none';
        }
    });
}