
document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault(); 

    var title = document.querySelectorAll('.title');
    var sidebarItem = document.querySelectorAll('.item-sidebar');
    var sidebarClose = document.querySelector('.close-sidebar');
    var sidebarSection = document.querySelector('.sidebar-section');
    var sidebarHeader = document.querySelector('.sidebar-header');
    sidebarClose.addEventListener('click', function(e){

        if(!sidebarClose.classList.contains('close') && sidebarClose.classList.contains('open')){
            openSidebar();
        }else{
            closeSidebar();
        }
    });

    function openSidebar(){
        sidebarClose.classList.remove('open');
        sidebarClose.classList.add('close');
        title.forEach(element => {
            element.classList.add('hidden');
        });
        sidebarItem.forEach(element => {
            element.classList.add('open');
        });
        sidebarSection.classList.remove('open');
        sidebarSection.classList.add('close');
        sidebarHeader.classList.add('align-center');
        sidebarHeader.classList.remove('align-left');
        sidebarClose.classList.remove('rotated'); 
    }
    function closeSidebar(){
        sidebarClose.classList.remove('close');
        sidebarClose.classList.add('open');
        title.forEach(element => {
            element.classList.remove('hidden');
        });
        sidebarItem.forEach(element => {
            element.classList.remove('open');
        });
        sidebarSection.classList.add('open');
        sidebarSection.classList.remove('close');
        sidebarHeader.classList.remove('align-center');
        sidebarHeader.classList.add('align-left');
        sidebarClose.classList.add('rotated');    
    }

    var profile = document.querySelector('.profile-img');
    var dropdownProfile = document.querySelector('.profile-dropdown');

    profile.addEventListener('click', function(e){
        e.preventDefault();
        
        if(!dropdownProfile.classList.contains('hidden')){
            dropdownProfile.classList.add('hidden');
        }else{
            dropdownProfile.classList.remove('hidden');
        }
        
    });

    var dropdownLang = document.querySelector('.dropdown-lang');

    var item_lang = document.querySelectorAll('.item-lang');

    dropdownLang.addEventListener('click', function(e){
        e.preventDefault();
        
        if(!item_lang.classList.contains('active')){
            item_lang.classList.add('active');
        }else{
            item_lang.classList.remove('active');
        }
    });

    item_lang.addEventListener('click', function(e){
        e.preventDefault();
        console.log(e);
    });
});