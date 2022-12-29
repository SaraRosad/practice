
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

    var content_flag = document.querySelector('.dropdown-flag');
    var dropdown_item = document.querySelectorAll('.dropdown-item');

    dropdownLang.addEventListener('click', function(e){
        e.preventDefault();
        
        if(!content_flag.classList.contains('hidden')){
            slideUp('.dropdown-flag');
            content_flag.classList.add('hidden');
        }else{
            content_flag.classList.remove('hidden');
            slideDown('.dropdown-flag');
        }
    });

    dropdown_item.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();
            slideUp('.dropdown-flag');
            content_flag.classList.add('hidden');
            dropdownLang.innerHTML= '';
            dropdownLang.innerHTML= this.lastChild.parentElement.innerHTML;
        });
    });
   

   const ctx = document.getElementById('chart-line');

   new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12,19,3,5,2,3],
            borderWidth: 1
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
   });
   const ctx2 = document.getElementById('chart-circle');
   const data = {
   
    labels:[
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300,50,180],
        backgroundColor:[
            'rgb(255,99,132)',
            'rgb(54,162,235)',
            'rgb(255,205,86)'
        ],
        hoverOffset: 4
    }]
   };
   const config = {
    type: 'doughnut',
    data: data,
   };
   

   new Chart(ctx2, config);
   

    function slideUp(el){
        var elem = document.querySelector(el);
        elem.style.transition = 'all 5s ease-in-out';
        elem.style.height = '0px';
    }

    function slideDown(el){
        var elem = document.querySelector(el);
        elem.style.transition = 'all 5s ease-in-out';
        elem.style.height = 'fit-content';
    }

    document.addEventListener('click', function(e){
        e.preventDefault();
        
        var target = e.target;
        
        if(!target.classList.contains('h-content')){
            slideUp('.dropdown-flag');
            content_flag.classList.add('hidden');
        }
       
    });

});