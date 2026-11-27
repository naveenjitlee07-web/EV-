document.querySelectorAll('[data-answer]').forEach(button=>button.addEventListener('click',()=>{document.getElementById('answer').textContent=button.dataset.answer;}));
