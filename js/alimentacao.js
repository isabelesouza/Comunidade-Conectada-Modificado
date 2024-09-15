document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('data-tab');
  
        tabContents.forEach(content => {
          content.style.display = 'none';
        });
  
        document.getElementById(target).style.display = 'block';
  
        tabs.forEach(tab => {
          tab.classList.remove('active');
        });
  
        this.classList.add('active');
      });
    });
  
    
    tabs[0].click();
  });
  