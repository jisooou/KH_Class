window.onload = function() {
  var pswInput = document.getElementById('pswInput');
  var pswHelp = document.getElementById('pswHelp');
  
  pswInput.addEventListener('click', function() {
    pswHelp.style.display = 'block';
  });

  const inputs = document.querySelectorAll('#idInput, #pswInput, #pswConfirmInput');

  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      const helpText = this.closest('td').querySelector('.inputHelp'); 
      if (this.value.trim() === '') {
        helpText.style.display = 'block'; 
      } else {
        helpText.style.display = 'none'; 
      }
    });
  });
};
